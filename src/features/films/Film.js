import CardContainer from '../../components/CardContainer';

const Film = ({ title }) => {
  return (
    <CardContainer>
      <p className="font-semibold uppercase text-xl">{title}</p>
    </CardContainer>
  );
};

export default Film;
