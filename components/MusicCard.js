import Image from "next/image"
import { PlayIcon } from "@heroicons/react/20/solid"
import { motion } from "framer-motion"
import { useMediaQuery } from '../hooks/useMediaQuery'

const MusicCard = ({ trackType, trackName, listenLink, alternativeText, url }) => {
  return (
    <>
      <motion.div className="mx-1 my-2 w-[415px]">
        <div>
          <Image
            src={url}
            alt={alternativeText}
            width={500}
            height={500}
            layout="responsive"
            className="rounded-md"
          />
        </div>
        <div className="flex flex-col items-center">
          <p className="text-gray-400 mt-2">{trackType}</p>
          <h6 className="mb-2 uppercase">{trackName}</h6>
          <a
            type="button"
            className="inline-flex mx-auto items-center rounded-md border border-transparent bg-black px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            href={listenLink}
            target="_blank"
            rel="noreferrer"
          >
            <PlayIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            Listen
          </a>
        </div>
      </motion.div>
    </>
  )
}

export default MusicCard