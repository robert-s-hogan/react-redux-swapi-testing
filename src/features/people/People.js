import { useSelector, useDispatch } from 'react-redux';
import {
  selectAllPeople,
  getPeopleStatus,
  getPeopleError,
  fetchPeople,
} from './peopleSlice';
import { useEffect } from 'react';

import { Loading } from '../../components/Loading';
import Person from './Person';

export const People = () => {
  const dispatch = useDispatch();

  const people = useSelector(selectAllPeople);
  const peopleStatus = useSelector(getPeopleStatus);
  const error = useSelector(getPeopleError);

  useEffect(() => {
    if (peopleStatus === 'idle') {
      dispatch(fetchPeople());
    }
  }, [peopleStatus, dispatch]);

  let content;
  if (peopleStatus === 'loading') {
    content = <Loading />;
  } else if (peopleStatus === 'succeeded') {
    const orderedPeople = people;
    content = orderedPeople.results.map((character) => (
      <Person
        key={character.name}
        homeworld={character.homeworld}
        name={character.name}
      />
    ));
  } else if (peopleStatus === 'failed') {
    content = <p>{error}</p>;
  }

  return (
    <section className="container max-w-4xl px-4 md:mx-auto my-4">
      {content}
    </section>
  );
};

export default People;
