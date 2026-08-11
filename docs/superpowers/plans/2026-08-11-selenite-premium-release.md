# Selenite Premium Release Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add, publish, and verify four public bilingual Selenite pages matching the repository's existing static app-page convention.

**Architecture:** Create a self-contained `selenite/` section with four semantic HTML documents and one shared stylesheet. Use a tiny shared script for progressive IT/EN switching, update the root sitemap, then push to GitHub so the configured Cloudflare deployment publishes the pages.

**Tech Stack:** Static HTML5, CSS, vanilla JavaScript, SVG/CSS decoration, XML sitemap, Git/GitHub, Cloudflare Pages.

## Global Constraints

- Public routes: `/selenite/`, `/selenite/privacy/`, `/selenite/support/`, `/selenite/terms/`.
- Preserve every existing page, route, deployment convention, and the current 404 behavior.
- Use only local code-native CSS/SVG decoration; add no generated or third-party image assets.
- Primary palette: `#F5F0E7`, `#514D5A`, `#D9CCDF`, `#D8E0D9`, `#B5A1D4`.
- Use Quicksand/Poppins only if available locally; otherwise use privacy-safe sans-serif fallbacks without remote font requests.
- Support keyboard navigation, visible focus, WCAG AA contrast, 320 px viewports, and `prefers-reduced-motion`.
- Add no cookies, tracking, analytics, advertising dependencies, forms, or fake store links.
- Legal dates are 11 August 2026 / 11 agosto 2026.
- Do not claim deployment success until all four production HTTPS URLs return status 200 without authentication.

---

### Task 1: Shared Selenite presentation and language behavior

**Files:**
- Create: `selenite/styles.css`
- Create: `selenite/language.js`
- Test: `/tmp/selenite-static-check.sh`

**Interfaces:**
- Consumes: elements marked `[data-lang="it"]`, `[data-lang="en"]` and controls marked `[data-language]`.
- Produces: a shared responsive visual system and an accessible language switcher that sets `document.documentElement.lang`, element visibility, `aria-pressed`, and `document.title` from `data-title-it` / `data-title-en`.

- [ ] **Step 1: Write a failing static contract check**

Create a temporary shell check that requires the shared CSS variables, reduced-motion rule, focus-visible rule, language hooks, and no external font URLs.

- [ ] **Step 2: Run the contract check and confirm it fails**

Run: `bash /tmp/selenite-static-check.sh`
Expected: FAIL because `selenite/styles.css` and `selenite/language.js` do not exist.

- [ ] **Step 3: Implement the shared files**

Implement the exact palette, responsive layout primitives, translucent paper shapes, buttons, legal-page cards, footer, language selector, keyboard-friendly controls, and progressive language behavior.

- [ ] **Step 4: Run the contract check and confirm it passes**

Run: `bash /tmp/selenite-static-check.sh`
Expected: PASS for the shared-file assertions.

### Task 2: Landing page

**Files:**
- Create: `selenite/index.html`
- Test: `/tmp/selenite-static-check.sh`

**Interfaces:**
- Consumes: `styles.css` and `language.js`.
- Produces: the public bilingual landing at `/selenite/`, plus canonical and Open Graph metadata.

- [ ] **Step 1: Extend the failing check**

Require semantic landmarks, all supplied hero copy, all four chapters, all ten premium claims, three legal links, canonical/robots/Open Graph metadata, and two store controls with no `href`.

- [ ] **Step 2: Run the check and confirm it fails**

Run: `bash /tmp/selenite-static-check.sh`
Expected: FAIL because `selenite/index.html` does not exist.

- [ ] **Step 3: Implement the landing**

Create the semantic responsive page using only CSS and inline SVG decoration, with complete IT/EN copy and disabled App Store/Google Play controls marked Coming soon.

- [ ] **Step 4: Run the check and confirm it passes**

Run: `bash /tmp/selenite-static-check.sh`
Expected: PASS for landing assertions.

### Task 3: Privacy, support, and terms pages

**Files:**
- Create: `selenite/privacy/index.html`
- Create: `selenite/support/index.html`
- Create: `selenite/terms/index.html`
- Test: `/tmp/selenite-static-check.sh`

**Interfaces:**
- Consumes: `../styles.css`, `../language.js`, and sibling/parent navigation paths.
- Produces: the three public App Store/Play Console destination pages with exact bilingual content.

- [ ] **Step 1: Extend the failing check**

Require all three files, exact page titles/dates/key paragraphs and FAQs, canonical metadata, `mailto:gianlorenzotaurchini@gmail.com`, and valid relative navigation.

