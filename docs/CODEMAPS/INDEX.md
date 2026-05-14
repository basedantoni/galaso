# GALASO Codemap Index

**Last Updated:** 2026-05-14
**Entry Points:** `pages/_app.js`, `pages/index.js`, `pages/music/index.js`, `pages/tour/index.js`, `lib/api.js`

## Architecture

```text
Browser
  |
  v
Next.js Pages Router
  |
  +-- /           -> pages/index.js -> HomeLayout -> static landing asset
  +-- /music      -> getServerSideProps -> lib/api.js -> Contentful GraphQL
  +-- /tour       -> getServerSideProps -> lib/api.js -> Contentful GraphQL
  +-- /api/hello  -> starter API response
  |
  v
Shared components, Tailwind styles, public assets
```

## Areas

| Area | Codemap | Purpose |
| --- | --- | --- |
| Frontend | [frontend.md](frontend.md) | Pages, layouts, components, hooks, styling, and assets |
| Backend/API | [backend.md](backend.md) | Server-side data fetching and local API route |
| Integrations | [integrations.md](integrations.md) | Contentful, external links, image hosts, animation and 3D libraries |

## Key Runtime Paths

| Path | Responsibility |
| --- | --- |
| `pages/_app.js` | Loads global CSS and renders active route component |
| `pages/_document.js` | Adds Google font preconnects and Roboto Mono stylesheet |
| `pages/index.js` | Landing page with listen CTA |
| `pages/music/index.js` | SSR Contentful music and spotlight releases |
| `pages/tour/index.js` | SSR Contentful shows list |
| `components/layouts/baseLayout.js` | Shared interior page navigation, Lottie mark, and dot background |
| `components/layouts/homeLayout.js` | Landing-page background and fixed navigation |
| `lib/api.js` | Axios client and Contentful query wrappers |

## Related Files

- `README.md` for setup and route reference
- `package.json` for scripts and dependencies
- `.env.example` for Contentful environment variables
- `next.config.js` for remote image host allow-listing
- `tailwind.config.js` and `styles/globals.css` for design tokens and fonts

## Verification

- File paths in these codemaps were checked against the workspace on 2026-05-14.
- `npm ls --depth=0` was attempted, but dependencies are not installed in `node_modules`.
