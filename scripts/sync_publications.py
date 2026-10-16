#!/usr/bin/env python3
"""Free OpenAlex author bibliography sync, with optional Crossref DOI enrichment.
Keeps the local snapshot on errors and preserves curated/local records.
"""
import datetime as dt
import json
import os
import re
import sys
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / 'data' / 'publications.json'
AUTHOR_ID = 'A5032458792'  # Shannon W. Boettcher, verified OpenAlex author profile
BASE = 'https://api.openalex.org'
MAIL = os.getenv('CONTACT_EMAIL', '').strip()
HEADERS = {'User-Agent': 'BoettcherLabPublications/2.0' + (f' (mailto:{MAIL})' if MAIL else '')}
ALLOWED_TYPES = {'article', 'review', 'preprint', 'letter', 'editorial', 'book-chapter', 'proceedings-article'}


def request_json(url, params=None):
    if params:
        url += '?' + urllib.parse.urlencode(params)
    req = urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(req, timeout=40) as resp:
        return json.load(resp)


def norm(text):
    return re.sub(r'[^a-z0-9]+', '', (text or '').lower())


def normalized_doi(value):
    value = (value or '').strip()
    return re.sub(r'^(?:https?://(?:dx\.)?doi\.org/|doi:)', '', value, flags=re.I).lower()


def openalex_works():
    cursor = '*'
    results = []
    for _ in range(30):  # 30 x 200 > expected author output
        params = {'filter': f'authorships.author.id:{AUTHOR_ID}', 'per_page': 200, 'cursor': cursor}
        if os.getenv('OPENALEX_API_KEY'):
            params['api_key'] = os.environ['OPENALEX_API_KEY']
        data = request_json(BASE + '/works', params)
        works = data.get('results')
        if not isinstance(works, list):
            raise RuntimeError('OpenAlex results missing')
        results.extend(works)
        cursor = (data.get('meta') or {}).get('next_cursor')
        if not works or not cursor:
            break
    else:
        raise RuntimeError('Unusually large bibliography: cursor limit reached')
    if not results:
        raise RuntimeError('OpenAlex returned no works; retaining previous snapshot')
    return results


def authorship_role(work):
    authorships = work.get('authorships') or []
    if not authorships or len(authorships) >= 100:
        return None
    positions = [i for i, item in enumerate(authorships)
                 if (item.get('author') or {}).get('id', '').rstrip('/').endswith('/' + AUTHOR_ID)]
    if len(positions) != 1:
        return None
    return 'group' if positions[0] == len(authorships) - 1 else 'collaboration' 


# Multiple categories may apply. Match specific phrases before broad words; ambiguous
# standalone tokens such as "cell", "transfer" or "oxygen" are deliberately excluded.
CATEGORY_RULES = {
    0: [r'bipolar[ -]membran', r'water[ -]dissociat', r'water[ -]splitting[ -]junction'],
    1: [r'anion[ -]exchange[ -]membran', r'hydroxide[ -]exchange[ -]membran', r'alkaline[ -]membran[ -]electroly', r'ionomer'],
    2: [r'interfacial[ -]ion[ -]transfer', r'ion[ -]transfer[ -]kinetic', r'liquid[ -]liquid[ -]interface', r'nanopipett', r'electrified[ -]interface'],
    3: [r'thermo[ -]electrocatal', r'temperature[ -]dependent[ -]electrocatal', r'thermally[ -]enhanced[ -]electro'],
    4: [r'photoelectrochem', r'photo[ -]electrochem', r'photoanod', r'photocathod', r'bivo4', r'photooxidat'],
    5: [r'oxygen[ -]evolution', r'oxygen[ -]evolution[ -]reaction', r'\boer\b', r'oxyhydroxide'],
}


def classify(title, abstract='', manual_tags=None):
    text = (title + ' ' + (abstract or '')).lower()
    predicted = [tag for tag, patterns in CATEGORY_RULES.items()
                 if any(re.search(pattern, text) for pattern in patterns)]
    # Explicit manual tags, when supplied, take precedence over predictions.
    if manual_tags is not None:
        return sorted(set(tag for tag in manual_tags if isinstance(tag, int) and 0 <= tag < 6))
    return predicted


def abstract_text(work):
    inverted = work.get('abstract_inverted_index') or {}
    if not inverted:
        return ''
    pairs = [(pos, token) for token, positions in inverted.items() for pos in positions]
    return ' '.join(token for _, token in sorted(pairs))


def infer_legacy_role(record):
    # Legacy citations sometimes end in "et al." and cannot be reliably assigned.
    authors = record.get('authors', '')
    names = [part.strip() for part in authors.split(',')]
    if not any(re.search(r'\bBoettcher\b', part, re.I) for part in names):
        return 'unverified'
    if re.search(r'\bet al\.?$', names[-1], re.I):
        return 'unverified'
    return 'group' if re.search(r'\bBoettcher\b', names[-1], re.I) else 'collaboration'


