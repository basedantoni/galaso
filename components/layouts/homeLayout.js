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
      <main className='h-screen w-full bg-cover sm:bg-contain bg-galaso-background'>
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