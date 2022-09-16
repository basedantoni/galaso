import Image from "next/image"
import { PlayIcon } from "@heroicons/react/20/solid"

const MusicHero = () => {
  return (
    <>
      <div className="w-full my-4">
        <div className="max-w-md mx-auto">
          <Image
            src="/around-the-sun-greeneyes.jpeg"
            alt="cover"
            width={415}
            height={415}
            layout="responsive"
            className="rounded-md"
          />
        </div>
        <div className="flex flex-col items-center">
          <p className="text-gray-400 mt-2">ALBUM</p>
          <h6 className="mb-2">AROUND THE SUN</h6>
          <button
            type="button"
            className="inline-flex mx-auto items-center rounded-md border border-transparent bg-black px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <PlayIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            Listen
          </button>
        </div>
      </div>
    </>
  )
}

export default MusicHero