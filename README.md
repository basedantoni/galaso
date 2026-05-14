# GALASO

**Last Updated:** 2026-05-14

GALASO is a Next.js Pages Router site for the artist GALASO. It serves a full-screen landing page, Contentful-backed music and tour pages, and shared brand navigation to Instagram and merch.

## Stack

- Next.js 14 Pages Router
- React 18
- Tailwind CSS
- Contentful GraphQL via `axios`
- Framer Motion and Lottie for animation
- Three.js and React Three Fiber for experimental visual components

## Project Structure

```text
pages/
  index.js             Landing page
  music/index.js       SSR music catalog from Contentful
  tour/index.js        SSR show list from Contentful
  api/hello.js         Starter API route
components/
  layouts/             Shared page chrome and nav
  MusicCard.js         Music listing card
  MusicHero.js         Spotlight release card
  DotPattern.js        Background dot field
lib/
  api.js               Contentful GraphQL client
  sceneInit.js         Three.js scene helper
hooks/                 Browser media and window hooks
styles/globals.css     Tailwind layers and local font faces
public/                Static images and fonts
docs/CODEMAPS/         Generated architecture notes
```

## Setup

1. Install dependencies:

```bash
npm install
```

2. Configure Contentful:

```bash
cp .env.example .env.local
```

Then set:

```text
CONTENTFUL_BASE_URL=
CONTENTFUL_SPACE_ID=
CONTENTFUL_API_KEY=
```

`CONTENTFUL_BASE_URL` should point at the Contentful GraphQL API host used with `/spaces/{CONTENTFUL_SPACE_ID}`.

3. Run the local server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local Next.js dev server |
| `npm run build` | Build the production bundle |
| `npm run start` | Serve the production build |
| `npm run lint` | Run Next.js linting |

## Routes

| Route | Source | Rendering | Notes |
| --- | --- | --- | --- |
| `/` | `pages/index.js` | Client-rendered page | Uses `HomeLayout` and a responsive listen link for "Talk Too Much" |
| `/music` | `pages/music/index.js` | `getServerSideProps` | Fetches `musicCollection` and `spotlightReleaseCollection` |
| `/tour` | `pages/tour/index.js` | `getServerSideProps` | Fetches `showsCollection` and formats show dates |
| `/api/hello` | `pages/api/hello.js` | API route | Default starter JSON endpoint |

## Contentful Schema Assumptions

The app currently queries these collections:

- `musicCollection`: `coverArt`, `title`, `link`, `trackType`
- `spotlightReleaseCollection`: `coverArt`, `title`, `link`, `trackType`
- `showsCollection`: `venueName`, `date`, `address`, `url`, `pastShow`

The GraphQL client is centralized in `lib/api.js`.

## Documentation

- [Codemap Index](docs/CODEMAPS/INDEX.md)
- [Frontend Codemap](docs/CODEMAPS/frontend.md)
- [Backend/API Codemap](docs/CODEMAPS/backend.md)
- [Integrations Codemap](docs/CODEMAPS/integrations.md)

## Verification Notes

Documentation was refreshed from source on 2026-05-14. Dependency-based checks could not run because `node_modules` is not installed in this workspace.
