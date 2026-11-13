# Boettcher Lab Onboarding Portal

A GitHub Pages-ready, responsive onboarding website based on **V2 Boettcher Onboarding Hub.docx** (November 13, 2026).

## Included

- Personalized checklist for undergraduate, graduate, and postdoctoral researchers
- UC Berkeley Tan Hall, LBNL, and dual-site onboarding paths
- Four separate content categories: **Administrative Setup**, **Lab Safety & EH&S Training**, **Lab Logistics & Citizenship**, **Instruments & Equipment**
- Additional activity filters (potentiostats, cryogens, compressed gases, BNC, etc.)
- Expandable detailed instructions, original document hyperlinks, role contacts, training list, and useful resources
- Locally saved checklist progress and profile fields (browser `localStorage`)
- **Print / Save as PDF** personalized signature sheet, retaining trainer and final PI sign-offs
- No external JavaScript libraries, backend, build step, or database

## Launch on GitHub Pages

1. Create a new GitHub repository, for example `boettcher-onboarding`.
2. Upload the **contents** of this folder to the repository root (`index.html`, `app.js`, `styles.css`, `data.json`, `favicon.svg`, and this README).
3. In repository **Settings → Pages**, set **Build and deployment → Deploy from a branch**, choose `main` and `/ (root)`, and save.
4. The site will usually appear at `https://YOUR_USERNAME.github.io/boettcher-onboarding/` (unless you use a custom domain or an organization site).

No npm installation or GitHub Actions configuration is required. The site works from GitHub Pages directly.

## Test locally

Because `app.js` fetches `data.json`, do not open `index.html` with a `file://` URL. Instead use:

```bash
cd boettcher-onboarding
python -m http.server 8000
```

Then open <http://localhost:8000>.

## Updating onboarding content

Edit `data.json` (valid JSON). Each task has:

```json
{
  "id": "lbnl-chemical-management",
  "name": "LBNL chemical inventory (CMS)",
  "section": "logistics",
  "location": "lbnl",
  "roles": "all",
  "condition": "always",
  "lines": [{"html": "Instructions here", "list": false}]
}
```

- `section`: `administration`, `safety`, `logistics`, or `equipment`.
- `location`: `all`, `ucb`, or `lbnl`. Choosing **both** displays all applicable tasks.
- `roles`: `all`, or an array containing `undergrad`, `grad`, `postdoc`.
- `condition`: `always`, `potentiostat`, `instruments`, `cryogens`, `gases`, `bnc`, or `piranha`.
- `signoff`: integer 1–11 for a corresponding original trainer sign-off requirement; otherwise `null` or omitted.
- `lines[].location` and `lines[].roles` provide optional instruction-level filtering.
- `trainingTable: true` embeds the course table from `data.json`.

The source guide is preserved in this repository's editable structured content. Multiple site-specific instructions have been separated into their own tasks to avoid showing UCB workflows as LBNL requirements.

## Important limitations

- This is a **self-service guide**, not an official learning-management system. Marking a step complete does **not** verify training or authorize independent lab work.
- Checklists are stored **only on the user's browser/device**. Clearing browser storage or switching devices can erase progress. There is no central coordinator dashboard.
- A printout does **not** constitute an electronic signature. Follow the existing trainer, mentor, and PI authorization procedure.
- GitHub Pages is public hosting. **Do not place restricted lab documents, confidential training records, private access details, or personal employee information** in the repository. Links to authenticated institutional resources may be used.
- The original guide contains missing links and ambiguous requirements. Review before rollout, including Chemical Hygiene Plan, Chemical Inventory Quest, Waste Disposal Quest, and BNC resources. Contact assignments and institutional course requirements should also be verified.
- The site filters tasks to a profile, but facility rules and hazard-specific requirements always take precedence.

## Site design

Palette: warm white `#FAF9F6`, charcoal `#1A1A1A`, navy `#002A54`, light grey dividers. Typography is system-based. The favicon is a simple lightning bolt.