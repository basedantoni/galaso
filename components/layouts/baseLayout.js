import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export default function BaseLayout({ children }) {
  return (
    <>
      <main>
        <div className='sm:h-24 sm:w-24 h-24 w-24 mx-auto'>
          <Link href="/">
            <motion.div
              className="cursor-pointer"
              animate={{ y: [0, 5, 0] }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
              }}
            >
              <Image
                src="/falling.png"
                alt="sun"
                width={500}
                height={500}
                layout="responsive"
                className="rounded-md"
              />
            </motion.div>
          </Link>
        </div>
        <Link href="/tour">
          <a className="top-2 left-1 p-4 sm:top-5 sm:left-4 sm:p-7 fixed font-bold">TOUR</a>
        </Link>
        <Link href="/music">
          <a className="top-2 right-1 p-4 sm:top-5 sm:right-4 sm:p-7 fixed font-bold">MUSIC</a>
        </Link>
        <a className="bottom-2 left-1 sm:bottom-5 sm:left-4 p-4 sm:p-7 fixed font-bold" href="https://www.instagram.com/galaso__/" target="_blank" rel="noreferrer">IG</a>
        <Link href="/merch">
          <a className="bottom-2 right-1 sm:bottom-5 sm:right-4 p-4 sm:p-7 fixed font-bold">MERCH</a>
        </Link>
        <div className="px-24 sm:px-32 py-16 sm:py-24">
          {children}
        </div>
      </main>
    </>
  )
}