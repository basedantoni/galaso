import Image from "next/image"
import { PlayIcon } from "@heroicons/react/20/solid"
import { motion } from "framer-motion"

const MusicHero = () => {
  return (
    <>
      <div className="w-full my-4">
        <motion.div
          className="max-w-md mx-auto"
          whileHover={{ scale: 1.03, duration: 1 }}
        >
          <Image
            src="/around-the-sun-greeneyes.webp"
            alt="cover"
            width={415}
            height={415}
            layout="responsive"
            className="rounded-md"
            priority
          />
        </motion.div>
        <div className="flex flex-col items-center">
          <p className="text-gray-400 mt-2">ALBUM</p>
          <h6 className="mb-2">AROUND THE SUN</h6>
          <a
            type="button"
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
    </>
  )
}

export default MusicHero