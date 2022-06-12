import Ash from './terrainSurfaces/Ash';
import Dry from './terrainSurfaces/Dry';
import Grass from './terrainSurfaces/Grass';
import Ice from './terrainSurfaces/Ice';
import Space from './terrainSurfaces/Space';
import Water from './terrainSurfaces/Water';
import './PlanetTerrain.css';

const PlanetTerrain = ({ terrain }) => {
  const ashSurfaces = terrain.filter((terrainSurface) => {
    const pickedTerrain = terrainSurface.includes('ash');
    return pickedTerrain;
  });
  const drySurfaces = terrain.filter((terrainSurface) => {
    const pickedTerrain =
      terrainSurface.includes('desert') || terrainSurface.includes('barren');
    return pickedTerrain;
  });
  const grassSurfaces = terrain.filter((terrainSurface) => {
    const pickedTerrain =
      terrainSurface.includes('grass') ||
      terrainSurface.includes('jungle') ||
      terrainSurface.includes('forest');
    return pickedTerrain;
  });
  const iceSurfaces = terrain.filter((terrainSurface) => {
    const pickedTerrain = terrainSurface.includes('ice');
    return pickedTerrain;
  });
  const spaceSurfaces = terrain.filter((terrainSurface) => {
    const pickedTerrain = terrainSurface.includes('space');
    return pickedTerrain;
  });
  const waterSurfaces = terrain.filter((terrainSurface) => {
    const pickedTerrain = terrainSurface.includes('water');
    return pickedTerrain;
  });

  return (
    <div
      className={`planet-terrain relative h-93 w-full top-0 text-black z-1 overflow-y-hidden`}
    >
      {ashSurfaces.map((ashSurface) => {
        return (
          <Ash
            key={ashSurface}
            className={`bottom-Grass absolute h-full top-0 z-3`}
            surfaceColor={ashSurface}
          />
        );
      })}

      {drySurfaces.map((drySurface) => {
        return (
          <Dry
            key={drySurface}
            className={`bottom-Grass absolute h-full top-0 z-3`}
            surfaceColor={drySurface}
          />
        );
      })}
      {grassSurfaces.map((grassSurface) => {
        return (
          <Grass
            key={grassSurface}
            className={`grass absolute h-full bottom-0 z-3`}
            surfaceColor={grassSurface}
          />
        );
      })}
      {waterSurfaces.map((waterSurface) => {
        return (
          <Water
            key={waterSurface}
            className={`water absolute h-full bottom-0 z-3`}
            surfaceColor={waterSurface}
          />
        );
      })}
      {iceSurfaces.map((iceSurface) => {
        return (
          <Ice
            key={iceSurface}
            className={`ice absolute h-full bottom-0 z-4`}
            surfaceColor={iceSurface}
          />
        );
      })}
      {spaceSurfaces.map((spaceSurfaces) => {
        return (
          <Space
            key={spaceSurfaces}
            className={`space absolute h-full bottom-0 z-3`}
            surfaceColor={spaceSurfaces}
          />
        );
      })}
    </div>
  );
};
export default PlanetTerrain;
