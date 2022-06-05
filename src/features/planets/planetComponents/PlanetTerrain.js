const PlanetTerrain = ({
  primaryAtmosphere,
  secondaryAtmosphere,
  tertiaryAtmosphere,
  quaternaryAtmosphere,
}) => {
  let findPrimaryTerrain = (primaryAtmosphere) => {
    try {
      switch (primaryAtmosphere) {
        case 'desert':
          return <p>Desert primaryAtmosphere</p>;
        default:
          return <p>Not listed {primaryAtmosphere}</p>;
      }
    } catch (error) {
      console.log(error);
    }
  };
  let findSecondaryTerrain = (secondaryAtmosphere) => {
    try {
      switch (secondaryAtmosphere) {
        case 'desert':
          return <p>Desert secondaryAtmosphere</p>;
        default:
          return <p>Not listed secondaryAtmosphere</p>;
      }
    } catch (error) {
      console.log(error);
    }
  };
  let findTertiaryTerrain = (tertiaryAtmosphere) => {
    try {
      switch (tertiaryAtmosphere) {
        case 'desert':
          return <p>Desert tertiaryAtmosphere</p>;
        default:
          return <p>Not listed tertiaryAtmosphere</p>;
      }
    } catch (error) {
      console.log(error);
    }
  };
  let findQuarternaryTerrain = (quaternaryAtmosphere) => {
    try {
      switch (quaternaryAtmosphere) {
        case 'desert':
          return <p>Desert quaternaryAtmosphere</p>;
        default:
          return <p>Not listed quaternaryAtmosphere</p>;
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="planet-background-middle-third absolute h-60 w-full top-32  text-black z-5">
      <div className="bg-green h-full rounded-tl-full">
        {primaryAtmosphere && <p>{findPrimaryTerrain(primaryAtmosphere)}</p>}
        {secondaryAtmosphere && (
          <p>{findSecondaryTerrain(secondaryAtmosphere)}</p>
        )}
        {tertiaryAtmosphere && <p>{findTertiaryTerrain(tertiaryAtmosphere)}</p>}
        {quaternaryAtmosphere && (
          <p>{findQuarternaryTerrain(quaternaryAtmosphere)}</p>
        )}
      </div>
    </div>
  );
};
export default PlanetTerrain;
