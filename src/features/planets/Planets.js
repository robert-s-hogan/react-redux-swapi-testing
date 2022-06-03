import { useCallback, useState, useEffect } from 'react';
import { Loading } from '../../components/Loading';

import { usePrefetch, useGetPlanetsQuery } from '../../services/apiPlanets';

const PlanetsList = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isFetching } = useGetPlanetsQuery(page);
  const prefetchPage = usePrefetch('getPlanets');
  const totalPages = 6;

  const prefetchNext = useCallback(() => {
    prefetchPage(page + 1);
  }, [prefetchPage, page]);

  const prefetchPrev = useCallback(() => {
    prefetchPage(page - 1);
  }, [prefetchPage, page]);

  useEffect(() => {
    if (page === 1 && page !== 1) {
      prefetchPrev();
    }
    if (page === totalPages) {
      prefetchNext();
    }
  }, [page, totalPages, prefetchNext, prefetchPrev]);

  if (isLoading) {
    return <Loading />;
  }

  if (!data) {
    return (
      <div>
        No posts :
        <code>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </code>
      </div>
    );
  }

  return (
    <div>
      {isFetching ? (
        <div className="h-96">
          <Loading />
        </div>
      ) : (
        <ul className="text-white text-2xl h-96" spacing={3} mt={6}>
          {data.results.map(({ name, status }) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      )}
      <div className="my-4 flex justify-between items-center text-2xl">
        <button
          className="letter-box bg-green"
          onClick={() => setPage((prev) => prev - 1)}
          isLoading={isFetching}
          onMouseEnter={prefetchPrev}
          disabled={page === 1}
        >
          previous
        </button>
        <div className="space-x-4 text-white text-3xl">
          {`${page} / ${totalPages}`}
          {/* {`${totalPages !== 1 ? `${page} / ${totalPages}` : ''}`} */}
        </div>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          isLoading={isFetching}
          disabled={page === totalPages}
          onMouseEnter={prefetchNext}
          className="letter-box bg-orange"
        >
          next
        </button>
      </div>
    </div>
  );
};

export const PlanetsAPI = ({ data }) => {
  return (
    <section className="container max-w-4xl px-4 md:mx-auto my-4">
      <PlanetsList />
    </section>
  );
};

export default PlanetsAPI;
