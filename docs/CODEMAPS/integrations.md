# Integrations Codemap

**Last Updated:** 2026-05-14
**Entry Points:** `lib/api.js`, `next.config.js`, `components/layouts/baseLayout.js`, `components/layouts/homeLayout.js`, `components/Shirt.js`

## Architecture

```text
GALASO Next.js app
  |
  +-- Contentful GraphQL API
  |     +-- musicCollection
  |     +-- spotlightReleaseCollection
  |     +-- showsCollection
  |
  +-- External navigation
  |     +-- Instagram
  |     +-- Shopify merch
  |     +-- too.fm listening link
  |
  +-- Remote images
        +-- images.ctfassets.net
        +-- galaso-strapi-images.s3.amazonaws.com
```

## External Services

| Service | Used By | Purpose |
| --- | --- | --- |
| Contentful GraphQL | `lib/api.js`, `pages/music/index.js`, `pages/tour/index.js` | Source of music, spotlight release, and show data |
| Contentful Images | `next.config.js`, `next/image` consumers | Remote cover-art image rendering from `images.ctfassets.net` |
| Instagram | Shared layouts | External social link to `https://www.instagram.com/galaso__/` |
| Shopify | Shared layouts, `components/Shirt.js` | External merch links |
| too.fm | `pages/index.js` | Landing-page listen link for "Talk Too Much" |
| Google Fonts | `pages/_document.js` | Roboto Mono stylesheet |

## Package Dependencies

| Package | Purpose | Version |
| --- | --- | --- |
| `next` | React framework, SSR, routing, image optimization | `^14.2.3` |
| `react`, `react-dom` | UI runtime | `18.2.0` |
| `tailwindcss` | Utility CSS | `^3.4.4` |
| `axios` | Contentful GraphQL requests | `^1.4.0` |
| `framer-motion` | UI motion for cards and fallback image | `^7.3.6` |
| `lottie-react` | Animated mark in `BaseLayout` | `^2.4.0` |
| `@heroicons/react` | Play icons on listen buttons | `^2.0.10` |
| `three` | Three.js scenes and loaders | `^0.164.1` |
| `@react-three/fiber` | React renderer for Three.js experiments | `^8.12.0` |
| `@react-three/drei` | Drei helpers and shader utilities | `^9.57.2` |
| `babel-plugin-glsl` | GLSL template macro in `WaveCover.jsx` | `^1.0.0` |
| `maath` | Installed math helpers; not imported in current source | `^0.5.2` |
| `next-transpile-modules` | Installed transpilation helper; not configured in current source | `^10.0.0` |

## Image And Asset Allow Lists

`next.config.js` allows these remote image hosts:

- `galaso-strapi-images.s3.amazonaws.com`
- `images.ctfassets.net`

Static local assets live under `public/`, including:

- Landing/background images such as `landing-background-004.png`, `bg-desktop.png`, `galaso-background.webp`, and `rainbow.webp`
- Three.js or shader assets such as `eclipse.png`, `space.webp` references in source, and `sludge.png`
- Local font files under `public/fonts/`

## Environment

`.env.example` documents the required Contentful variables:

```text
CONTENTFUL_BASE_URL=
CONTENTFUL_SPACE_ID=
CONTENTFUL_API_KEY=
```

## Related Areas

- [Backend/API Codemap](backend.md) for Contentful request flow.
- [Frontend Codemap](frontend.md) for component consumers of images, animation, and external links.

## Notes

- `components/Shirt.js` references `TEE_FINAL.gltf`, and `lib/sceneInit.js` references `/space.webp`; those files were not present in `public/` in this snapshot.
- `components/WaveCover.jsx` imports `babel-plugin-glsl/macro` and includes a `glsl-noise` pragma, but `glsl-noise` is not listed in `package.json`.
- `styles/globals.css` references `/fonts/allrounder-Medium.otf`, while the present file is `public/fonts/Allrounder-Medium.otf`; this can matter on case-sensitive filesystems.
