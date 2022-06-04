import { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getStarshipsStatus, fetchStarships } from './starshipsSlice';
import { usePrefetch, useGetStarshipsQuery } from '../../services/apiStarships';

import { Loading } from '../../components/Loading';
import Starship from './Starship';
import GridContainer from '../../components/GridContainer';

const Starships = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [totalPages] = useState(4);
  const starshipsStatus = useSelector(getStarshipsStatus);

  const { data, isLoading, isFetching } = useGetStarshipsQuery(page);
  const prefetchPage = usePrefetch('getStarships');

  const prefetchNext = useCallback(() => {
    prefetchPage(page + 1);
  }, [prefetchPage, page]);

  const prefetchPrev = useCallback(() => {
    prefetchPage(page - 1);
  }, [prefetchPage, page]);

  useEffect(() => {
    if (data !== null && starshipsStatus === 'idle') {
      dispatch(fetchStarships());
    }
    if (page !== 1) {
      prefetchPrev();
    }
    if (page !== totalPages) {
      prefetchNext();
    }
  }, [
    page,
    totalPages,
    prefetchNext,
    starshipsStatus,
    prefetchPrev,
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
          {data.results.map((starship) => (
            <Starship key={starship.name} name={starship.name} />
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

export const StarshipsAPI = ({ data }) => {
  return (
    <section className="container max-w-4xl md:mx-auto my-4">
      <Starships />
    </section>
  );
};

export default StarshipsAPI;
