import { useState, useEffect } from 'react';

import PlanetAtmosphere from './planetComponents/planetAtmosphere/PlanetAtmosphere';
import PlanetTerrain from './planetComponents/PlanetTerrain';
import PlanetSurface from './planetComponents/PlanetSurface';

const Planet = ({
  name,
  terrain,
  climate,
  rotation,
  diameter,
  surface_water,
}) => {
  const [terrainSplit, setTerrainSplit] = useState([]);
  const [climateSplit, setClimateSplit] = useState([]);

  useEffect(() => {
    const removeTemperateClimate = (item) => {
      setClimateSplit(climate.split(', '));
      setClimateSplit((climateSplit) =>
        climateSplit.filter((climate) => climate !== 'temperate'),
      );
    };
    removeTemperateClimate(terrainSplit);
    setTerrainSplit(terrain.split(''));
  }, [terrain, climate, setTerrainSplit]);

  return (
    <div className="h-96 mx-auto bg w-full relative">
      <PlanetAtmosphere
        primaryClimate={climateSplit[0]}
        secondaryClimate={climateSplit[1]}
        tertiaryClimate={climateSplit[2]}
        name={name}
        rotation={rotation}
        diameter={diameter}
        surface_water={surface_water}
      />
      <PlanetTerrain
        primarySurface={terrainSplit[0]}
        secondarySurface={terrainSplit[1]}
        tertiarySurface={terrainSplit[2]}
        quaternarySurface={terrainSplit[3]}
      />
      <PlanetSurface
        primarySurface={terrainSplit[0]}
        secondarySurface={terrainSplit[1]}
        tertiarySurface={terrainSplit[2]}
        quaternarySurface={terrainSplit[3]}
      />
    </div>
  );
};

export default Planet;
