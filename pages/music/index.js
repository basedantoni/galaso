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

import BaseLayout from "../../components/layouts/baseLayout";
import MusicCard from "../../components/MusicCard";
import MusicHero from "../../components/MusicHero";
import { getMusic } from '../../lib/api.js';
import Image from "next/image";
import { PlayIcon } from "@heroicons/react/20/solid";

export async function getServerSideProps() {
  const musicCollection = await getMusic({ query: query });
  return { props: { musicCollection } };
}

export default function Music({ musicCollection: { data: { musicCollection: { items: musics }}} }) {
  return (
    <BaseLayout>
      {/* Featured LP */}
      <MusicHero
        trackType="LP"
        trackTitle="A Brief Inquiry On Love"
        listenLink="https://ffm.to/a-brief-inquiry-on-love"
        alternativeText="A Brief Inquiry On Love cover art"
        url="/abiol-cover.png"
      />

      <hr className="border-1 border-black mb-4 lg:my-24 invisible lg:visible" />

      <div className="flex flex-col sm:flex-row flex-wrap gap-16 h-full w-full justify-center lg:justify-between">
        {/* Around The Sun EP */}
        <div className="w-full sm:w-1/4">
          <div>
            <Image
              src="/around-the-sun-circle.png"
              alt="Around The Sun cover art"
              width={500}
              height={500}
              layout="responsive"
              className="rounded-xl"
            />
          </div>
          <div className="flex flex-col gap-2 items-center">
            <div className="leading-[140%] text-center">
              <p className="text-gray-400 mt-2">EP</p>
              <h3 className="mb-2 uppercase font-allrounder">Around The Sun</h3>
            </div>
            <a
              className="inline-flex mx-auto items-center rounded-md border border-transparent bg-black px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              href="https://lnk.to/q9XvN0jl"
              target="_blank"
              rel="noreferrer"
            >
              <PlayIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
              Listen
            </a>
          </div>
        </div>

        {/* Existing singles from CMS */}
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
