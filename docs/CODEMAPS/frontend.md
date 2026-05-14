# Frontend Codemap

**Last Updated:** 2026-05-14
**Entry Points:** `pages/_app.js`, `pages/index.js`, `pages/music/index.js`, `pages/tour/index.js`

## Architecture

```text
pages/_app.js
  |
  +-- styles/globals.css
  |
  +-- pages/index.js
  |     +-- components/layouts/homeLayout.js
  |     +-- hooks/useMediaQuery.jsx
  |
  +-- pages/music/index.js
  |     +-- components/layouts/baseLayout.js
  |     +-- components/MusicHero.js
  |     +-- components/MusicCard.js
  |
  +-- pages/tour/index.js
        +-- components/layouts/baseLayout.js
        +-- utils/date.js
```

## Pages

| Module | Purpose | Exports | Dependencies |
| --- | --- | --- | --- |
| `pages/index.js` | Full-screen landing page for "Talk Too Much" with responsive CTA copy | `Home`, `Home.getLayout` | `next/head`, `HomeLayout`, `useMediaQuery` |
| `pages/music/index.js` | Music catalog page with spotlight releases and listing cards | `getServerSideProps`, `Music` | `BaseLayout`, `MusicCard`, `MusicHero`, `getMusic`, `getSpotlight` |
| `pages/tour/index.js` | Show listing page with ticket buttons disabled for past or missing URLs | `getServerSideProps`, `Tour` | `BaseLayout`, `getShows`, `formatDate` |
| `pages/_app.js` | Next.js app shell | `MyApp` | `styles/globals.css` |
| `pages/_document.js` | Custom document for font preconnects and Roboto Mono stylesheet | `Document` | `next/document` |

## Layouts

| Module | Purpose | Exports | Dependencies |
| --- | --- | --- | --- |
| `components/layouts/homeLayout.js` | Landing-page shell with `bg-landing-background` and fixed nav links | `HomeLayout` | `next/link` |
| `components/layouts/baseLayout.js` | Interior shell with dot background, Lottie logo link, tour/music/IG/merch nav | `BaseLayout` | `next/link`, `next/dynamic`, `lottie-react`, `DotPattern`, `FerroFallback` |
| `components/layouts/blackLayout.js` | Dark/simple full-screen shell for visual experiments | `BlackLayout` | `next/link` |

## Components

| Module | Purpose | Exports | Dependencies |
| --- | --- | --- | --- |
| `components/MusicCard.js` | Reusable music release card with cover art and listen button | `MusicCard` | `next/image`, Heroicons, Framer Motion |
| `components/MusicHero.js` | Spotlight release display with larger cover art | `MusicHero` | `next/image`, Heroicons, Framer Motion |
| `components/DotPattern.js` | Generates a large dot field and gradient overlay for interior backgrounds | `DotPattern` | React JSX only |
| `components/FerroFallback.js` | Animated image fallback for Lottie loading | `FerroFallback` | Framer Motion, `next/image`, `public/sludge.png` |
| `components/Loader.js` | React Three Fiber loading overlay | `CanvasLoader` | `@react-three/drei` |
| `components/Shirt.js` | Three.js merch scene that loads `TEE_FINAL.gltf` and links to Shopify when clicked | `App` | Three.js loaders, `SceneInit`, `useMediaQuery` |
| `components/sun.js` | Three.js glowing sun experiment with bloom post-processing | `Sun` | Three.js, `OrbitControls`, post-processing passes |
| `components/WaveCover.jsx` | React Three Fiber shader plane using `public/eclipse.png` | `Home` | React Three Fiber, Drei shader material, GLSL macro |

## Hooks And Utilities

| Module | Purpose | Exports | Dependencies |
| --- | --- | --- | --- |
| `hooks/useMediaQuery.jsx` | Tracks a CSS media query with `window.matchMedia` | `useMediaQuery` | React state/effect |
| `hooks/useWindowDimension.js` | Tracks browser viewport width and height | `useWindowDimensions` | React state/effect |
| `utils/date.js` | Formats date strings as US month/day/year strings | `formatDate` | JavaScript `Date` |

## Styling And Assets

- `styles/globals.css` loads Tailwind layers, global body color/background, and local `@font-face` definitions.
- `tailwind.config.js` defines `allrounder`, `waukegan`, and `mango` font families.
- Tailwind background aliases point to images in `public/`, including `landing-background-004.png`, `bg-desktop.png`, `bg-dark.png`, `galaso-background.webp`, `black.webp`, and `rainbow.webp`.
- `next.config.js` allows remote images from `galaso-strapi-images.s3.amazonaws.com` and `images.ctfassets.net`.

## Data Flow

```text
Contentful response
  |
  +-- pages/music/index.js props
  |     +-- spotlightReleaseCollection.items -> MusicHero
  |     +-- musicCollection.items -> MusicCard
  |
  +-- pages/tour/index.js props
        +-- showsCollection.items -> formatted display rows -> ticket button
```

## Notes

- `MusicCard.js` and `MusicHero.js` import `useMediaQuery` but do not use it.
- `components/Shirt.js`, `components/sun.js`, `components/WaveCover.jsx`, and `components/Loader.js` are present but are not imported by the active pages in this codebase snapshot.
- `Home.getLayout` wraps the already wrapped `Home` component if used, but `_app.js` does not currently call a `getLayout` convention.
