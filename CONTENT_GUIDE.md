# Website Content Guide

## How the site works

The site is built with **Jekyll** and hosted on **GitHub Pages** at `max-schmitz-foriest.com`. The workflow is:

1. Edit files locally on your computer
2. Run `git add`, `git commit`, `git push` in the terminal
3. GitHub automatically rebuilds and publishes the site (takes 1–2 minutes)

You do **not** need to run Jekyll locally unless you want to preview changes before pushing.

---

## Folder structure overview

```
sjmxschm.github.io/
├── _config.yml           ← Site-wide settings (your name, bio, email, social links)
├── _data/
│   ├── navigation.yml    ← Top navigation bar items
│   └── news.yml          ← News feed items shown on About page
├── _pages/
│   ├── about.md          ← About me / homepage
│   ├── cv.md             ← CV page
│   ├── publications.md   ← Publications page (auto-generated from _publications/)
│   ├── teaching.html     ← Teaching page (auto-generated from _teaching/)
│   ├── music.md          ← Music page
│   └── blog.md           ← Blog page
├── _publications/        ← One file per publication
├── _teaching/            ← One file per teaching entry
├── _sass/
│   └── _modern.scss      ← All custom styles (dark theme, cards, etc.)
├── images/               ← Images used on the site
│   └── logos/            ← Institution logos (EPFL, ELLIS, Georgia Tech, etc.)
└── files/                ← PDFs for download (thesis, paper preprints, etc.)
```

---

## Site-wide settings (`_config.yml`)

To update your name, bio, location, or social links, edit `_config.yml`. Key fields:

```yaml
author:
  name: "Max(imilian) Schmitz Foriest"
  bio: "ELLIS PhD Student in Robotics · EPFL LASA"
  location: "Lausanne, CH"
  email: contact@max-schmitz-foriest.com
  googlescholar: https://scholar.google.com/...
  github: "sjmxschm"
  linkedin: "sjmxschm"
  soundcloud: "makz-969860584"
  orcid: "https://orcid.org/..."
```

After editing `_config.yml`, Jekyll must fully rebuild (not just the changed page). Push to GitHub and wait ~2 minutes.

---

## Navigation bar (`_data/navigation.yml`)

Controls which links appear in the top navigation. To add, remove, or reorder items, edit this file:

```yaml
main:
  - title: "Publications"
    url: /publications/
  - title: "Teaching"
    url: /teaching/
  - title: "CV"
    url: /cv/
  - title: "Music"
    url: /music/
```

Each item needs a `title` (displayed text) and a `url` (path on the site).

---

## Adding a publication (`_publications/`)

Create a new `.md` file in `_publications/`. The filename should follow the pattern `YYYY-MM-DD-short-title.md` where the date matches your frontmatter `date:` field.

### File template

```markdown
---
title: "Full paper title here"
collection: publications
type: "Journal Article"
permalink: /publication/YYYY-MM-DD-short-title
date: YYYY-MM-DD
venue: "Journal or Conference Name"
location: "City, Country"
authors: "Author One, Author Two, Author Three"
excerpt: 'One sentence summary shown in the card view.'
abstract: 'Longer abstract shown when the reader clicks "Abstract".'
paperurl: "https://doi.org/..."           # Link for "View Paper" button
preprint_url: "https://github.com/..."    # Link for "↓ Download" button
open_access: true                         # true = "Download Paper", false = "Download Preprint"
citation: "Author et al. (YYYY). Title. Journal."
bibtex: |
  @article{key,
    author = {Author, One},
    title = {Paper Title},
    journal = {Journal Name},
    year = {YYYY}
  }
---

Optional body text shown on the paper's detail page.
```

### Type values (controls the badge color on the card)

| `type:` value       | Badge color  |
|---------------------|--------------|
| `Journal Article`   | Green        |
| `Conference Paper`  | Blue         |
| `Master Thesis`     | Pink         |
| `Report`            | Gray         |

### Button logic

- `paperurl` present → shows a **"View Paper"** button (indigo)
- `preprint_url` present + `open_access: true` → shows **"↓ Download Paper"** (green)
- `preprint_url` present + `open_access: false` → shows **"↓ Download Preprint"** (green)
- For unpublished reports where you only want a download (no "View Paper"), use only `preprint_url` and omit `paperurl`

### Example: unpublished report (download only)

```yaml
preprint_url: "https://github.com/sjmxschm/sjmxschm.github.io/raw/master/files/myreport.pdf"
open_access: true
# no paperurl field
```

### Adding a PDF for download