- [ ] **Step 2: Run the check and confirm it fails**

Run: `bash /tmp/selenite-static-check.sh`
Expected: FAIL because the three documents do not exist.

- [ ] **Step 3: Implement the three pages**

Use the supplied legal and support text verbatim, split into semantic IT/EN sections, and connect landing/footer navigation.

- [ ] **Step 4: Run the check and confirm it passes**

Run: `bash /tmp/selenite-static-check.sh`
Expected: PASS for all content and link assertions.

### Task 4: Sitemap and local validation

**Files:**
- Modify: `sitemap.xml`
- Test: `/tmp/selenite-static-check.sh`

**Interfaces:**
- Consumes: the four production route paths.
- Produces: four discoverable sitemap entries dated `2026-08-11`.

- [ ] **Step 1: Extend the failing check for sitemap coverage**

Require each `https://gianlorenzotaurchini.com/selenite/...` URL exactly once and parse `sitemap.xml` as XML.

- [ ] **Step 2: Run the check and confirm it fails**

Run: `bash /tmp/selenite-static-check.sh`
Expected: FAIL because Selenite entries are absent.

- [ ] **Step 3: Add all four sitemap entries**

Use monthly priority `0.8` for the landing and yearly priority `0.5` for the three support/legal pages.

- [ ] **Step 4: Run full local checks**

Run the static contract, an available HTML validator/parser, `git diff --check`, a local HTTP server plus requests to all four routes, and browser checks at 320 px and desktop with console inspection.
Expected: all checks pass, all four local routes return 200, and no console errors or broken internal links remain.

### Task 5: Commit, publish, and production verification

**Files:**
- Modify: no content files beyond Tasks 1-4.

**Interfaces:**
- Consumes: verified local Selenite section and configured `origin` remote.
- Produces: GitHub commit identifier and Cloudflare-hosted HTTPS pages.

- [ ] **Step 1: Review the final diff and repository status**

Run: `git diff --check && git status --short && git diff --stat`
Expected: only the planned Selenite files, sitemap, specification, and plan are present.

- [ ] **Step 2: Commit the implementation**

Run: `git add selenite sitemap.xml docs/superpowers/plans/2026-08-11-selenite-premium-release.md && git commit -m "feat: add Selenite premium app pages"`
Expected: a new implementation commit on the current branch.

- [ ] **Step 3: Push to GitHub**

Run: `git push origin main`
Expected: remote accepts the commit and triggers the configured Cloudflare deployment.

- [ ] **Step 4: Verify production deployment**

Poll the four exact HTTPS URLs with bounded retries until the new canonical marker is present and each returns HTTP 200 without authentication.
Expected: all four URLs return 200 and contain their expected Selenite page titles.

- [ ] **Step 5: Report only requested delivery data**

Return the four public URLs, deployment commit identifier, and a brief local-build/HTTP verification result, emphasizing Privacy, Support, and Terms.

### Task 6: Portfolio card and terminal command

**Files:**
- Modify: `terminal.js`
- Test: `/tmp/selenite-portfolio-check.sh`

**Interfaces:**
- Consumes: the existing `PROJECTS` model, project-card renderer, modal renderer, and slash-normalizing command parser.
- Produces: a Selenite card in the home portfolio and both `selenite` and `/selenite` terminal access to its project modal.

- [ ] **Step 1: Write the failing portfolio contract**

Require a unique project with `id: 'selenite'`, bilingual card and modal copy, `website: '/selenite/'`, placement immediately after SETTE, and confirmation that the command parser strips a leading slash.

- [ ] **Step 2: Run the check and confirm it fails**

Run: `bash /tmp/selenite-portfolio-check.sh`
Expected: FAIL because `PROJECTS` has no Selenite entry.

- [ ] **Step 3: Add Selenite to the existing project model**

Add one `PROJECTS` object after SETTE using the existing fields exactly: `id`, `name`, `tag_it`, `tag_en`, `shortDesc_it`, `shortDesc_en`, `icon`, `tech`, `description_it`, `description_en`, `features_it`, `features_en`, `website`, `appstore`, and `github`.

- [ ] **Step 4: Verify model, card, modal, and commands**

Run the contract, `node --check terminal.js`, local HTTP checks, and browser interaction for the card plus both command forms. Expected: one visible Selenite card, the project modal opens from all three entry points, `/selenite/` is linked, and the browser console contains no site-origin errors.

- [ ] **Step 5: Commit, push, and verify Cloudflare**

Commit `terminal.js` plus the updated spec and plan, push `main`, then verify that the production home contains the Selenite project data and that `/selenite/` still returns HTTPS 200.
