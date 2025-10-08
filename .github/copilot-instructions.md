<!-- Copilot / AI agent instructions for creativecalling.github.io -->
# Repo summary (what I discovered)

- This repository currently contains a very small static site: only `README.md`, `LICENSE` and the git metadata. There are no obvious build files (`package.json`, `_config.yml`, `Gemfile`, `index.html`, or site folders) in the repo root.
- Purpose (from `README.md`): a personal portfolio / ministry site that likely targets GitHub Pages.

# High-level guidance for an AI coding agent

- Work with the explicit repo contents only. If you need to change the site's behavior (build, deploy, preview), first look for the presence of either a static HTML site (index.html), a Jekyll site (`_config.yml`, `_layouts/`), or a node-based toolchain (`package.json`). None are present now — ask the maintainer before introducing a new build system.
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
