const query = `
{
  showsCollection {
    items {
      sys {
        id
      }
      venueName
      date
      address
      url
      pastShow
    }
  }
}
`

import BaseLayout from '../../components/layouts/baseLayout';
import { getShows } from '../../lib/api.js';
import { formatDate } from '../../utils/date';

export async function getServerSideProps() {
  const showsCollection = await getShows({ query });
  return { props: { showsCollection } };
}

export default function Tour({ showsCollection: { data: { showsCollection: { items: shows }}}}) {
  return (
    <BaseLayout>
      <div className='flex items-center mb-12 lg:mb-20'>
        <hr className='border-1 w-full border-white mr-6' />
        <p className='lg:text-6xl text-xl text-center font-waukegan tracking-widest'>SHOWS</p>
        <hr className='border-1 w-full border-white ml-6' />
      </div>
      <div className="text-center font-waukegan tracking-widest">
        {shows.map(({ venueName, url, address, pastShow, date, sys: { id }}) => (
          <div className="md:flex justify-between items-center my-4 sm:my-6 lg:px-20" key={id}>
            <p className="my-1 text-2xl font-semibold">{venueName}</p>
            <p className="my-1">{address}</p>
            <p className="my-1">{formatDate(date)}</p>
            <button
              disabled={url === null || pastShow}
              onClick={() => url && window.open(url, "_blank")}
              className="my-1 w-32 justify-center disabled:bg-gray-50 disabled:line-through disabled:text-gray-400 disabled:border-gray-300 inline-flex items-center border-2 border-black px-4 py-2 text-sm font-medium text-black shadow-sm hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Tickets
            </button>
          </div>
        ))}
      </div>
    </BaseLayout>
  );
}