import { useCallback, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPlanetsStatus, fetchPlanets } from './planetsSlice';
import { usePrefetch, useGetPlanetsQuery } from '../../services/apiPlanets';

import { Loading } from '../../components/Loading';
import Planet from '../../features/planets/Planet';
import GridContainer from '../../components/GridContainer';
import CardContainer from '../../components/CardContainer';
import Container from '../../components/Container';
import Pagination from '../../components/Pagination';

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
  }, [page, totalPages, prefetchNext, prefetchPrev, planetsStatus, dispatch, data]);

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
            <CardContainer key={planet.name}>
              <Planet
                key={planet.name}
                name={planet.name}
                terrain={planet.terrain}
                climate={planet.climate}
                rotation={planet.rotation_period}
                diameter={planet.diameter}
                surface_water={planet.surface_water}
              />
            </CardContainer>
          ))}
        </GridContainer>
      )}
      <Pagination>
        <button
          className="letter-box bg-green px-3 py-1"
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
          className="letter-box bg-orange px-3 py-1"
        >
          next
        </button>
      </Pagination>
    </div>
  );
};

export const PlanetsAPI = ({ data }) => {
  return (
    <Container>
      <PlanetsList />
    </Container>
  );
};

export default PlanetsAPI;
