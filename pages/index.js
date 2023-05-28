import Head from 'next/head'
import Image from "next/image"
import { motion } from "framer-motion"
import { useMediaQuery } from '../hooks/useMediaQuery'
import HomeLayout from '../components/layouts/homeLayout'

export default function Home() {
  const isExtraLarge = useMediaQuery('(min-width: 1440px)');
  const isLarge = useMediaQuery('(min-width: 1024px)');
  const isMedium = useMediaQuery('(min-width: 768px)');
  const isSmall = useMediaQuery('(min-width: 640px)');

  return (
    <HomeLayout>
      <div>
        <Head>
          <title>GALASO</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>   

        <main>
          <div className='xl:h-96 xl:w-96 lg:h-80 lg:w-80 md:h-64 md:w-64 h-40 w-40 mx-auto my-auto'>
            <motion.div
              initial={{ y: 500, opacity: 0 }}
              animate={
                isExtraLarge ? { y: 200, opacity: 1 } : 
                isLarge ? { y: 110, opacity: 1 } : 
                isMedium ? { y: 300, opacity: 1 } : 
                isSmall ? { y: 200, opacity: 1 } : { y: 150, opacity: 1 }
              }
              transition={{
                delay: 1,
                y: { duration: 1.7 },
                opacity: { duration: 3 },
                ease: "easeIn" 
              }}
            >
              <Image
                src="/sun.webp"
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
