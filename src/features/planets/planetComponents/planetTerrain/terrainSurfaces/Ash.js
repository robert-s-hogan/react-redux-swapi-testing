import Foreground from '../terrainObjects/Foreground';
import Mountain from '../terrainObjects/Mountain';
import Volcano from '../terrainObjects/Volcano';

const Ash = ({ surfaceColor }) => {
  if (
    surfaceColor === 'volcano' ||
    surfaceColor === 'volcanoe' ||
    surfaceColor === 'volcanoes'
  ) {
    return (
      <>
        <Volcano
          surfaceColor={surfaceColor}
          styles={`z-0 absolute absolute bottom-24 left-12`}
        />
        <Mountain surfaceColor={surfaceColor} />
      </>
    );
  } else if (surfaceColor === 'mountains') {
    return (
      <>
        <Mountain />
      </>
    );
  } else if (surfaceColor === 'airless asteroid') {
    return (
      <>
        <Foreground
          surfaceColor={surfaceColor}
          styles={`absolute -bottom-2 -left-2 h-full fill-${surfaceColor}`}
        />
      </>
    );
  } else {
    return (
      <>
        <p className="text-white">
          <span className="bg-black">Ash > {surfaceColor}</span>
        </p>

        <Mountain
          styles={`fill-${surfaceColor} h-full absolute -bottom-6 -left-2 z-3`}
          surfaceColor={surfaceColor}
        />
        <Foreground
          styles={`fill-${surfaceColor} h-full absolute -bottom-6 -left-2 z-3`}
          surfaceColor={surfaceColor}
        />
      </>
    );
  }
};
export default Ash;
