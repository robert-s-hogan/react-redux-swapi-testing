import StarOne from '../terrainObjects/StarOne';
import StarTwo from '../terrainObjects/StarTwo';
import StarThree from '../terrainObjects/StarThree';

const Space = ({ surfaceColor, gas }) => {
  if (
    surfaceColor === 'unknown' ||
    surfaceColor === 'space' ||
    surfaceColor === 'asteroid' ||
    surfaceColor === 'asteroids'
  ) {
    return (
      <>
        <p className="text-white">
          <span className="bg-black">Space > {surfaceColor}</span>
        </p>
        <StarOne styles={`z-1`} surfaceColor={surfaceColor} />
        <StarTwo styles={`z-1`} surfaceColor={surfaceColor} />
        <StarThree styles={`z-1`} surfaceColor={surfaceColor} />
      </>
    );
  } else if (surfaceColor === 'gas giant') {
    return (
      <>
        <p className="text-white">
          <span className="bg-black">Space > {surfaceColor}</span>
        </p>
        <div className="planet absolute -top-2 -left-4 w-96 h-96 z-5 shadow-inner rounded-full"></div>
        <StarOne styles={`z-1`} surfaceColor={surfaceColor} />
        <StarTwo styles={`z-1`} surfaceColor={surfaceColor} />
        <StarThree styles={`z-1`} surfaceColor={surfaceColor} />
      </>
    );
  } else if (surfaceColor === 'airless asteroid') {
    return (
      <>
        <p className="text-white">
          <span className="bg-black">Space > {surfaceColor}</span>
        </p>
        <StarOne styles={`z-1`} surfaceColor={surfaceColor} />
        <StarTwo styles={`z-1`} surfaceColor={surfaceColor} />
        <StarThree styles={`z-1`} surfaceColor={surfaceColor} />
      </>
    );
  } else {
    return (
      <>
        <code className="text-xs">
          <pre>{JSON.stringify(surfaceColor, null, 2)}</pre>
        </code>
      </>
    );
  }
};

export default Space;
