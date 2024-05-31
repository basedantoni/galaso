import Link from "next/link"
import { useEffect } from 'react';

export default function HomeLayout({ children }) {
  function onDocumentMouseDown() {
    // Add redirect to shopify store
    const canvasDomElement = document.getElementById('myThreeJsCanvas');

    if (canvasDomElement) {
      document.body.removeChild(canvasDomElement);
    }
  }

  useEffect(() => {
    onDocumentMouseDown();
  }, [])

  return (
    <>
      <main className='h-screen w-full bg-cover bg-[top_0%_left_52%] sm:bg-center bg-landing-background-out'>
        <div className="relative flex justify-center sm:justify-start gap-4 sm:gap-8 py-5 px-6 sm:px-12 text-xl font-semibold font-allrounder text-white">
          <Link className="z-10 top-2 left-1 p-4 sm:top-5 sm:left-4 sm:p-7 fixed font-semibold font-allrounder" href="/tour">
            TOUR
          </Link>
          <Link className="z-10 top-2 right-1 p-4 sm:top-5 sm:right-4 sm:p-7 fixed font-semibold font-allrounder" href="/music">
            MUSIC
          </Link>
          <a className="z-10 bottom-2 left-1 sm:bottom-5 sm:left-4 p-4 sm:p-7 fixed font-semibold font-allrounder" href="https://www.instagram.com/galaso__/" target="_blank" rel="noreferrer">IG</a>
          <Link className="z-10 bottom-2 right-1 sm:bottom-5 sm:right-4 p-4 sm:p-7 fixed font-semibold font-allrounder" href="/merch">
            MERCH
          </Link>
        </div>
        <div className="">
          {children}
        </div>
      </main>
    </>
  )
}