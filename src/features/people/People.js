import { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectAllPeople,
  getPeopleStatus,
  getPeopleError,
  fetchPeople,
} from './peopleSlice';
import { usePrefetch, useGetPeopleQuery } from '../../services/apiPeople';

import { Loading } from '../../components/Loading';
import Person from './Person';

const People = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(9);

  const people = useSelector(selectAllPeople);
  const peopleStatus = useSelector(getPeopleStatus);
  const error = useSelector(getPeopleError);

  const { data, isLoading, isFetching } = useGetPeopleQuery(page);

  const prefetchPage = usePrefetch('getPeople');

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
    if (peopleStatus === 'idle') {
      dispatch(fetchPeople());
    }
  }, [page, totalPages, prefetchNext, prefetchPrev, peopleStatus, dispatch]);

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
          {data.results.map((person) => (
            <Person
              key={person.name}
              homeworld={person.homeworld}
              name={person.name}
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

export const PeopleAPI = ({ data }) => {
  return (
    <section className="container max-w-4xl px-4 md:mx-auto my-4">
      <People />
    </section>
  );
};

export default PeopleAPI;