Put the PDF in the `files/` folder and reference it as:
```
https://github.com/sjmxschm/sjmxschm.github.io/raw/master/files/yourfile.pdf
```

---

## Adding a teaching entry (`_teaching/`)

Create a new `.md` file in `_teaching/`. The filename should start with the year: `YYYY-description.md`.

### File template

```markdown
---
title: "Course or Lecture Title"
collection: teaching
type: "Guest lecture"
permalink: /teaching/YYYY-short-title
venue: "Institution or Lab Name"
date: YYYY-MM-DD
location: "City, Country"
---

Description of the teaching activity. Can include multiple paragraphs, bullet lists, or links.
```

### Type values

| `type:` value           | Badge color  |
|-------------------------|--------------|
| `Undergraduate course`  | Yellow       |
| `Guest lecture`         | Blue         |
| `Student Supervision`   | Purple       |

The `date:` field controls the year badge shown in the top-right corner of the card and also the sort order (newest first).

---

## Adding news items (`_data/news.yml`)

The news feed on the About page reads from `_data/news.yml`. Add new items at the **top** of the list (newest first):

```yaml
- date: "Jun 2026"
  content: "Paper published in <strong>IEEE Robotics &amp; Automation Magazine</strong> — <a href=\"https://...\">Title</a>."

- date: "Aug 2025"
  content: "Started as an <strong>ELLIS PhD Student</strong> at EPFL LASA."
```

Notes:
- `date` is a plain string (e.g., `"Jun 2026"`) — no special format required
- `content` supports HTML: use `<strong>` for bold, `<a href="...">` for links
- Inside YAML double-quoted strings, escape internal double quotes with `\"`

---

## Updating the About page (`_pages/about.md`)

This is the homepage. Edit the Markdown directly. It uses the standard Markdown syntax plus some HTML for institution logo rows:

```html
<div class="about-edu-row">
  <div class="cv-entry__logo--stack">
    <span class="logo-wrap"><img src="/images/logos/logo.png" alt="Institution"></span>
  </div>
  <div class="about-edu-row__text">
    <strong>Degree</strong> at <a href="https://...">Lab, Institution</a>
  </div>
</div>
```

Place logo image files in `images/logos/`.

---

## Updating the CV page (`_pages/cv.md`)

The CV uses card-style entries with this HTML structure:

```html
<div class="cv-section">
  <h2 class="cv-section__title">Section Name</h2>

  <div class="cv-entry">
    <div class="cv-entry__logo">
      <span class="logo-wrap"><img src="/images/logos/logo.png" alt="Org"></span>
    </div>
    <div class="cv-entry__body">
      <p class="cv-entry__title">Role / Degree Title</p>
      <p class="cv-entry__subtitle">Organization · Location</p>
    </div>
    <span class="cv-entry__period">2023 – present</span>
  </div>
</div>
```

The `cv-entry__period` (date/period) appears on the right side of the card.

---

## Music page (`_pages/music.md`)

The music page contains:
1. An intro paragraph (editable plain text/markdown)
2. An embedded SoundCloud player (iframe)
3. Four platform cards: SoundCloud, Spotify, Linktree, DJ website
4. A producer contact box

To update the SoundCloud embed (e.g., to show a specific track instead of the full profile), replace the `src` URL in the iframe. The SoundCloud widget URL builder is at: `https://soundcloud.com/pages/embed`

To change platform links, update the `href="..."` values in the four `<a class="music-card ...">` elements.

---

## Style system (`_sass/_modern.scss`)

All custom CSS lives in `_sass/_modern.scss`. The site uses a dark theme with an indigo accent color (`#818cf8`). Key CSS variables come from `_sass/_variables.scss` (part of the base theme):

- `$primary-color` — indigo `#818cf8`
- `$background-color` — dark background
- `$lighter-gray` — card background color
- `$border-color` — subtle border color
- `$gray` — muted text color
- `$text-color` — main text color

To add styles for a new page, append a new section at the bottom of `_modern.scss`, following the existing `/* ---... SECTION NAME ---... */` comment pattern.

---

## Deploying changes

```bash
git add .
git commit -m "Brief description of what changed"
git push origin master
```

GitHub Pages rebuilds the site automatically. Changes are live within 1–2 minutes. You can monitor the build status in the **Actions** tab of the GitHub repository.

### Branches

- `master` — the live published branch
- `dev_updates` — development branch for drafting changes before publishing

To publish changes from `dev_updates` to the live site, either push directly to `master` or open a pull request from `dev_updates` → `master` on GitHub.
