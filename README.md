# Boettcher Lab website — GitHub Pages

Static HTML/CSS/JavaScript website with an automated, free publications archive.

## Publish

Upload everything in this directory to your existing public GitHub repository, preserving folder structure. In **Settings → Pages**, deploy branch `main` at `/ (root)`. GitHub Pages serves `index.html`.

## Publications: free weekly sync

- **Source:** OpenAlex author [Shannon W. Boettcher (A5032458792)](https://explore.openalex.org/authors/a5032458792).
- **Policy:** Import verified Boettcher-authored research records from 2020–2026, including collaborations. Preserve curated records, topic annotations, and graphics; exclude conference abstracts, datasets and duplicate preprints.
- **Metadata:** Crossref is queried for journal volume/pages/issue for up to 12 recent works with missing data on each run.
- **Storage:** `data/publications.json`, loaded by `js/app.js`; `js/content.js` remains a fallback if loading fails.
- **Automation:** `.github/workflows/sync-publications.yml`, Monday 12:25 UTC or on demand.


### Maintain content

| Change | File |
| --- | --- |
| Publication synchronization logic | `scripts/sync_publications.py` |
| Scheduled update frequency | `.github/workflows/sync-publications.yml` |
| Cached bibliography | `data/publications.json` |
| Other website content, including people and topics | `js/content.js` |
| Page layout and interactions | `js/app.js` |
| Styling | `css/styles.css`, `css/additional.css` |
| Logo and placeholder image | `assets/` |

To run locally: `python -m http.server 8000`, then open `http://localhost:8000`.

## Automatic research categories and collaborative publications

The weekly OpenAlex sync imports works where Shannon W. Boettcher appears anywhere in the verified OpenAlex byline. The interface shows **Collaboration** only for verified non-final-author records. Other papers have no authorship label. Topic bubbles, text search and year selection control the displayed results.

`CATEGORY_RULES` in `scripts/sync_publications.py` maps title/abstract keywords to the six existing research topics. Papers may have multiple topics or none. To override a particular paper, set `manual_tags` to an array of topic indices (0–5) in `data/publications.json`. `tags` are automatically regenerated each run; `manual_tags` are never overwritten. Review the category mappings periodically, especially for interdisciplinary publications.



## Navigation and layout

The homepage uses native document scrolling for wheel, touch, and keyboard input. Section arrows and the labeled molecular navigation are optional shortcuts. Sections grow to fit their content; do not add fixed heights or nested scrolling to homepage content. Main page links are visible on desktop and available in the menu on smaller screens.

Research topics are selected manually, with shareable URLs such as `#/research?topic=bipolar`. They do not advance automatically. Topic content remains in `js/content.js`. Responsive layout rules are in `css/additional.css`; base visual styles are in `css/styles.css`.

Lab photos are stored in `assets/` and listed in `GROUP_PHOTOS` in `js/content.js`. The homepage and Group Members page share the same manually controlled gallery. Images retain their full aspect ratio, with captions below the image. No visual editor or CMS is configured.

Member portraits are stored in `assets/team/`. Maintain names, categories, roles, and image paths in `TEAM` in `js/content.js`; see `docs/team-photo-sources.json` for image provenance. The roster reflects an imported snapshot of the official team page and is not automatically synchronized.

## Migrated public text and CESET

Long-form lab, research, recruitment and education content is maintained in `js/migrated-content.js`. Member biographies remain with `TEAM` in `js/content.js`. The historical 116-citation source bibliography remains at `#/archive` for existing bookmarks. The public Publications page focuses on verified 2020–2026 records, with no links to Scholar or the historical archive.

`#/about` contains the lab overview and principles. `#/ceset` contains the Berkeley center summary, linked immediately above Oregon Center in the menu. Public documents are served from `assets/documents/`. See `docs/content-migration.md` for the source inventory and maintenance notes. Source-domain URLs appear only in provenance records, not in public page hyperlinks.

When changing JavaScript or CSS, bump the asset query versions in `index.html` together so returning browsers fetch a compatible set of files.

## Publication topics and graphics

The Publications page offers 20 topic bubbles. Selecting multiple topics uses AND matching, combined with text search and year filtering; filter state is retained in the URL. `data/publication-topics.json` defines the taxonomy and classification rules; `js/publication-topics.js` supplies the same definitions to the browser. `keywords` and `metadata_keywords` in each publication record support the topic index. The weekly sync preserves existing graphic metadata and assigns topics to incoming records.

Article graphics live in `assets/publications/`. Verified source URLs, source pages, and TOC-versus-figure classifications are recorded in `docs/publication-graphics.json`. Missing or unverified graphics are omitted without placeholder boxes. See `docs/publication-index.md` for the corpus and validation notes.
