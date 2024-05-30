const query = `
{
  musicCollection {
    items {
      sys {
        id
      }
      coverArt {
        title
        description
        contentType
        fileName
        size
        url
        width
        height
      }
      title
      link
      trackType
    }
  }
}
`

const spotlightQuery = `
{
  spotlightReleaseCollection {
    items {
      sys {
        id
      }
      coverArt {
        title
        description
        contentType
        fileName
        size
        url
        width
        height
      }
      title
      link
      trackType
    }
  }
}
`

import BaseLayout from "../../components/layouts/baseLayout";
import MusicCard from "../../components/MusicCard";
import MusicHero from "../../components/MusicHero";
import { getMusic, getSpotlight } from '../../lib/api.js';

export async function getServerSideProps() {
  const musicCollection = await getMusic({ query: query });
  const spotlightReleaseCollection = await getSpotlight({ query: spotlightQuery });
  return { props: { musicCollection, spotlightReleaseCollection } };
}

export default function Music({ musicCollection: { data: { musicCollection: { items: musics }}}, spotlightReleaseCollection: { data: { spotlightReleaseCollection: { items: spotlight }}} }) {
  return (
    <BaseLayout>
      {spotlight.map(({ trackType, title, link, coverArt: { url, title: artTitle }} ) => (
        <MusicHero
          key={title}
          trackType={trackType}
          trackTitle={title}
          listenLink={link}
          alternativeText={artTitle}
          url={url}
        />
      ))}
      <hr className="border-1 border-black mb-4 lg:my-24 invisible lg:visible" />
      <div className="flex flex-wrap gap-16 h-full w-full justify-center lg:justify-between">
        {musics.map(({ trackType, title, link, coverArt: { url, title: artTitle }} ) => (
          <MusicCard
            key={title}
            trackType={trackType}
            trackName={title}
            listenLink={link}
            alternativeText={artTitle}
            url={url}
          />
        ))}
      </div>
    </BaseLayout>
  );
}