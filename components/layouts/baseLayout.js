import Link from "next/link"
import { Suspense } from 'react';
import dynamic from "next/dynamic";
import * as animationData from "../../lib/lottie/data.json"
import FerroFallback from "../FerroFallback";

export default function BaseLayout({ children }) {
  const DynamicLottie = dynamic(() => import("lottie-react"), { ssr: false });

  return (
    <>
      <main>
        <Link className='flex w-full justify-center' href="/">
          <Suspense fallback={FerroFallback}>
            <DynamicLottie className="h-64 w-64 -translate-y-12" animationData={animationData} />
          </Suspense>
        </Link>
        <Link className="top-2 left-1 p-4 sm:top-5 sm:left-4 sm:p-7 fixed font-semibold font-allrounder" href="/tour">
          TOUR
        </Link>
        <Link className="top-2 right-1 p-4 sm:top-5 sm:right-4 sm:p-7 fixed font-semibold font-allrounder" href="/music">
          MUSIC
        </Link>
        <a className="bottom-2 left-1 sm:bottom-5 sm:left-4 p-4 sm:p-7 fixed font-semibold font-allrounder" href="https://www.instagram.com/galaso__/" target="_blank" rel="noreferrer">IG</a>
        <a className="z-10 bottom-2 right-1 sm:bottom-5 sm:right-4 p-4 sm:p-7 fixed font-semibold font-allrounder" href="https://galasostore.myshopify.com/" target="_blank" rel="noreferrer">
          MERCH
        </a>
        <div className="px-20 sm:px-32 py-16 sm:py-4 -translate-y-40 sm:-translate-y-24">
          {children}
        </div>
      </main>
    </>
  )
}