import Link from "next/link"

export default function Layout({ children }) {
  return (
    <>
      <main className="h-screen">
        <Link href="/tour">
          <a className="top-5 left-4 p-4 sm:p-7 fixed">TOUR</a>
        </Link>
        <Link href="/music">
          <a className="top-5 right-4 p-4 sm:p-7 fixed">MUSIC</a>
        </Link>
        <Link href="/social">
          <a className="bottom-5 left-4 p-4 sm:p-7 fixed">SOCIAL</a>
        </Link>
        <Link href="/merch">
          <a className="bottom-5 right-4 p-4 sm:p-7 fixed">MERCH</a>
        </Link>
        {children}
      </main>
    </>
  )
}