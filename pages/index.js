import Head from 'next/head'
import HomeLayout from '../components/layouts/homeLayout'

export default function Home() {
  return (
    <HomeLayout>
      <div className='w-full h-full'>
        <Head>
          <title>GALASO</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>   

        <main className='relative flex justify-center items-center h-screen'>
          <a href="https://too.fm/n2n8ne2" target="_blank" rel="noreferrer">
            <p className='[text-shadow:_0_-4px_16px_rgb(100_100_100_/_100%)] cursor-pointer absolute tracking-tighter text-white top-1/3 right-16 sm:left-[15%] flex flex-col items-end sm:items-start font-allrounder font-bold text-2xl sm:text-2xl'>
              <span className='sm:mr-24 sm:leading-[90%]'>click to</span>
              <span className='sm:text-5xl sm:leading-[90%]'>listen to</span>
              <span className='text-4xl sm:text-7xl sm:leading-[90%]'>Talk</span>
              <span className='text-4xl sm:text-7xl sm:leading-[90%]'>Too Much</span>
            </p>
          </a>
        </main>
      </div>
    </HomeLayout>
  )
}

Home.getLayout = function getLayout(page) {
  return <HomeLayout>{ page }</HomeLayout>
}
