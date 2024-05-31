import Link from "next/link"

export default function MerchLayout({ children }) {
  return (
    <>
      <main>
        <Link href="/tour" className="text-base top-2 left-1 p-4 sm:top-5 sm:left-4 sm:p-7 fixed font-bold text-white">
          TOUR
        </Link>
        <Link href="/music" className="text-base top-2 right-1 p-4 sm:top-5 sm:right-4 sm:p-7 fixed font-bold text-white">
          MUSIC
        </Link>
        <a className="text-base bottom-2 left-1 sm:bottom-5 sm:left-4 p-4 sm:p-7 fixed font-bold text-white" href="https://www.instagram.com/galaso__/" target="_blank" rel="noreferrer">IG</a>
        <Link href="/merch" className="text-base bottom-2 right-1 sm:bottom-5 sm:right-4 p-4 sm:p-7 fixed font-bold text-white">
          MERCH
        </Link>
        <div>
          {children}
        </div>
      </main>
    </>
  )
}