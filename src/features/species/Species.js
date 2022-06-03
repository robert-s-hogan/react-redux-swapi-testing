import { useSelector, useDispatch } from 'react-redux';
import {
  selectAllSpeciesResults,
  getSpeciesStatus,
  getSpeciesError,
  fetchSpecies,
} from './speciesSlice';
import { useEffect } from 'react';

import { Loading } from '../../components/Loading';
import Specie from './Specie';

export const Species = () => {
  const dispatch = useDispatch();

  const planets = useSelector(selectAllSpeciesResults);
  const planetsStatus = useSelector(getSpeciesStatus);
  const error = useSelector(getSpeciesError);

  useEffect(() => {
    if (planetsStatus === 'idle') {
      dispatch(fetchSpecies());
    }
  }, [planetsStatus, dispatch]);

  let content;
  if (planetsStatus === 'loading') {
    content = <Loading />;
  } else if (planetsStatus === 'succeeded') {
    const orderedPlanets = planets;
    content = orderedPlanets.map((planet) => (
      <Specie key={planet.name} name={planet.name} />
    ));
  } else if (planetsStatus === 'failed') {
    content = <p>{error}</p>;
  }

  return (
    <section className="container max-w-4xl px-4 md:mx-auto my-4">
      {content}
    </section>
  );
};

export default Species;
