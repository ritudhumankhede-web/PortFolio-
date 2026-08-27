# Ritu Dhumankhede — Portfolio

A personal portfolio site built with vanilla HTML5, CSS3 and JavaScript.
No frameworks, no build step — open it and it runs.

## Folder structure

```
portfolio/
├── index.html          → all page content and structure
├── css/
│   └── style.css        → design tokens, layout, animations, responsive rules
├── js/
│   └── script.js         → mobile menu, scroll reveal, active nav link, back-to-top
├── images/               → put your photo, resume PDF and project screenshots here
└── README.md
```

## What each file does

- **index.html** — every section of the site (navbar, hero, about, skills, projects,
  journey, resume CTA, contact, footer) in semantic HTML. Comments mark each section.
- **css/style.css** — the entire visual design. Section 1 at the top (`:root`) holds
  the five colors as CSS variables — change a value there and it updates everywhere.
- **js/script.js** — no dependencies. Handles the hamburger menu, scroll-triggered
  fade/slide-in animations, highlighting the current section in the navbar, the
  back-to-top button, and a subtle mouse-parallax on the hero graphic.

## How to run it

No installation needed.

1. Open `index.html` directly in a browser, **or**
2. For live-reload while editing, use VS Code's "Live Server" extension, or run
   `python3 -m http.server` inside the `portfolio` folder and visit
   `http://localhost:8000`.

## Where to customize

| What | Where |
|---|---|
| Project info (titles, descriptions, tech, links) | `index.html`, inside `<section class="projects">` — each `<article class="project-card">` is one project. Replace the `<div class="project-card__placeholder">` with an `<img>` once you have real screenshots. |
| Profile photo | Not used in the current design (an abstract botanical graphic replaces the usual headshot in the hero). If you'd like to add one, the natural spot is the `.about__grid` in the About section — add an `<img>` alongside `about__intro` and adjust `.about__grid` to a 3-column layout. |
| Resume file | Add your PDF to `images/resume-placeholder.pdf` (or update the `href` in the three places it's linked: navbar button, hero button, resume section button) to match your actual filename. |
| GitHub / LinkedIn links | `index.html` — search for `your-username` and `your-profile` in the Contact section and footer, and replace `your.email@example.com` with your real email. |
| Colors, fonts, spacing | `css/style.css`, top of the file under `:root`. |
| Timeline entries | `index.html`, inside `<section class="journey">` — each `.timeline__item` is one year. |

## Notes

- The site is fully responsive (desktop, laptop, tablet, mobile) with a dedicated
  mobile navigation menu rather than a shrunk desktop layout.
- Animations respect `prefers-reduced-motion` for users who've disabled motion.
- All interactivity (menu, smooth scroll, reveal animations) is in `js/script.js` —
  no external libraries are used, so there's nothing extra to install.
