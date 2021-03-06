import StarOne from '../terrainObjects/StarOne';
import StarTwo from '../terrainObjects/StarTwo';
import StarThree from '../terrainObjects/StarThree';

const Space = ({ surfaceColor, gas, name }) => {
  if (
    surfaceColor === 'unknown' ||
    surfaceColor === 'space' ||
    surfaceColor === 'asteroid' ||
    surfaceColor === 'asteroids'
  ) {
    return (
      <div className="bg-unknown absolute h-full w-full -z-50">
        {/* <p className="text-white">
          <span className="bg-black">Space > {surfaceColor}</span>
        </p> */}
        <h3 className="right-0 m-0 uppercase text-xl p-2 font-light text-white absolute">
          {name}
        </h3>
        <StarOne surfaceColor={surfaceColor} />
        <StarTwo surfaceColor={surfaceColor} />
        <StarThree surfaceColor={surfaceColor} />
      </div>
    );
  } else if (surfaceColor === 'gas giant') {
    return (
      <div className="bg-unknown absolute h-full w-full -z-50">
        {/* <p className="text-white">
          <span className="bg-black">Space > {surfaceColor}</span>
        </p> */}
        <h3 className="right-0 m-0 uppercase text-xl p-2 font-light text-white absolute">
          {name}
        </h3>
        <div className="planet absolute -top-2 -left-4 w-96 h-96 z-0 shadow-inner rounded-full"></div>
        <StarOne surfaceColor={surfaceColor} />
        <StarTwo surfaceColor={surfaceColor} />
        <StarThree surfaceColor={surfaceColor} />
      </div>
    );
  } else if (surfaceColor === 'airless asteroid') {
    return (
      <div className="bg-unknown absolute h-full w-full -z-50">
        {/* <p className="text-white">
          <span className="bg-black">Space > {surfaceColor}</span>
        </p> */}
        <h3 className="right-0 m-0 uppercase text-xl p-2 font-light text-white absolute">
          {name}
        </h3>
        <StarOne surfaceColor={surfaceColor} />
        <StarTwo surfaceColor={surfaceColor} />
        <StarThree surfaceColor={surfaceColor} />
      </div>
    );
  } else {
    return (
      <div className="bg-unknown absolute h-full w-full -z-50">
        {/* <code className="text-xs">
          <pre>{JSON.stringify(surfaceColor, null, 2)}</pre>
        </code> */}
      </div>
    );
  }
};

export default Space;
