import { useCallback, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPlanetsStatus, fetchPlanets } from './planetsSlice';
import { usePrefetch, useGetPlanetsQuery } from '../../services/apiPlanets';

import { Loading } from '../../components/Loading';
import Planet from '../../features/planets/Planet';
import GridContainer from '../../components/GridContainer';

const PlanetsList = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [totalPages] = useState(6);
  const planetsStatus = useSelector(getPlanetsStatus);

  const { data, isLoading, isFetching } = useGetPlanetsQuery(page);
  const prefetchPage = usePrefetch('getPlanets');

  const prefetchNext = useCallback(() => {
    prefetchPage(page + 1);
  }, [prefetchPage, page]);

  const prefetchPrev = useCallback(() => {
    prefetchPage(page - 1);
  }, [prefetchPage, page]);

  useEffect(() => {
    if (data !== null && planetsStatus === 'idle') {
      dispatch(fetchPlanets());
    }
    if (page === 1 && page !== 1) {
      prefetchPrev();
    }
    if (page !== totalPages) {
      prefetchNext();
    }
  }, [
    page,
    totalPages,
    prefetchNext,
    prefetchPrev,
    planetsStatus,
    dispatch,
    data,
  ]);

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
        <GridContainer>
          {data.results.map((planet) => (
            <Planet
              key={planet.name}
              name={planet.name}
              terrain={planet.terrain}
            />
          ))}
        </GridContainer>
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
    <section className="container max-w-4xl md:mx-auto my-4">
      <PlanetsList />
    </section>
  );
};

export default PlanetsAPI;
