<!-- Copilot / AI agent instructions for creativecalling.github.io -->
# Quick orientation

- Repo type: tiny static site (single HTML + CSS). No build system, no package.json, no server-side code. Serveable as-is via GitHub Pages or a static file server.
- Key files:
  - `index.html` — single-page site; main markup and small inline script (new prayer form lives in the section with id "prayer").
  - `assets/css/site.css` — global styles; uses CSS custom properties and mobile-first responsive rules.

## High-level architecture (what to know)

- This is intentionally minimal: HTML + CSS with a bit of unobtrusive client-side JS included inline in `index.html`.
- There are no frameworks, build steps, or runtime dependencies. Changes should avoid adding heavy tooling unless the maintainer requests it.
- Pages are static; state should remain client-side only. The existing prayer feature explicitly keeps data in-browser (no network calls).

## Primary developer workflows

- Preview locally: run a simple static server from the repo root. Example (PowerShell):

```powershell
python -m http.server 8000
# then open http://localhost:8000/
```

- GitHub Pages: push to the `main` branch (default) to publish — no special config present.

## Patterns & conventions in this repo

- Styling:
  - All styles live in `assets/css/site.css`.
  - The stylesheet uses CSS variables for color/spacing and a single `.container` width; mirror these variables when adding styles.
  - Keep styles small and scoped by section; prefer utility classes already present (e.g., `.container`, `.button`).

- HTML/JS:
  - `index.html` contains the site's content and small inline scripts. New interactive bits should be small, progressive-enhancing, and avoid external dependencies.
  - Accessibility: use semantic HTML, labels for form fields, and `aria-live` where appropriate (the prayer preview uses `aria-live="polite"`).

- Project philosophy:
  - Minimal, calm, and content-first. Avoid flashy UI or heavy frameworks. Changes should prioritize clarity and quiet design.

<!-- Copilot / AI agent instructions for creativecalling.github.io -->
# Quick orientation

- Repo type: tiny static site (single HTML + CSS). No build system, no package.json, no server-side code. Serveable as-is via GitHub Pages or a static file server.
- Key files:
  - `index.html` — single-page site; main markup and small inline script (new prayer form lives in the section with id "prayer").
  - `assets/css/site.css` — global styles; uses CSS custom properties and mobile-first responsive rules.

## High-level architecture (what to know)

- This is intentionally minimal: HTML + CSS with a bit of unobtrusive client-side JS included inline in `index.html`.
- There are no frameworks, build steps, or runtime dependencies. Changes should avoid adding heavy tooling unless the maintainer requests it.
- Pages are static; state should remain client-side only. The existing prayer feature explicitly keeps data in-browser (no network calls).

## Primary developer workflows

- Preview locally: run a simple static server from the repo root. Example (PowerShell):

```powershell
python -m http.server 8000
# then open http://localhost:8000/
```

- GitHub Pages: push to the `main` branch (default) to publish — no special config present.

## Patterns & conventions in this repo

- Styling:
  - All styles live in `assets/css/site.css`.
  - The stylesheet uses CSS variables for color/spacing and a single `.container` width; mirror these variables when adding styles.
  - Keep styles small and scoped by section; prefer utility classes already present (e.g., `.container`, `.button`).

- HTML/JS:
  - `index.html` contains the site's content and small inline scripts. New interactive bits should be small, progressive-enhancing, and avoid external dependencies.
  - Accessibility: use semantic HTML, labels for form fields, and `aria-live` where appropriate (the prayer preview uses `aria-live="polite"`).

- Project philosophy:
  - Minimal, calm, and content-first. Avoid flashy UI or heavy frameworks. Changes should prioritize clarity and quiet design.

## What an AI agent should do first when making changes

1. Read `index.html` and `assets/css/site.css` to understand existing markup and style variables. The site is small — skim both files fully.
2. Avoid adding build tooling (npm, bundlers, Jekyll) without explicit instruction from the maintainer. If proposing a generator, include a migration checklist and a minimal demo branch.
3. When adding interactivity, prefer inline or small external JS files and keep network/no-telemetry guarantees: don't add analytics or outbound calls unless asked.

## Examples of repository-specific tasks and how to approach them

- Add a new content section: create a new `<section id="..." class="container">` in `index.html`, add headings and content, and minimal CSS in `assets/css/site.css` using existing variables.
- Add a small widget (e.g., guided form): add accessible markup in `index.html`, keep JS unobtrusive and client-only, and add scoped CSS near the bottom of `assets/css/site.css`.

