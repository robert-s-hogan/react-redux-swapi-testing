import '../../../style/planetBackground.css';

const PlanetAtmosphere = ({
  primaryClimate,
  secondaryClimate,
  tertiaryClimate,
  name,
  rotation,
  diameter,
  surface_water,
}) => {
  let findPrimaryClimate = (primaryClimate) => {
    try {
      switch (primaryClimate.trim()) {
        case 'airless asteroid':
          return primaryClimate;
        case 'arid':
        case 'hot':
          return primaryClimate;
        case 'arctic':
        case 'artic':
        case 'frozen':
          return primaryClimate;
        case 'artificial temperate':
          return primaryClimate;
        case 'frigid':
          return primaryClimate;
        case 'gas':
          return primaryClimate;
        case 'humid':
        case 'moist':
          return primaryClimate;
        case 'plateaus':
          return primaryClimate;
        case 'polluted':
          return primaryClimate;
        case 'murky':
          return primaryClimate;
        case 'rainforests':
          return primaryClimate;
        case 'rocky':
          return primaryClimate;
        case 'superheated':
          return primaryClimate;
        case 'subartic':
          return primaryClimate;
        case 'toxic cloudsea':
          return primaryClimate;
        case 'tropical':
          return primaryClimate;
        case 'windy':
          return primaryClimate;
        default:
          return primaryClimate;
      }
    } catch (error) {
      console.log(error);
    }
  };
  let findSecondaryClimate = (secondaryClimate) => {
    try {
      switch (secondaryClimate.trim()) {
        case 'airless asteroid':
          return secondaryClimate;
        case 'arid':
          return secondaryClimate;
        case 'arctic':
        case 'artic':
          return secondaryClimate;
        case 'artificial temperate':
          return secondaryClimate;
        case 'frigid':
          return secondaryClimate;
        case 'frozen':
          return secondaryClimate;
        case 'gas':
          return secondaryClimate;
        case 'hot':
          return secondaryClimate;
        case 'humid':
        case 'moist':
          return secondaryClimate;
        case 'plateaus':
          return secondaryClimate;
        case 'polluted':
          return secondaryClimate;
        case 'murky':
          return secondaryClimate;
        case 'rainforests':
          return secondaryClimate;
        case 'rocky':
          return secondaryClimate;
        case 'superheated':
          return secondaryClimate;
        case 'subartic':
          return secondaryClimate;
        case 'toxic cloudsea':
          return secondaryClimate;
        case 'tropical':
          return secondaryClimate;
        case 'windy':
          return secondaryClimate;
        default:
          return secondaryClimate;
      }
    } catch (error) {
      console.log(error);
    }
  };
  let findTertiaryClimate = (tertiaryClimate) => {
    try {
      switch (tertiaryClimate.trim()) {
        case 'airless asteroid':
          return tertiaryClimate;
        case 'arid':
          return tertiaryClimate;
        case 'arctic':
        case 'artic':
          return tertiaryClimate;
        case 'artificial temperate':
          return tertiaryClimate;
        case 'frigid':
          return tertiaryClimate;
        case 'frozen':
          return tertiaryClimate;
        case 'gas':
          return tertiaryClimate;
        case 'hot':
          return tertiaryClimate;
        case 'humid':
        case 'moist':
          return tertiaryClimate;
        case 'plateaus':
          return tertiaryClimate;
        case 'polluted':
          return tertiaryClimate;
        case 'murky':
          return tertiaryClimate;
        case 'rainforests':
          return tertiaryClimate;
        case 'rocky':
          return tertiaryClimate;
        case 'superheated':
          return tertiaryClimate;
        case 'subartic':
          return tertiaryClimate;
        case 'toxic cloudsea':
          return tertiaryClimate;
        case 'tropical':
          return tertiaryClimate;
        case 'windy':
          return tertiaryClimate;
        default:
          return tertiaryClimate;
      }
    } catch (error) {
      console.log(error);
    }
  };
  let sunSize = (diameter) => {
    if (diameter > 20000) {
      return 'h-24 w-24';
    } else if (diameter > 17500) {
      return 'h-20 w-20';
    } else if (diameter > 15000) {
      return 'h-16 w-16';
    } else if (diameter > 12500) {
      return 'h-14 w-14';
    } else if (diameter > 10000) {
      return 'h-12 w-12';
    } else if (diameter > 7500) {
      return 'h-10 w-10';
    } else if (diameter > 5000) {
      return 'h-8 w-8';
    }
  };

  let sunPosition = (surface_water) => {
    console.log(surface_water);
    if (surface_water > 100) {
      return 'top-4 left-12';
    } else if (surface_water > 80) {
      return '-top-4 left-24';
    } else if (surface_water > 60) {
      return 'top-12 left-36';
    } else if (surface_water > 40) {
      return 'top-8 left-48';
    } else if (surface_water > 20) {
      return 'top-20 right-36';
    } else if (surface_water > 15) {
      return '-top-2 right-24';
    } else if (surface_water > 10) {
      return 'top-24 right-36';
    } else if (surface_water > 5) {
      return 'top-16 right-48';
    } else if (surface_water >= 1) {
      return 'top-8 right-24';
    } else {
      return 'top-0 right-0';
    }
  };

  let sunBrightness = (primaryClimate) => {
    try {
      switch (primaryClimate.trim()) {
        case 'arid':
        case 'plateaus':
        case 'rocky':
        case 'windy':
          return 'brightness-200 opacity-90';
        case 'arctic':
        case 'artic':
        case 'subartic':
        case 'artificial temperate':
          return 'brightness-150 opacity-100';
        case 'frigid':
        case 'frozen':
          return 'brightness-110 opacity-100';
        case 'gas':
        case 'humid':
        case 'moist':
        case 'tropical':
        case 'rainforests':
          return 'brightness-75 opacity-100';
        case 'hot':
          return 'brightness-200 opacity-100';
        case 'polluted':
        case 'murky':
        case 'toxic cloudsea':
          return 'brightness-25 opacity-80';
        case 'superheated':
          return 'brightness-200 opacity-70';
        default:
          return 'brightness-100 opacity-100';
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={`planet-background-top-third absolute h-90 w-full bg-skyBlue bg-${findPrimaryClimate(
        primaryClimate,
      )} text-black z-1 overflow-hidden`}
    >
      {/* <code className="text-xs absolute text-white top-5 z-5">
        {JSON.stringify(
          { primaryClimate, secondaryClimate, tertiaryClimate },
          null,
          2,
        )}
      </code> */}
      {primaryClimate && (
        <div
          className={`absolute z-3 top-0 h-90 w-full text-white ${findPrimaryClimate(
            primaryClimate,
          )}`}
        >
          {findPrimaryClimate(primaryClimate)}
        </div>
      )}
      <h3 className="right-0 m-0 uppercase text-xl p-2 font-light text-white z-3 absolute">
        {name}
      </h3>
      {diameter && (
        <div
          className={`bg-yellow absolute ${sunBrightness(
            primaryClimate,
          )} ${sunPosition(surface_water)} rounded-full ${sunSize(diameter)}`}
        ></div>
      )}
      {secondaryClimate && (
        <div className="z-4 absolute top-6">
          {findSecondaryClimate(secondaryClimate)}
        </div>
      )}
      {tertiaryClimate && (
        <div className="z-5 absolute top-12">
          {findTertiaryClimate(tertiaryClimate)}
        </div>
      )}
    </div>
  );
};
export default PlanetAtmosphere;
