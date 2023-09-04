import Head from 'next/head'
import Image from "next/image"
import { motion } from "framer-motion"
import { useMediaQuery } from '../hooks/useMediaQuery'
import HomeLayout from '../components/layouts/homeLayout'
import BlackLayout from '../components/layouts/blackLayout'

export default function Home() {
  const isExtraLarge = useMediaQuery('(min-width: 1440px)');
  const isLarge = useMediaQuery('(min-width: 1024px)');
  const isMedium = useMediaQuery('(min-width: 768px)');
  const isSmall = useMediaQuery('(min-width: 640px)');

  return (
    <BlackLayout>
      <div className='w-full h-full'>
        <Head>
          <title>GALASO</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>   

        <main className='flex text-center justify-center items-center h-full'>
          <div className='w-64 relative'>
            <Image
              src='/eclipse.png'
              alt='eclipse'
              width={320}
              height={540}
              layout="responsive"
              priority
            />
            <div className="absolute w-full left-[3px] top-[44.5%] sm:top-[46%]">
              <h1 className="text-2xl sm:text-3xl tracking-[0.2em] font-waukegan">GALASO</h1>
            </div>
          </div>
        </main>
      </div>
    </BlackLayout>
  )
}

Home.getLayout = function getLayout(page) {
  return <HomeLayout>{ page }</HomeLayout>
}