## Files and locations to reference

- `index.html` — canonical content and inline scripts. When changing copy, edit here.
- `assets/css/site.css` — styles for the whole site; use variables at the top (`:root`) for colors and sizing.

## Safety and privacy notes

- The site intentionally avoids server-side processing. Do not add server calls that would send user-submitted prayer text off the device without maintainer approval.

## Quick checklist for PRs

- Keep changes minimal and focused: one feature or copy change per PR.
- Include a brief preview instruction in the PR description: how to preview locally (see 'Preview locally' above).
- If adding JS, include a line or two documenting expected behavior and where it is located (inline or which file).

## When to ask the maintainer

- If you propose adding a build system, CI, or external dependency.
- If a feature requires storing user data or network calls.

---
If anything here is unclear or you want me to expand a workflow (for example, adding a test harness, setting up a preview action, or moving inline JS to a separate file), tell me which area to expand and I will update this file.

# Repo summary (what I discovered)

- This repository currently contains a very small static site: `index.html`, `assets/` (CSS), `README.md`, `LICENSE` and the git metadata. There are no obvious build files (`package.json`, `_config.yml`, `Gemfile`) in the repo root.
- Purpose (from `README.md`): a personal portfolio / ministry site that likely targets GitHub Pages.

# High-level guidance for an AI coding agent

- Work with the explicit repo contents only. If you need to change the site's behavior (build, deploy, preview), first look for the presence of either a static HTML site (`index.html`), a Jekyll site (`_config.yml`, `_layouts/`), or a node-based toolchain (`package.json`). None are present now — ask the maintainer before introducing a new build system.
- Prioritize small, reversible content changes (update `README.md`, add a top-level `index.html`, add `assets/`), and always create a clean PR that explains the change and includes a simple way for the maintainer to preview locally.

# Files and locations to inspect (explicit)

- `README.md` — project description and first stop for content changes.
- `LICENSE` — legal header; preserve unchanged.
- `.git/` — branch and history live here; default branch is `main`.

# Local preview / build guidance (explicit commands)

If no build system is present, preview static files with a simple HTTP server from the repo root. Use PowerShell on Windows:

```powershell
# serve current directory on port 8000
python -m http.server 8000
# then open http://localhost:8000/
```

If the repo later adds Jekyll, run:

```powershell
gem install bundler jekyll; bundle install; bundle exec jekyll serve
```

If `package.json` appears later, prefer the project's npm scripts (run `npm install` then `npm run <script>`).

# Project-specific patterns and safe edit conventions

- There are currently no framework-specific conventions detected. Use these safe, discoverable patterns:
  - Content pages: add `index.html` or `about.md` at repository root for simple pages.
  - Static assets: place images, CSS, JS under an `assets/` or `static/` directory and reference them from HTML.
  - Minor copy edits: directly edit `README.md` or new markdown files.

- Naming: use lowercase directory names (e.g., `assets/`, `images/`) to match common static-site expectations on GitHub Pages.

# PR and commit guidance (what maintainers expect)

- Keep commits small and focused (one feature or content change per PR). Include a brief preview instruction in the PR description (how to preview locally using the commands above).
- Do not add large tooling changes (e.g., switching to a full static site generator) without explicit confirmation from the repo owner. If you propose that, include a migration checklist and a minimal demo branch.

# Integration points / external dependencies

- None detected in the current tree. If a new dependency is added (node gems, npm packages), update `README.md` with install/preview steps.

# Examples (concrete edits an agent may be asked to do)

- Add a landing page: create `index.html` with a short welcome message and a link to `README.md`.
- Add CSS: create `assets/css/site.css` and link it from `index.html`.
- Convert README content to a home page: create `index.md` that borrows text from `README.md`.

# Assumptions I made (please confirm)

- The site is intended to be a simple GitHub Pages-hosted static site.
- No build system exists at the time of authoring these instructions.

# When you need more guidance from the maintainer

- If you (maintainer) expect a specific generator (Jekyll, Hugo, Next.js, etc.), tell the agent which one and share the build commands/scripts.
- If there's a preferred folder layout or naming conventions beyond the defaults above, provide a short spec or example files to follow.

---
Please review this and tell me which workflows you'd like me to expand (for example: add Jekyll rules, npm build steps, or CI/preview guidance). If you'd like, I can also create a minimal `index.html` and `assets/` scaffold in a follow-up PR.
