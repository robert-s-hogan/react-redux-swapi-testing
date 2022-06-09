import { useState, useEffect } from 'react';
import RandomNumberInRange from '../../../../lib/RandomNumberInRange';

import PlanetAtmosphereSunPosition from './PlanetAtmosphereSunPosition';
import PlanetAtmosphereSun from './PlanetAtmosphereSun';
import '../../../../style/planetBackground.css';

const PlanetAtmosphere = ({
  primaryClimate,
  secondaryClimate,
  tertiaryClimate,
  name,
}) => {
  const [sunSize, setSunSize] = useState(0);
  const [sunPosition, setSunPosition] = useState(0);

  useEffect(() => {
    setSunSize(RandomNumberInRange(8, 24));
    setSunPosition(RandomNumberInRange(0, 24));
  }, []);

  let findPrimaryClimate = (primaryClimate) => {
    try {
      switch (primaryClimate) {
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
      switch (secondaryClimate) {
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
      switch (tertiaryClimate) {
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

  return (
    <div
      className={`planet-background-top-third absolute h-90 w-full bg-skyBlue bg-${findPrimaryClimate(
        primaryClimate,
      )} text-black z-1 overflow-hidden`}
    >
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
      {primaryClimate !== 'unknown' && (
        <PlanetAtmosphereSunPosition
          className={`absolute left-${sunPosition} top-${sunPosition} border-20 border-white overflow-hidden h-${
            sunSize + 20
          } w-${
            sunSize + 20
          } mx-auto rounded-full opacity-90 shadow-sun-container`}
        >
          <PlanetAtmosphereSun height={sunSize} width={sunSize} />
        </PlanetAtmosphereSunPosition>
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
