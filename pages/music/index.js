import BaseLayout from "../../components/layouts/baseLayout";
import MusicCard from "../../components/MusicCard";
import MusicHero from "../../components/MusicHero";
import { getMusic, getSpotlight } from '../../lib/api.js';

export async function getServerSideProps() {
  const musics = await getMusic();
  const spotlight = await getSpotlight();
  return { props: { musics, spotlight } };
}

export default function Music({ musics: { data: musics }, spotlight: { data: spotlight } }) {
  return (
    <BaseLayout>
      {spotlight.map(({ attributes: { 'track_type': trackType, name, link, 'cover_art': { data: { attributes: { url, alternativeText, formats: { small }}}}}, id }) => (
        <MusicHero
          key={id}
          trackType={trackType}
          trackName={name}
          listenLink={link}
          smallUrl={small.url}
          alternativeText={alternativeText}
          url={url}
        />
      ))}
      <hr className="border-1 border-white mb-4 lg:my-24 invisible lg:visible" />
      <div className="flex flex-wrap justify-center lg:justify-between">
        {musics.map(({ attributes: { 'track_type': trackType, name, link, 'cover_art': { data: { attributes: { url, alternativeText, formats: { small }}}}}, id }) => (
          <MusicCard
            key={id}
            trackType={trackType}
            trackName={name}
            listenLink={link}
            smallUrl={small.url}
            alternativeText={alternativeText}
            url={url}
          />
        ))}
      </div>
    </BaseLayout>
  );
}