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
      <main className='h-screen w-full bg-cover bg-[right_20%_top_50%] bg-landing-background'>
        <div className="flex justify-center sm:justify-start gap-4 sm:gap-8 py-5 px-6 sm:px-12 text-xl font-semibold font-allrounder">
          <Link href="/tour">
            <a>TOUR</a>
          </Link>
          <Link href="/music">
            <a>MUSIC</a>
          </Link>
          <a href="https://www.instagram.com/galaso__/" target="_blank" rel="noreferrer">IG</a>
          <Link href="/merch">
            <a>MERCH</a>
          </Link>
        </div>
        <div className="">
          {children}
        </div>
      </main>
    </>
  )
}