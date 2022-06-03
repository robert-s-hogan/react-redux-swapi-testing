import { useSelector } from 'react-redux';
import { selectAllPlanets } from '../planets/planetsSlice';

const PeopleHomeworld = ({ homeworld }) => {
  // const planets = useSelector(selectAllPlanets);

  // const homeworldUrl = planets.results.find((user) => user.id === homeworld);

  return (
    <p>{homeworld}</p>
    // <span>by {homeworldUrl ? homeworldUrl.name : 'Unknown homeworld'}</span>
  );
};
export default PeopleHomeworld;
