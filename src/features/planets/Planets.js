import { useSelector, useDispatch } from 'react-redux';
import {
  selectPlanetDataObject,
  getPlanetsStatus,
  getPlanetsError,
  selectAllPlanetResults,
  fetchPlanets,
} from './planetsSlice';
import { useEffect } from 'react';

import { Loading } from '../../components/Loading';
import Planet from './Planet';

export const Planets = () => {
  const dispatch = useDispatch();

  // const planets = useSelector(selectPlanetDataObject);
  const planets = useSelector(selectAllPlanetResults);
  const planetsStatus = useSelector(getPlanetsStatus);
  const error = useSelector(getPlanetsError);

  useEffect(() => {
    if (planetsStatus === 'idle') {
      dispatch(fetchPlanets());
    }
  }, [planetsStatus, dispatch]);

  let content;
  if (planetsStatus === 'loading') {
    content = <Loading />;
  } else if (planetsStatus === 'succeeded') {
    const orderedPlanets = planets;
    content = orderedPlanets.map((planet) => (
      <Planet key={planet.name} name={planet.name} />
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

export default Planets;
