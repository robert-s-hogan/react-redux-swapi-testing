import Desert from './terrainSurface/Desert';
import Grass from './terrainSurface/Grass';
import Ice from './terrainSurface/Ice';
import Mountain from './terrainSurface/Mountain';
import Ocean from './terrainSurface/Ocean';
import Unknown from './terrainSurface/Unknown';
import './PlanetTerrain.css';

const PlanetTerrain = ({ terrain }) => {
  const grassSurfaces = terrain.filter((terrainSurface) => {
    const pickedTerrain = terrainSurface.includes('grass');
    return pickedTerrain;
  });
  const mountainSurfaces = terrain.filter((terrainSurface) => {
    const pickedTerrain = terrainSurface.includes('mountain');
    return pickedTerrain;
  });
  const iceSurfaces = terrain.filter((terrainSurface) => {
    const pickedTerrain = terrainSurface.includes('ice');
    return pickedTerrain;
  });
  const desertSurfaces = terrain.filter((terrainSurface) => {
    const pickedTerrain = terrainSurface.includes('desert');
    return pickedTerrain;
  });
  const oceanSurfaces = terrain.filter((terrainSurface) => {
    const pickedTerrain = terrainSurface.includes('ocean');
    return pickedTerrain;
  });
  const jungleSurfaces = terrain.filter((terrainSurface) => {
    const pickedTerrain = terrainSurface.includes('jungle');
    return pickedTerrain;
  });
  const forestSurfaces = terrain.filter((terrainSurface) => {
    const pickedTerrain = terrainSurface.includes('forest');
    return pickedTerrain;
  });
  const unknownSurfaces = terrain.filter((terrainSurface) => {
    const pickedTerrain = terrainSurface.includes('unknown');
    return pickedTerrain;
  });
  const gasSurfaces = terrain.filter((terrainSurface) => {
    const pickedTerrain = terrainSurface.includes('gas');
    return pickedTerrain;
  });

  return (
    <div
      className={`planet-background-middle-third relative h-66 w-full top-28 text-black z-1 overflow-y-hidden`}
    >
      {mountainSurfaces.map((mountainSurface) => {
        return (
          <Mountain
            key={mountainSurface}
            className={`mountain absolute h-full -bottom-4 z-2`}
            surfaceColor={mountainSurface}
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

      {jungleSurfaces.map((jungleSurface) => {
        return (
          <Grass
            key={jungleSurface}
            className={`jungle absolute h-full bottom-0 z-3`}
            surfaceColor={jungleSurface}
          />
        );
      })}

      {forestSurfaces.map((forestSurface) => {
        return (
          <Grass
            key={forestSurface}
            className={`forest absolute h-full bottom-0 z-3`}
            surfaceColor={forestSurface}
            forest={forestSurface}
          />
        );
      })}

      {oceanSurfaces.map((oceanSurface) => {
        return (
          <Ocean
            key={oceanSurface}
            className={`ocean absolute h-full bottom-0 z-3`}
            surfaceColor={oceanSurface}
          />
        );
      })}

      {iceSurfaces.map((iceSurface) => {
        return (
          <Ice
            key={iceSurface}
            className={`ice absolute h-full bottom-0 z-4`}
            surfaceColor={iceSurface}
            cave={iceSurface}
          />
        );
      })}
      {gasSurfaces.map((gasSurface) => {
        return (
          <Unknown
            key={gasSurface}
            className={`gas absolute h-full bottom-0 z-4`}
            surfaceColor={gasSurface}
            cave={gasSurface}
          />
        );
      })}

      {unknownSurfaces.map((unknownSurfaces) => {
        return (
          <Unknown
            key={unknownSurfaces}
            className={`unknown absolute h-full bottom-0 z-3`}
            surfaceColor={unknownSurfaces}
          />
        );
      })}

      {desertSurfaces.map((desertSurface) => {
        return (
          <Desert
            key={desertSurface}
            className={`bottom-Grass absolute h-full top-0 z-3`}
            surfaceColor={desertSurface}
          />
        );
      })}
    </div>
  );
};
export default PlanetTerrain;
