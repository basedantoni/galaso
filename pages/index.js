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
          <h1 className='absolute mix-blend-hard-light top-1/4 right-16 sm:left-[20%] flex flex-col items-end sm:items-start font-waukegan font-bold text-2xl sm:text-5xl'>
            <span className='sm:mr-24 sm:leading-[80%]'>click to</span>
            <span className='sm:text-[8rem] sm:leading-[80%]'>listen to</span>
            <span className='text-4xl sm:text-[8.75rem] sm:leading-[80%]'>single</span>
            <span className='text-4xl sm:text-[8.75rem] sm:leading-[80%]'>title</span>
          </h1>
        </main>
      </div>
    </HomeLayout>
  )
}

Home.getLayout = function getLayout(page) {
  return <HomeLayout>{ page }</HomeLayout>
}