def crossref_fields(doi):
    try:
        data = request_json('https://api.crossref.org/works/' + urllib.parse.quote(doi, safe=''))
        msg = data.get('message') or {}
        return {'volume': str(msg.get('volume') or ''),
                'pages': str(msg.get('page') or msg.get('article-number') or ''),
                'issue': str(msg.get('issue') or ''),
                'journal': (msg.get('container-title') or [''])[0]}
    except (urllib.error.URLError, TimeoutError, ValueError, KeyError) as exc:
        print('Crossref unavailable for ' + doi + ': ' + str(exc), file=sys.stderr)
        return {}


def convert_work(w, old):
    title = (w.get('title') or '').strip()
    role = authorship_role(w)
    if not title or not role:
        return None
    if w.get('type') not in ALLOWED_TYPES:
        return None
    doi = normalized_doi(w.get('doi'))
    prior = old.get('doi:' + doi, {}) if doi else {}
    prior = prior or old.get('title:' + norm(title), {})
    authors = ', '.join((a.get('author') or {}).get('display_name') or '' for a in w['authorships']).strip(', ')
    venue = (((w.get('primary_location') or {}).get('source') or {}).get('display_name') or '')
    record = dict(prior)
    record.update({'id': prior.get('id') or 'openalex-' + w['id'].rsplit('/', 1)[-1],
                   'title': title, 'year': int(w.get('publication_year') or 0),
                   'authors': authors or prior.get('authors', ''),
                   'journal': venue or prior.get('journal', 'Publication'),
                   'doi': doi or prior.get('doi', ''),
                   'url': 'https://doi.org/' + doi if doi else (w.get('id') or prior.get('url', '')),
                   'tags': classify(title, abstract_text(w), prior.get('manual_tags')),
                   'role': role, 'source': 'OpenAlex',
                   'openalex_id': w.get('id', '')})
    return record


def main():
    prior_data = json.loads(OUTPUT.read_text(encoding='utf-8')) if OUTPUT.exists() else {'publications': []}
    previous = prior_data.get('publications', [])
    old_lookup = {}
    for p in previous:
        if p.get('doi'):
            old_lookup['doi:' + normalized_doi(p['doi'])] = p
        if p.get('title'):
            old_lookup['title:' + norm(p['title'])] = p
    # Annotate legacy records without removing any earlier citations.
    for p in previous:
        p['role'] = p.get('role') if p.get('role') in ('group', 'collaboration') else infer_legacy_role(p)
        p['tags'] = classify(p.get('title', ''), manual_tags=p.get('manual_tags'))
    works = openalex_works()
    generated = [p for w in works if (p := convert_work(w, old_lookup))]
    if len(generated) < 15:
        raise RuntimeError(f'Only {len(generated)} qualifying Boettcher-authored works returned; retaining prior snapshot')
    # Only enrich recent items; avoids hundreds of weekly Crossref requests.
    to_enrich = [p for p in sorted(generated, key=lambda p: p['year'], reverse=True)
                 if p.get('doi') and (not p.get('volume') or not p.get('pages'))][:12]
    for p in to_enrich:
        details = crossref_fields(p['doi'])
        for field in ('volume', 'pages', 'issue'):
            if not p.get(field) and details.get(field):
                p[field] = details[field]
        if p['journal'] == 'Publication' and details.get('journal'):
            p['journal'] = details['journal']
    # Preserve locally added bibliography and any previously found records not returned this week.
    by_key = {}
    for p in previous + generated:
        key = 'doi:' + normalized_doi(p['doi']) if p.get('doi') else 'title:' + norm(p.get('title'))
        if key not in {'doi:', 'title:'}:
            by_key[key] = p
    records = sorted(by_key.values(), key=lambda p: (int(p.get('year') or 0), p.get('title', '')), reverse=True)
    result = {'source': 'OpenAlex (Boettcher group and collaborative works), Crossref, and preserved bibliography',
              'profile': 'https://openalex.org/authors/' + AUTHOR_ID,
              'updated_at': dt.datetime.now(dt.timezone.utc).isoformat(timespec='seconds'),
              'publications': records}
    temp = OUTPUT.with_suffix('.tmp')
    temp.write_text(json.dumps(result, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    temp.replace(OUTPUT)
    print(f'Updated {len(records)} publications; {len(generated)} OpenAlex Boettcher-authored works.')


if __name__ == '__main__':
    try:
        main()
    except Exception as error:
        print('Sync failed; existing bibliography preserved: ' + str(error), file=sys.stderr)
        sys.exit(1)
