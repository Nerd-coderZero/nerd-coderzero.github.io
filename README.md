# Kushagra Jaiswal — ML Engineer Portfolio

Personal portfolio website for Kushagra Jaiswal, ML Engineer and Research Lead.

**Live site:** https://nerd-coderzero.github.io

## Stack

- Pure HTML, CSS, JavaScript — no frameworks, no build step
- Hosted on GitHub Pages (free)
- Google Fonts via CDN

## Structure

```
portfolio/
├── index.html          # Main portfolio page
├── css/
│   └── style.css       # All styles (CSS variables at top for easy theming)
├── js/
│   └── main.js         # Nav scroll, mobile menu, reveal animations
├── assets/             # Place images here (headshot, project screenshots)
└── README.md
```

## How to update content (5 minutes or less)

### Add a new project
Find the `<!-- Projects -->` section in `index.html`.
Copy an existing `<article class="project-card">` block and update:
- `project-domain` span text
- `project-type` span text (Case Study / Open Source)
- `metric-value` and `metric-label`
- `project-title` h3
- `project-desc` paragraph
- `project-tags` spans
- `project-links` section

### Add a blog post
Find the `<!-- Writing -->` section in `index.html`.
Copy an existing `<article class="post-item">` block and update the title, tag, date, and description.

### Update personal details
All contact info is in `index.html` in the `<!-- Contact -->` section.
Stats are in the `<!-- Hero -->` section.

### Add a headshot
Place `headshot.jpg` in the `assets/` folder.
In `index.html`, find `.portrait-placeholder` div and replace it with:
```html
<img src="assets/headshot.jpg" alt="Kushagra Jaiswal" class="portrait-img" />
```
Add to `style.css`:
```css
.portrait-img { width: 180px; height: 180px; border-radius: 3px; object-fit: cover; border: 1px solid var(--rule); }
```

## Deploy to GitHub Pages

1. Push this repository to GitHub under your account (`Nerd-coderZero`)
2. Repository name: `nerd-coderzero.github.io` (for root domain) OR any name (for `nerd-coderzero.github.io/repo-name`)
3. Go to repo Settings > Pages > Source: Deploy from branch > main > / (root)
4. Site is live in ~60 seconds

## Custom domain (optional)

1. Create a file named `CNAME` in the repo root with one line: `yourdomain.com`
2. Point your domain's DNS A records to GitHub Pages IPs (docs.github.com/pages)
