import Link from "next/link"

export default function MerchLayout({ children }) {
  return (
    <>
      <main>
        <Link href="/tour">
          <a className="text-base top-2 left-1 p-4 sm:top-5 sm:left-4 sm:p-7 fixed font-bold text-white">TOUR</a>
        </Link>
        <Link href="/music">
          <a className="text-base top-2 right-1 p-4 sm:top-5 sm:right-4 sm:p-7 fixed font-bold text-white">MUSIC</a>
        </Link>
        <a className="text-base bottom-2 left-1 sm:bottom-5 sm:left-4 p-4 sm:p-7 fixed font-bold text-white" href="https://www.instagram.com/galaso__/" target="_blank" rel="noreferrer">IG</a>
        <Link href="/merch">
          <a className="text-base bottom-2 right-1 sm:bottom-5 sm:right-4 p-4 sm:p-7 fixed font-bold text-white">MERCH</a>
        </Link>
        <div>
          {children}
        </div>
      </main>
    </>
  )
}