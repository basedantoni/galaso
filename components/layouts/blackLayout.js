import Link from "next/link"

export default function BlackLayout({ children }) {
  return (
    <>
      <main className={`h-screen w-full`}>
        <Link href="/tour" className="top-2 left-1 p-4 sm:top-5 sm:left-4 sm:p-7 fixed font-bold">
          TOUR
        </Link>
        <Link href="/music" className="top-2 right-1 p-4 sm:top-5 sm:right-4 sm:p-7 fixed font-bold">
          MUSIC
        </Link>
        <a className="bottom-2 left-1 sm:bottom-5 sm:left-4 p-4 sm:p-7 fixed font-bold" href="https://www.instagram.com/galaso__/" target="_blank" rel="noreferrer">IG</a>
        <a className="z-10 bottom-2 right-1 sm:bottom-5 sm:right-4 p-4 sm:p-7 fixed font-semibold font-allrounder" href="https://galasostore.myshopify.com/" target="_blank" rel="noreferrer">
          MERCH
        </a>
        <div className="px-24 sm:px-32 py-16 sm:py-24 w-full h-full flex justify-center items-center">
          {children}
        </div>
      </main>
    </>
  )
}