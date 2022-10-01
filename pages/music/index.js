import BaseLayout from "../../components/layouts/baseLayout";
import MusicCard from "../../components/MusicCard";
import MusicHero from "../../components/MusicHero";

export default function Music() {
  return (
    <BaseLayout>
      <MusicHero />
      <hr className="border-1 border-black my-24" />
      <div className="flex flex-wrap justify-center">
        <MusicCard
          trackType="Single"
          trackName="ALL AROUND"
          listenLink="https://lnk.to/yOAPmJFf"
          imageName="all-around.jpeg"
        />
        <MusicCard
          trackType="Single"
          trackName="DRIFT"
          listenLink="https://lnk.to/kKSxZAPY"
          imageName="drift.png"
        />
        <MusicCard
          trackType="Single"
          trackName="SINKING"
          listenLink="https://lnk.to/i3akMP5Z"
          imageName="sinking.jpeg"
        />
      </div>
    </BaseLayout>
  );
}