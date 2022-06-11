import Desert from './terrainSurface/Desert';
import Grass from './terrainSurface/Grass';
import Ice from './terrainSurface/Ice';
import Mountain from './terrainSurface/Mountain';
import Ocean from './terrainSurface/Ocean';
import Plains from './terrainSurface/Plains';
import Swamp from './terrainSurface/Swamp';
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
  const plainSurfaces = terrain.filter((terrainSurface) => {
    const pickedTerrain = terrainSurface.includes('plain');
    return pickedTerrain;
  });
  const rangeSurfaces = terrain.filter((terrainSurface) => {
    const pickedTerrain = terrainSurface.includes('range');
    return pickedTerrain;
  });
  const swampSurfaces = terrain.filter((terrainSurface) => {
    const pickedTerrain = terrainSurface.includes('swamp');
    return pickedTerrain;
  });
  const hillSurfaces = terrain.filter((terrainSurface) => {
    const pickedTerrain = terrainSurface.includes('hill');
    return pickedTerrain;
  });
  const hillsSurfaces = terrain.filter((terrainSurface) => {
    const pickedTerrain = terrainSurface.includes('hills');
    return pickedTerrain;
  });

  return (
    <div
      className={`planet-background-middle-third relative h-93 w-full top-0 text-black z-1 overflow-y-hidden`}
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
      {rangeSurfaces.map((rangeSurface) => {
        return (
          <Mountain
            key={rangeSurface}
            className={`mountain absolute h-full -bottom-4 z-2`}
            surfaceColor={rangeSurface}
            range={true}
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
      {hillSurfaces.map((hillSurface) => {
        return (
          <Grass
            key={hillSurface}
            className={`hill absolute h-full -bottom-4 z-2`}
            surfaceColor={hillSurface}
            hill={true}
          />
        );
      })}
      {hillsSurfaces.map((hillsSurface) => {
        return (
          <Grass
            key={hillsSurface}
            className={`hill absolute h-full -bottom-4 z-2`}
            surfaceColor={hillsSurface}
            hill={true}
          />
        );
      })}
      {swampSurfaces.map((swampSurface) => {
        return (
          <Swamp
            key={swampSurface}
            className={`swamp absolute h-full bottom-0 z-3`}
            surfaceColor={swampSurface}
          />
        );
      })}
      {plainSurfaces.map((plainSurface) => {
        return (
          <Plains
            key={plainSurface}
            className={`plains absolute h-full bottom-0 z-3`}
            surfaceColor={plainSurface}
          />
        );
      })}
      {jungleSurfaces.map((jungleSurface) => {
        return (
          <Grass
            key={jungleSurface}
            className={`jungle absolute h-full bottom-0 z-3`}
            surfaceColor={jungleSurface}
            jungle={true}
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
