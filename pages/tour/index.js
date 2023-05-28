import BaseLayout from '../../components/layouts/baseLayout';
import { getShows } from '../../lib/api.js';
import { formatDate } from '../../utils/date';

export async function getServerSideProps() {
  const shows = await getShows();
  return { props: { shows } };
}

export default function Tour({ shows: { data: shows }}) {
  return (
    <BaseLayout>
      <div className="text-center">
        {shows.map(({ attributes: { address, url, venue_name, date }, id }) => (
          <div className="my-4 sm:my-6" key={id}>
            <p className="my-1 text-2xl font-semibold">{venue_name}</p>
            <p className="my-1">{formatDate(date)}</p>
            <p className="my-1">{address}</p>
            <button
              disabled={url === null}
              onClick={() => url && window.open(url, "_blank")}
              className="my-1 disabled:bg-gray-50 disabled:text-gray-400 disabled:border-gray-300 inline-flex mx-auto items-center border-2 border-black px-4 py-2 text-sm font-medium text-black shadow-sm hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Tickets
            </button>
          </div>
        ))}
      </div>
    </BaseLayout>
  );
}