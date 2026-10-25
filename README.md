# Leo Leung — Spatial Portfolio

Live site: https://s3corper.github.io/portfolio/

A responsive static portfolio with three case studies, eleven coursework entries, and downloadable source notebooks. No framework, Ruby, Jekyll, npm dependencies, or server is required.

## Edit and preview

Requires Node.js.

```sh
npm run build
npm run check
npm run preview
```

Preview at http://127.0.0.1:4173/portfolio/.

- Content and page generation: `scripts/build.mjs`
- Styling: `assets/portfolio/site.css`
- Interactions: `assets/portfolio/site.js`
- Evidence and attribution: [CONTENT_SOURCES.md](CONTENT_SOURCES.md)

Rebuild after editing. Generated `index.html` and `work/*/index.html` are tracked so GitHub Pages can serve them directly. `dist/` is an ignored local preview bundle.

## Publish

GitHub Pages serves the root of `main`. The `.nojekyll` file disables Jekyll processing. After building and checking, commit and push to `main`; GitHub deploys the update automatically. All page assets and case-study links support the `/portfolio/` project path.

## Contact and source material

The form validates visitor input and prepares an email draft for leungchikiu025@gmail.com. The visitor opens and sends it in their email client; the site does not deliver or store messages.

Notebook downloads omit saved outputs and input datasets. Recorded results and figures appear on the project pages. Original coursework files remain in their original folders. The résumé links to the selected Google Doc without changing its permissions.

The previous Sites deployment record remains in the ignored local `.sites/` directory; it is not required by GitHub Pages. The original theme license is retained in LICENSE.md.
