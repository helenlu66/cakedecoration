# Cake-decoration research project page

A standalone, buildless project page styled after hybridLLMGuided. This is an independent repository, separate from the personal website repository. The personal website links to the project URL; it does not contain the project source.

## Preview

From this repository:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open http://127.0.0.1:8000/.

## Content sources

- Local project manuscript and figures: the cake-decoration project manuscript directory.
- The later author manuscript already linked from the homepage: https://hrilab.tufts.edu/publications/luetal24icsr.pdf. Use this version for the six authors, 18-participant study, and completed findings; the local draft describes an earlier 15-participant pilot.
- Publisher metadata and citation: https://doi.org/10.1007/978-981-96-3519-1_14. Conference: ICSR + AI 2024; proceedings publication: 2025.
- Demo: the local `cake_decoration_short_demo.mp4`, compressed to 720 pixels wide, without audio, with browser-compatible H.264 and fast-start metadata.

All page assets are local. No build, package installation, analytics, or third-party JavaScript is required. The citation-copy button appears when the browser supports the Clipboard API in a secure context; the citation is always selectable.

## Editing

- `index.html`: text, figures, publication links, and BibTeX.
- `style.css`: responsive layout and typography.
- `script.js`: citation copying and accessible status feedback.
- `static/`: optimized figures, video poster, and demonstration clip.
