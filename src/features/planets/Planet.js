import { useState, useEffect } from 'react';

import PlanetAtmosphere from './planetComponents/planetAtmosphere/PlanetAtmosphere';
import PlanetTerrain from './planetComponents/planetTerrain/PlanetTerrain';

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
  const [primarySurface, setPrimarySurface] = useState('');
  const [secondarySurface, setSecondarySurface] = useState('');

  useEffect(() => {
    const removeTemperateClimate = (item) => {
      setClimateSplit(climate.split(', '));
      setClimateSplit((climateSplit) =>
        climateSplit.filter((climate) => climate !== 'temperate'),
      );
    };
    removeTemperateClimate(terrainSplit);
    setTerrainSplit(terrain.split(', '));
    setPrimarySurface(terrainSplit[0]);
  }, [terrain, climate, setTerrainSplit, primarySurface]);

  return (
    <div className="h-96 mx-auto bg w-full relative">
      <PlanetAtmosphere
        primaryClimate={climateSplit[0]}
        secondaryClimate={climateSplit[1]}
        tertiaryClimate={climateSplit[2]}
        name={name}
      />
      <PlanetTerrain
        primarySurface={terrainSplit[0]}
        secondarySurface={terrainSplit[1]}
        tertiarySurface={terrainSplit[2]}
        quaternarySurface={terrainSplit[3]}
        terrain={terrainSplit}
      />
    </div>
  );
};

export default Planet;
