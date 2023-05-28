import BaseLayout from "../../components/layouts/baseLayout";
import MusicCard from "../../components/MusicCard";
import MusicHero from "../../components/MusicHero";
import { useState } from "react";


export default function Music() {
  const [albumns, setAlbumns] = useState([
    { trackType: 'Single', trackName: "IN THE DARK", listenLink: "https://lnk.to/eSVYClNn", imageName: "in-the-dark.webp", id: 1 },
    { trackType: 'Single', trackName: "ALIVE", listenLink: "https://lnk.to/USbl3erH", imageName: "alive.webp", id: 2 },
    { trackType: 'Single', trackName: "SINKING", listenLink: "https://lnk.to/i3akMP5Z", imageName: "sinking.webp", id: 3 },
    { trackType: 'Single', trackName: "ALL ROUND", listenLink: "https://lnk.to/yOAPmJFf", imageName: "all-around.webp", id: 4 },
    { trackType: 'Single', trackName: "DRIFT", listenLink: "https://lnk.to/kKSxZAPY", imageName: "drift.webp", id: 5 },
    { trackType: 'Single', trackName: "AROUND THE SUN", listenLink: "https://lnk.to/wOqlGZtb", imageName: "around-the-sun-single.webp", id: 6 },
  ]);

  return (
    <BaseLayout>
      <MusicHero />
      <hr className="border-1 border-black my-24" />
      <div className="flex flex-wrap justify-center">
        {albumns.map(({ trackType, trackName, listenLink, imageName, id }) => (
          <MusicCard
            key={id}
            trackType={trackType}
            trackName={trackName}
            listenLink={listenLink}
            imageName={imageName}
          />
        ))}
      </div>
    </BaseLayout>
  );
}