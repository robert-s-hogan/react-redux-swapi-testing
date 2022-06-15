import Ash from './terrainSurfaces/Ash';
import Dry from './terrainSurfaces/Dry';
import Grass from './terrainSurfaces/Grass';
import Ice from './terrainSurfaces/Ice';
import Space from './terrainSurfaces/Space';
import Water from './terrainSurfaces/Water';
import './PlanetTerrain.css';

const PlanetTerrain = ({ terrain, name }) => {
  const ashSurfaces = terrain.filter((terrainSurface) => {
    const pickedTerrain =
      terrainSurface.includes('ash') ||
      terrainSurface.includes('volcanoes') ||
      terrainSurface.includes('volcano') ||
      terrainSurface.includes('airless asteroid') ||
      terrainSurface.includes('rocky deserts');
    return pickedTerrain;
  });
  const drySurfaces = terrain.filter((terrainSurface) => {
    const pickedTerrain =
      terrainSurface.includes('desert') ||
      terrainSurface.includes('deserts') ||
      terrainSurface.includes('barren') ||
      terrainSurface.includes('rocky') ||
      terrainSurface.includes('rocky canyons');
    return pickedTerrain;
  });
  const grassSurfaces = terrain.filter((terrainSurface) => {
    const pickedTerrain =
      terrainSurface.includes('grass') ||
      terrainSurface.includes('grasslands') ||
      terrainSurface.includes('grassy hills') ||
      terrainSurface.includes('verdant') ||
      terrainSurface.includes('savanna') ||
      terrainSurface.includes('scrublands') ||
      terrainSurface.includes('jungle') ||
      terrainSurface.includes('jungles') ||
      terrainSurface.includes('forest') ||
      terrainSurface.includes('forests') ||
      terrainSurface.includes('cityscape') ||
      terrainSurface.includes('urban');
    return pickedTerrain;
  });
  const iceSurfaces = terrain.filter((terrainSurface) => {
    const pickedTerrain =
      terrainSurface.includes('ice') ||
      terrainSurface.includes('tundra') ||
      terrainSurface.includes('tundras');
    return pickedTerrain;
  });
  const spaceSurfaces = terrain.filter((terrainSurface) => {
    const pickedTerrain =
      terrainSurface.includes('space') ||
      terrainSurface.includes('asteroid') ||
      terrainSurface.includes('asteroids') ||
      terrainSurface.includes('gas giant') ||
      terrainSurface.includes('unknown');
    return pickedTerrain;
  });
  const waterSurfaces = terrain.filter((terrainSurface) => {
    const pickedTerrain =
      terrainSurface.includes('glaciers') ||
      terrainSurface.includes('water') ||
      terrainSurface.includes('ocean') ||
      terrainSurface.includes('sea') ||
      terrainSurface.includes('seas') ||
      terrainSurface.includes('oceans') ||
      terrainSurface.includes('ice canyons') ||
      terrainSurface.includes('rocky islands') ||
      terrainSurface.includes('swamp') ||
      terrainSurface.includes('swamps') ||
      terrainSurface.includes('toxic seacloud');
    return pickedTerrain;
  });

  return (
    <div
      className={`planet-terrain relative h-93 w-full top-0 text-black -z-40 overflow-y-hidden`}
    >
      {drySurfaces.map((drySurface) => {
        return (
          <Dry
            key={drySurface}
            className={`dry absolute h-full top-0`}
            surfaceColor={drySurface}
          />
        );
      })}
      {ashSurfaces.map((ashSurface) => {
        return (
          <Ash
            key={ashSurface}
            className={`ash absolute h-full top-0`}
            surfaceColor={ashSurface}
          />
        );
      })}
      {grassSurfaces.map((grassSurface) => {
        return (
          <Grass
            key={grassSurface}
            className={`grass absolute h-full bottom-0`}
            surfaceColor={grassSurface}
          />
        );
      })}
      {waterSurfaces.map((waterSurface) => {
        return (
          <Water
            key={waterSurface}
            className={`water absolute h-full bottom-0`}
            surfaceColor={waterSurface}
          />
        );
      })}
      {iceSurfaces.map((iceSurface) => {
        return (
          <Ice
            key={iceSurface}
            className={`ice absolute h-full bottom-0`}
            surfaceColor={iceSurface}
          />
        );
      })}
      {spaceSurfaces.map((spaceSurfaces) => {
        return (
          <Space
            key={spaceSurfaces}
            className={`space absolute h-full bottom-0`}
            surfaceColor={spaceSurfaces}
            name={name}
          />
        );
      })}
    </div>
  );
};
export default PlanetTerrain;
