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

  async function getTerrainSplit() {
    const terrainSplit = terrain.split(', ');
    const surfaceArray = terrainSplit.filter((word, index, arr) => {
      if (word === 'desert' || word === 'barren') {
        console.log(`dry: ${word}`);
        return 'dry';
      } else if (
        word === 'ocean' ||
        word === 'sea' ||
        word === 'seas' ||
        word === 'oceans' ||
        word === 'toxic seacloud'
      ) {
        console.log(`water: ${word}`);
        return 'water';
      } else if (word === 'tundra' || word === 'ice') {
        console.log(`ice: ${word}`);
        return 'ice';
      } else if (
        word === 'grass' ||
        word === 'grasslands' ||
        word === 'grassy hills'
      ) {
        console.log(`grass: ${word}`);
        return 'grass';
      } else if (word === 'ash' || word === 'asteroid') {
        console.log(`ash: ${word}`);
        return 'ash';
      }
    });
    setTerrainSplit(terrainSplit);
  }

  useEffect(() => {
    const removeTemperateClimate = (item) => {
      setClimateSplit(climate.split(', '));
      setClimateSplit((climateSplit) =>
        climateSplit.filter((climate) => climate !== 'temperate'),
      );
    };
    removeTemperateClimate(terrainSplit);
    setPrimarySurface(terrainSplit[0]);
    getTerrainSplit(terrain);
  }, [terrain, climate, setTerrainSplit]);

  return (
    <div className="h-93 mx-auto bg w-full relative">
      <PlanetAtmosphere
        primaryClimate={climateSplit[0]}
        secondaryClimate={climateSplit[1]}
        tertiaryClimate={climateSplit[2]}
        name={name}
      />
      <PlanetTerrain terrain={terrainSplit} />
    </div>
  );
};

export default Planet;
