import { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPeopleStatus, fetchPeople } from './peopleSlice';
import { usePrefetch, useGetPeopleQuery } from '../../services/apiPeople';

import { Loading } from '../../components/Loading';
import Person from './Person';
import GridContainer from '../../components/GridContainer';
import CardContainer from '../../components/CardContainer';
import Container from '../../components/Container';
import Pagination from '../../components/Pagination';

const People = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [totalPages] = useState(9);
  const peopleStatus = useSelector(getPeopleStatus);

  const { data, isLoading, isFetching } = useGetPeopleQuery(page);
  const prefetchPage = usePrefetch('getPeople');

  const prefetchNext = useCallback(() => {
    prefetchPage(page + 1);
  }, [prefetchPage, page]);

  const prefetchPrev = useCallback(() => {
    prefetchPage(page - 1);
  }, [prefetchPage, page]);

  useEffect(() => {
    if (data !== null && peopleStatus === 'idle') {
      dispatch(fetchPeople());
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
    peopleStatus,
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
          {data.results.map((person) => (
            <CardContainer key={person.name}>
              <Person
                key={person.name}
                homeworld={person.homeworld}
                name={person.name}
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

export const PeopleAPI = ({ data }) => {
  return (
    <Container>
      <People />
    </Container>
  );
};

export default PeopleAPI;
