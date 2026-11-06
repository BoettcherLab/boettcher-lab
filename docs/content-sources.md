# Website content sources

The research summaries and homepage publication cards use the bibliography already bundled in `data/publications.json` and `js/content.js`. The local JSON remains unchanged. Paper titles, author lists, dates and DOI links are displayed from that archive; no missing volume or page information is invented.

The six research descriptions are editorial summaries of the linked publications, not quotations from the original website. The thermo-electrocatalysis page identifies its papers as related work rather than claiming a dedicated recent publication.

## Original website migration still to complete

The public lab text, research overview, recruitment information, educational resources, member biographies, and publication archive have now been migrated locally. Research illustrations still use placeholders. See `content-migration.md` for the migration inventory.

Source pages to review when access is available:

- `https://electrochemistry.berkeley.edu/boettcher-lab`
- `https://electrochemistry.berkeley.edu/boettcher-lab/current-research`
- `https://electrochemistry.berkeley.edu/boettcher-lab/boettcher-lab-team`
- `https://electrochemistry.berkeley.edu/boettcher-lab/join-team`
- `https://electrochemistry.berkeley.edu/boettcher-lab/learn-electrochemistry`
- https://chemistry.berkeley.edu/people/shannon-boettcher

Import original images into `assets/` with descriptive filenames, verify the pictured person/group and date against the source caption, retain credit information, and adapt image cropping to the existing layouts. Verify roster, contact, recruitment and education information against the original pages before updating it. Preserve the local publications archive as the source for the newest publication information.


## Lab and member photographs

The group portrait, summer barbecue, and lab walkthrough photographs were supplied by the site owner in `Boettcher Group Photos.zip`. WebP copies preserve the complete frame and orientation, are resized to a maximum of 1920 pixels, and omit embedded metadata. Their shared captions and alt text are maintained in `GROUP_PHOTOS` in `js/content.js`.

The 48 named member portraits and their roster categories come from the official Boettcher Lab team page (`https://electrochemistry.berkeley.edu/boettcher-lab/boettcher-lab-team`), retrieved for this update at the owner's request. `team-photo-sources.json` records the exact person-to-source-image mapping, including cases with abbreviated or missing source alt text, which were matched using the surrounding named profile. Local WebP copies are stored under `assets/team/`; the website does not hotlink those images. `TEAM` in `js/content.js` controls the displayed names, roles, categories, and portrait paths. This is a manually maintained snapshot, not an automatic roster sync.

Shannon Boettcher’s portrait comes from his linked [official College of Chemistry faculty profile](https://chemistry.berkeley.edu/people/shannon-boettcher); its exact source URL is also recorded in `team-photo-sources.json`.
