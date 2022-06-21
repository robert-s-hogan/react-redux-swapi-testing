import { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilmsStatus, fetchFilms } from './filmsSlice';
import { usePrefetch, useGetFilmsQuery } from '../../services/apiFilms';

import { Loading } from '../../components/Loading';
import Film from './Film';
import GridContainer from '../../components/GridContainer';
import CardContainer from '../../components/CardContainer';
import Container from '../../components/Container';
import Pagination from '../../components/Pagination';

export const Films = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [totalPages] = useState(1);
  const filmsStatus = useSelector(getFilmsStatus);

  const { data, isLoading, isFetching } = useGetFilmsQuery(page);
  const prefetchPage = usePrefetch('getFilms');

  const prefetchNext = useCallback(() => {
    prefetchPage(page + 1);
  }, [prefetchPage, page]);

  const prefetchPrev = useCallback(() => {
    prefetchPage(page - 1);
  }, [prefetchPage, page]);

  useEffect(() => {
    if (data !== null && filmsStatus === 'idle') {
      dispatch(fetchFilms());
    }
    if (page !== 1) {
      prefetchPrev();
    }
    if (page !== totalPages) {
      prefetchNext();
    }
  }, [page, totalPages, prefetchNext, filmsStatus, prefetchPrev, dispatch, data]);

  if (isLoading) {
    return <Loading />;
  }

  if (!data) {
    return <div>No posts</div>;
  }

  return (
    <>
      {isFetching ? (
        <>
          <Loading />
        </>
      ) : (
        <GridContainer>
          {data.results.map((film) => (
            <CardContainer key={film.title}>
              <Film title={film.title} />
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
        {/* <span>{`${page}`}</span> */}
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
    </>
  );
};

export const FilmsAPI = ({ data }) => {
  return (
    <Container>
      <Films />
    </Container>
  );
};

export default FilmsAPI;
