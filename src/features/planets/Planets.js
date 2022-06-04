import { useCallback, useState, useEffect } from 'react';

import { usePrefetch, useGetPlanetsQuery } from '../../services/apiPlanets';
import { Loading } from '../../components/Loading';
import Planet from '../../features/planets/Planet';

const PlanetsList = () => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(6);
  const { data, isLoading, isFetching } = useGetPlanetsQuery(page);
  const prefetchPage = usePrefetch('getPlanets');

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
    if (page !== totalPages) {
      prefetchNext();
    }
  }, [page, totalPages, prefetchNext, prefetchPrev]);

  if (isLoading) {
    return <Loading />;
  }

  if (!data) {
    return <div>No posts</div>;
  }

  return (
    <div>
      {isFetching ? (
        <div className="h-96">
          <Loading />
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {data.results.map((planet) => (
            <Planet
              key={planet.name}
              name={planet.name}
              terrain={planet.terrain}
            />
          ))}
        </div>
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
        <button
          onClick={() => setPage((prev) => prev + 1)}
          isLoading={isFetching}
          onMouseEnter={prefetchNext}
          disabled={page === totalPages}
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
