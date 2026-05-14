# Backend/API Codemap

**Last Updated:** 2026-05-14
**Entry Points:** `lib/api.js`, `pages/music/index.js`, `pages/tour/index.js`, `pages/api/hello.js`

## Architecture

```text
Next.js SSR request
  |
  +-- pages/music/index.js getServerSideProps
  |     +-- getMusic({ query })
  |     +-- getSpotlight({ query })
  |
  +-- pages/tour/index.js getServerSideProps
        +-- getShows({ query })

lib/api.js
  |
  v
axios POST /
  |
  v
CONTENTFUL_BASE_URL/spaces/CONTENTFUL_SPACE_ID
```

## Key Modules

| Module | Purpose | Exports | Dependencies |
| --- | --- | --- | --- |
| `lib/api.js` | Creates the Contentful GraphQL HTTP client and exposes collection-specific request helpers | `getShows`, `getMusic`, `getSpotlight` | `axios`, Contentful env vars |
| `pages/music/index.js` | Runs two server-side GraphQL queries for music content | `getServerSideProps` | `getMusic`, `getSpotlight` |
| `pages/tour/index.js` | Runs a server-side GraphQL query for shows | `getServerSideProps` | `getShows` |
| `pages/api/hello.js` | Starter API route returning static JSON | `handler` | Next.js API route runtime |

## Environment Variables

| Variable | Used In | Purpose |
| --- | --- | --- |
| `CONTENTFUL_BASE_URL` | `lib/api.js` | Base host/path for Contentful GraphQL requests |
| `CONTENTFUL_SPACE_ID` | `lib/api.js` | Contentful space identifier appended to the base URL |
| `CONTENTFUL_API_KEY` | `lib/api.js` | Bearer token for GraphQL API access |

## GraphQL Queries

`pages/music/index.js` queries:

- `musicCollection.items.sys.id`
- `musicCollection.items.coverArt` metadata and URL fields
- `musicCollection.items.title`
- `musicCollection.items.link`
- `musicCollection.items.trackType`
- `spotlightReleaseCollection.items` with the same release fields

`pages/tour/index.js` queries:

- `showsCollection.items.sys.id`
- `showsCollection.items.venueName`
- `showsCollection.items.date`
- `showsCollection.items.address`
- `showsCollection.items.url`
- `showsCollection.items.pastShow`

## Data Flow

```text
Request to /music
  -> getServerSideProps
  -> Contentful music + spotlight queries
  -> destructured page props
  -> MusicHero and MusicCard

Request to /tour
  -> getServerSideProps
  -> Contentful shows query
  -> destructured page props
  -> formatted date rows and ticket actions
```

## External Dependencies

- `axios` `^1.4.0` - HTTP client for Contentful GraphQL POST requests.
- `next` `^14.2.3` - SSR and API route runtime.

## Related Areas

- [Frontend Codemap](frontend.md) for page/component consumers.
- [Integrations Codemap](integrations.md) for Contentful and external service references.

## Notes

- `getShows`, `getMusic`, and `getSpotlight` share the same implementation shape and differ only by function name.
- There is no local database, ORM, queue, or worker code in this snapshot.
- API error handling is currently delegated to the thrown `axios` error path; pages do not catch Contentful failures.
