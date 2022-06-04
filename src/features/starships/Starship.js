import CardContainer from '../../components/CardContainer';

const Film = ({ name }) => {
  return (
    <CardContainer>
      <p className="text-white font-semibold uppercase text-xl">{name}</p>
    </CardContainer>
  );
};

export default Film;
