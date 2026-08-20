# Anand Dutta Portfolio (HTML/CSS/JS)

Premium beige-themed interactive portfolio website built with vanilla HTML, CSS, and JavaScript.

## Run locally

1. Open `index.html` directly in your browser, or
2. Serve the folder with a simple static server.

Example (if Python is available):

```bash
python3 -m http.server 5500
```

Then open `http://localhost:5500`.

## Deploy on Vercel

This repository has a top-level `vercel.json` that serves this `portfolio` folder correctly when the Vercel project root is the repository root.

Recommended setup:

1. Import the repository in Vercel.
2. Keep **Root Directory** as repository root (`portfolio-main`).
3. Framework Preset: **Other**.
4. Build Command: leave empty.
5. Output Directory: leave empty.

After deploy, Vercel will route `/` to `portfolio/index.html` and serve static files from `portfolio/assets`, `portfolio/styles.css`, and `portfolio/script.js`.

## Notes

- Update project links, contact email, and profile URLs in `index.html`.
- Replace placeholder project/demo links with your real GitHub and live demos.
