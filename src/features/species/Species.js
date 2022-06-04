import { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSpeciesStatus, fetchSpecies } from './speciesSlice';
import { usePrefetch, useGetSpeciesQuery } from '../../services/apiSpecies';
import { Loading } from '../../components/Loading';
import Specie from './Specie';

const Species = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(4);
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
  }, [page, totalPages, prefetchNext, prefetchPrev, speciesStatus, dispatch]);

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
        <section className="container max-w-4xl px-4 md:mx-auto my-4">
          {data.results.map((specie) => (
            <Specie
              key={specie.name}
              name={specie.name}
              classification={specie.classification}
            />
          ))}
        </section>
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

export const SpeciesAPI = ({ data }) => {
  return (
    <section className="container max-w-4xl px-4 md:mx-auto my-4">
      <Species />
    </section>
  );
};

export default SpeciesAPI;
