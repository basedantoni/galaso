import Head from 'next/head'
import Image from "next/image"
import { motion } from "framer-motion"
import HomeLayout from '../components/layouts/homeLayout'

export default function Home() {
  return (
    <HomeLayout>
      <div>
        <Head>
          <title>Galaso</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <div className='sm:h-96 sm:w-96 h-40 w-40 mx-auto'>
            <motion.div
              initial={{ y: 500, opacity: 0 }}
              animate={{ y: 170, opacity: 1 }}
              transition={{
                delay: 1,
                y: { duration: 1.7 },
                opacity: { duration: 3 },
                ease: "easeIn" 
              }}
            >
              <Image
                src="/sun.png"
                alt="sun"
                width={500}
                height={500}
                layout="responsive"
                className="rounded-md"
              />
            </motion.div>
          </div>
        </main>
      </div>
    </HomeLayout>
  )
}

Home.getLayout = function getLayout(page) {
  return <HomeLayout>{ page }</HomeLayout>
}
