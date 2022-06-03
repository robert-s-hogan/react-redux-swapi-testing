import PersonHomeworld from './PersonHomeworld';

const Character = ({ name, homeworld }) => {
  return (
    <article className="my-2">
      <p className="text-white font-semibold uppercase text-xl">{name}</p>
      <PersonHomeworld homeworld={homeworld} />
    </article>
  );
};

export default Character;
