const PlanetSurface = ({
  primaryAtmosphere,
  secondaryAtmosphere,
  tertiaryAtmosphere,
  quaternaryAtmosphere,
}) => {
  let findSurface = (terrain) => {
    try {
      switch (terrain) {
        case 'desert':
          return <p>Desert surface</p>;
        default:
          return <p>Not listed surface</p>;
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="planet-background-bottom-third absolute h-32 top-62 w-full text-black z-10">
      <div className="bg-brown h-full rounded-tl-full">
        {/* {findSurface(primaryAtmosphere)}
        {findSurface(secondaryAtmosphere)}
        {findSurface(tertiaryAtmosphere)}
        {findSurface(quaternaryAtmosphere)} */}
      </div>
    </div>
  );
};

export default PlanetSurface;
