# creativecalling.github.io

A personal portfolio and ministry site blending creative design, spiritual inspiration, and outreach tools.

## Tech Stack

- **Framework**: Bootstrap 5.3.2 for responsive design and components
- **Styling**: Custom CSS with dark theme and serif typography
- **Functionality**: Client-side prayer request system with secure email integration
- **Deployment**: GitHub Pages (static hosting)

## Features

- **Prayer Request System**: Interactive form that generates personalized prayers and securely handles requests
- **Story Management**: JSON-based system for sharing and moderating user testimonies
- **Responsive Design**: Mobile-first approach with Bootstrap components
- **Accessibility**: Semantic HTML, ARIA labels, and keyboard navigation

## Preview locally

Run a simple HTTP server from the repository root:

```powershell
# serve current directory on port 8000
python -m http.server 8000
# then open http://localhost:8000/ in your browser
```

## Development

The site uses Bootstrap for styling and includes custom CSS in `assets/css/site.css`. All interactive functionality is implemented with vanilla JavaScript for minimal dependencies.

### File Structure

- `index.html` - Main site with prayer forms and content
- `assets/css/site.css` - Custom component styles
- `assets/stories.json` - User story data
- `thank-you.html` - Confirmation page for form submissions
