import CardFace from './peopleComponents/CardFace';

const Character = ({ name, hair_color, eye_color, gender, skin_color, homeworld }) => {
  return (
    <div className={`card rounded-lg relative overflow-hidden h-full`}>
      <p className="text-white font-semibold uppercase text-xl">{name}</p>
      <CardFace
        name={name}
        hairColor={hair_color}
        eyeColor={eye_color}
        gender={gender}
        skinColor={skin_color}
        // homeworld={homeworldName}
        styles="card-face absolute bottom-36 -right-28 mr-1 mb-9 z-10"
      />
    </div>
  );
};

export default Character;
