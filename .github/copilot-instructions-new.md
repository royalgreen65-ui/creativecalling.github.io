<!-- Copilot / AI agent instructions for creativecalling.github.io -->
# Quick orientation

- Repo type: Static multi-page ministry site using Bootstrap 5.3.2 with custom dark theme
- Key files:
  - `index.html` — Main landing page with prayer request preview and story display
  - `prayer.html` — Dedicated prayer request form with FormSubmit.co integration  
  - `about.html` — Ministry information and philosophy page
  - `assets/css/site.css` — Custom component styles and CSS variables
  - `assets/stories.json` — JSON data for approved user testimonies

## High-level architecture (what to know)

- **Frontend**: Bootstrap 5.3.2 + custom CSS with consistent dark theme using CSS custom properties
- **Styling approach**: Bootstrap components + custom CSS variables (`--accent: #8aa7a1`, etc.) for theming
- **Forms**: FormSubmit.co handles prayer requests (sends to `royal.green65@gmail.com`) with honeypot spam protection
- **Data**: Stories managed via static JSON file (`assets/stories.json`) with approval workflow
- **Dependencies**: Bootstrap CDN + Google Fonts (Source Serif 4) - no build process required

## Primary developer workflows

- **Preview locally**: `npm start` or `python -m http.server 8000` from repository root
- **Deploy**: Push to `main` branch for GitHub Pages auto-deployment
- **Story management**: Edit `assets/stories.json` directly to add/approve testimonies
- **Styling**: CSS custom properties in `:root` for consistent theming across pages

## Patterns & conventions in this repo

- **Page structure**: Each HTML page imports Bootstrap CDN + `assets/css/site.css` + inline styles for page-specific theming
- **Theme consistency**: All pages use same CSS custom properties (`--background: #363636`, `--accent: #8aa7a1`, etc.)
- **Forms**: Use FormSubmit.co with hidden fields for configuration, include honeypot fields for spam protection
- **Buttons**: `.btn-custom` and `.btn-outline-custom` classes for consistent styling across site
- **Typography**: Source Serif 4 Google Font for spiritual/contemplative aesthetic

## Files and critical integration points

- **Form endpoint**: `prayer.html` form action points to `https://formsubmit.co/royal.green65@gmail.com`
- **Stories data**: `assets/stories.json` structure: `{id, author, dateSubmitted, dateApproved, title, body, status, scripture, tags}`
- **Navigation**: Each page has consistent Bootstrap navbar with manual links (no routing system)
- **Email templates**: FormSubmit.co sends emails with hidden field `_subject: "Prayer Request from Creative Calling"`

## What an AI agent should do first when making changes

1. Read the target HTML page to understand its Bootstrap structure and inline styling patterns
2. Check `assets/css/site.css` for existing custom properties and component classes before adding styles
3. For form changes, preserve FormSubmit.co configuration and honeypot spam protection
4. For story updates, follow the JSON structure in `assets/stories.json` with proper status workflow

## Safety and privacy notes

- **Email privacy**: Prayer requests go to <royal.green65@gmail.com> via FormSubmit.co - treat as sensitive data
- **Story moderation**: New stories should have `"status": "pending"` until manually approved
- **No external tracking**: Site intentionally avoids analytics or tracking scripts

## Examples of repository-specific tasks

- **Add new story**: Edit `assets/stories.json`, add object with all required fields, set `status: "pending"`
- **Update styling**: Modify CSS custom properties in `:root` of `assets/css/site.css` for site-wide changes
- **Add new page**: Copy structure from existing HTML page, update navbar links in all pages
- **Form modifications**: Preserve FormSubmit.co action URL and hidden configuration fields

## Development dependencies (note: no build process)

- `package.json` exists with TailwindCSS dependencies but site currently uses Bootstrap + custom CSS
- `src/input.css` appears to be legacy TailwindCSS setup - not actively used
- Site is deployable as-is without running any build commands

## When to ask the maintainer

- Before changing the FormSubmit.co email endpoint or form configuration
- Before adding external dependencies or tracking scripts
- Before modifying the story approval workflow or data structure
