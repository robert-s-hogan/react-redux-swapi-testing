import { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSpeciesStatus, fetchSpecies } from './speciesSlice';
import { usePrefetch, useGetSpeciesQuery } from '../../services/apiSpecies';

import { Loading } from '../../components/Loading';
import Specie from './Specie';
import GridContainer from '../../components/GridContainer';
import CardContainer from '../../components/CardContainer';
import Container from '../../components/Container';
import Pagination from '../../components/Pagination';

const Species = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [totalPages] = useState(4);
  const speciesStatus = useSelector(getSpeciesStatus);

  const { data, isLoading, isFetching } = useGetSpeciesQuery(page);
  const prefetchPage = usePrefetch('getSpecies');

  const prefetchNext = useCallback(() => {
    prefetchPage(page + 1);
  }, [prefetchPage, page]);

  const prefetchPrev = useCallback(() => {
    prefetchPage(page - 1);
  }, [prefetchPage, page]);

  useEffect(() => {
    if (data !== null && speciesStatus === 'idle') {
      dispatch(fetchSpecies());
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
    speciesStatus,
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
        <div>
          <Loading />
        </div>
      ) : (
        <GridContainer>
          {data.results.map((specie) => (
            <CardContainer key={specie.name}>
              <Specie
                name={specie.name}
                classification={specie.classification}
              />
            </CardContainer>
          ))}
        </GridContainer>
      )}
      <Pagination>
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
      </Pagination>
    </div>
  );
};

export const SpeciesAPI = ({ data }) => {
  return (
    <Container>
      <Species />
    </Container>
  );
};

export default SpeciesAPI;
