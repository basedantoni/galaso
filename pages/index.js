import Head from 'next/head'
import HomeLayout from '../components/layouts/homeLayout'
import { useMediaQuery } from '../hooks/useMediaQuery'

export default function Home() {
  const isDesktop = useMediaQuery('(min-width: 640px)');

  return (
    <HomeLayout>
      <div className='w-full h-full'>
        <Head>
          <title>GALASO</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>   

        <main className='relative flex justify-center items-center h-screen'>
          <a href="https://ffm.to/a-brief-inquiry-on-love" target="_blank" rel="noreferrer">
            <span className='[text-shadow:_0_-4px_16px_rgb(0_0_0_/_100%)] cursor-pointer text-white font-allrounder font-bold text-2xl text-center flex flex-col items-center gap-1'>
              <span>A Brief Inquiry On Love.</span>
              <span className='text-xs font-normal'>LISTEN NOW</span>
            </span>
          </a>
        </main>
      </div>
    </HomeLayout>
  )
}

Home.getLayout = function getLayout(page) {
  return <HomeLayout>{ page }</HomeLayout>
}
