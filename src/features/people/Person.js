import PersonHomeworld from './PersonHomeworld';
import CardContainer from '../../components/CardContainer';

const Character = ({ name, homeworld }) => {
  return (
    <CardContainer>
      <p className="text-white font-semibold uppercase text-xl">{name}</p>
      <PersonHomeworld homeworld={homeworld} />
    </CardContainer>
  );
};

export default Character;
