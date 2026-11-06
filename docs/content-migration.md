# Public content migration

The site owner requested migration of the old public lab text and removal of all website hyperlinks back to its domain. Public-facing links now point to local pages, local documents, or the original third-party resource. Historical source URLs below are provenance identifiers in code formatting, not website navigation links.

| Source | Local destination | Content retained |
| --- | --- | --- |
| `/boettcher-lab` | `#/about` | Lab mission, research-to-career goals, alumni companies, Oregon-to-Berkeley transition, contact details, laboratory principles |
| `/boettcher-lab/current-research` | `#/research` | Research overview, scientific interests, thesis and faculty talks, selected literature; embedded videos become direct video links |
| `/boettcher-lab/join-team` | `#/join` | Undergraduate, graduate, postdoctoral and visiting opportunities, fellowship lists, group philosophy, diversity and inclusion |
| `/boettcher-lab/boettcher-lab-team` | `#/team` | 48 published biographies and professional contact links, in addition to existing portraits and the four owner-supplied graduate student additions |
| `/boettcher-lab/learn-electrochemistry` | `#/outreach` | MIT electrostatics playlist and electrochemistry video lectures |
| `/summer-electrochemistry-academy` and `/summer-2026-electrochemistry-courses` | `#/outreach` | Academy description, five-course curriculum, prerequisites, minor information, laboratory fee and 2026 schedule/enrollment details |
| `/boettcher-group-publications` | `#/archive` | All 116 source citation entries grouped under the 15 original year headings (2012–2026), including publisher and eScholarship manuscript links |
| `/home` | `#/ceset` | Brief CESET summary covering Berkeley/LBNL history, research priorities, education, partnerships and contact information |

All source paths above were read from the owner-provided source domain, `https://electrochemistry.berkeley.edu`. CESET's new menu item appears immediately before Oregon Center for Electrochemistry.

## Local maintenance

`js/migrated-content.js` contains sanitized long-form text and the publication bibliography. `TEAM` in `js/content.js` contains the member biographies. Main site content remains editable without changing layout functions. The historical bibliography's search covers all imported citation text. The public Publications page now uses the expanded 2020–2026 topic index instead; Scholar and historical-archive navigation links have been removed at the owner's request. The existing recent-publication filters and automated publication snapshot remain separate and unchanged.

Biographies and citations retain their source content. Clear spelling errors in general prose and nonbreaking spaces that prevented mobile wrapping were corrected. Existing role/affiliation annotations and owner-supplied member additions were retained. No biographies or portraits were invented for new members lacking supplied details.

The source's incorrect target for the UC President's Postdoctoral Fellowship link was corrected to the program URL displayed in its label. Malformed source LinkedIn URLs were normalized to the corresponding LinkedIn destination. Source-only styling, scripts, image wrappers, institutional navigation and repeated footer boilerplate were not imported. Old-domain links to selected research PDFs were replaced with corresponding publisher DOI links. Ben Tonnos's earlier image import was corrected to the portrait in his actual profile, and the source-image record was updated.

The 2026 program is labeled by year rather than presented as a future registration cycle. The complete source curriculum and schedule are retained; direct Berkeley course-catalog and Summer Sessions links support enrollment information.

## Documents

The public group philosophy and three syllabi are copied without modifying their PDF contents:

| Local file under `assets/documents/` | Source filename under `/sites/default/files/` |
| --- | --- |
| `group-philosophy-2025.pdf` | `boettcher_lab_group_philosophy_2025.pdf` |
| `electrochemistry-fundamentals-syllabus.pdf` | `syllabus_chmeng186_-_286_electrochemistry_fundamentals.pdf` |
| `electrochemical-engineering-syllabus.pdf` | `syllabus_chmeng187_-_287_electrochemical_engineering.pdf` |
| `electrochemical-projects-syllabus.pdf` | `syllabus_chmeng188_-_288_electrochemical_science_and_engineering_projects_laboratory.pdf` |

The real internal lab website remains on Google Sites; no private pages were accessed or copied. Its public link replaces the former demonstration login and sample reservations.

## Presentation changes

Publications replaces Recent News and Publications throughout the visible interface. The X timeline and its script loader are removed. Small uppercase decorative labels are removed; semantic headings remain. Page titles use available width, normal word wrapping and responsive sizing, so Electrochemistry does not split into a detached final letter. Programmatically focused page titles no longer display an interactive-control outline. Keyboard focus indicators remain for interactive controls.

Asset query versions were updated together so browsers request the matching scripts and styles after this release.
