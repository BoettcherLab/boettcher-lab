# Boettcher Lab website — GitHub Pages

Static HTML/CSS/JavaScript website with an automated, free publications archive.

## Publish

Upload everything in this directory to your existing public GitHub repository, preserving folder structure. In **Settings → Pages**, deploy branch `main` at `/ (root)`. GitHub Pages serves `index.html`.

## Publications: free weekly sync

- **Source:** OpenAlex author [Shannon W. Boettcher (A5032458792)](https://explore.openalex.org/authors/a5032458792).
- **Policy:** New automatically imported records must list Boettcher as the **final author**. This is deliberately narrower than a complete Google Scholar or faculty bibliography. The local archive is preserved, including earlier records with different authorship order.
- **Metadata:** Crossref is queried for journal volume/pages/issue for up to 12 recent works with missing data on each run.
- **Storage:** `data/publications.json`, loaded by `js/app.js`; `js/content.js` remains a fallback if loading fails.
- **Automation:** `.github/workflows/sync-publications.yml`, Monday 12:25 UTC or on demand.

### First run

1. Upload the ZIP contents, including the `.github` folder, into your GitHub repository. Delete the old `sync-scholar.yml` workflow from the repository if it still exists.
2. In GitHub, go to **Actions → Sync publications (OpenAlex + Crossref) → Run workflow**.
3. When the workflow finishes, inspect `data/publications.json` and your Publications page. Future scheduled updates will commit the JSON automatically.
4. If OpenAlex requires API credentials or you wish to increase the free usage allowance, get a **free** API key at [OpenAlex](https://openalex.org/) and put it in **Settings → Secrets and variables → Actions → New repository secret** named `OPENALEX_API_KEY`.
5. Optional: set the repository **Actions variable** `CONTACT_EMAIL` to an institutional email for polite API identification. This is not necessary to publish.


### Quality control

OpenAlex and Google Scholar do not have identical coverage. Author disambiguation, publication type, byline order, and metadata can contain errors. Review newly imported works after the first run; do not treat automated author matching as a substitute for checking the publisher record. Some legacy cached records may not satisfy the strict last-author filter, because the update never deletes existing records. The automated feed is weekly, not real-time.

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

The weekly OpenAlex sync imports works where Shannon W. Boettcher appears anywhere in the verified OpenAlex byline. Papers with him **last** are labeled **Boettcher last author**; papers with him in another position are **Collaborations**. Older records with abbreviated author lists may be **Legacy / unverified**, and are retained without asserting an unsupported author position. Use the **Authorship** dropdown to filter these groups.

`CATEGORY_RULES` in `scripts/sync_publications.py` maps title/abstract keywords to the six existing research topics. Papers may have multiple topics or none. To override a particular paper, set `manual_tags` to an array of topic indices (0–5) in `data/publications.json`. `tags` are automatically regenerated each run; `manual_tags` are never overwritten. Review the category mappings periodically, especially for interdisciplinary publications.

