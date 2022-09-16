export default function Tour() {
  return (
    <>
      <div className="text-center">
        <div className="my-4 sm:my-6">
          <p className="my-1">Oct 22, 2022</p>
          <p className="my-1 font-bold">Rustic Tap</p>
          <p className="my-1">Austin, TX</p>
          <button disabled className="my-1 disabled:bg-gray-50 disabled:text-gray-400 disabled:border-gray-300 inline-flex mx-auto items-center border-2 border-black px-4 py-2 text-sm font-medium text-black shadow-sm hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">Tickets</button>
        </div>
      </div>
    </>
  );
}