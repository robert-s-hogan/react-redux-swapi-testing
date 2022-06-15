import Foreground from '../terrainObjects/Foreground';
import Mountain from '../terrainObjects/Mountain';
import Rock from '../terrainObjects/Rock';
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
          styles={`-z-20 absolute bottom-36 h-1/2 -left-20 fill-${surfaceColor}`}
        />
        <Volcano
          surfaceColor={surfaceColor}
          styles={`-z-20 absolute bottom-44 h-1/2 -right-12 fill-${surfaceColor}`}
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
          styles={`absolute -bottom-2 -left-2 h-full fill-foreground-${surfaceColor}`}
        />
      </>
    );
  } else if (surfaceColor === 'rocky deserts') {
    return (
      <>
        <Rock
          surfaceColor={surfaceColor}
          styles={`absolute -bottom-0 h-1/3 fill-rock-1-${surfaceColor} absolute bottom-0 right-0`}
        />
        <Rock
          surfaceColor={surfaceColor}
          styles={`absolute -bottom-0 h-1/4 fill-rock-2-${surfaceColor}  absolute bottom-0 right-12 rotate-45 2xl:hidden`}
        />
        <Rock
          surfaceColor={surfaceColor}
          styles={`absolute -bottom-0 h-1/6 fill-rock-3-${surfaceColor} absolute bottom-0 right-24 rotate-12`}
        />
        <Rock
          surfaceColor={surfaceColor}
          styles={`absolute -bottom-0 h-1/6 fill-rock-4-${surfaceColor} absolute bottom-0 right-0 rotate-180`}
        />
      </>
    );
  } else {
    return (
      <>
        <p className="text-white">
          <span className="bg-black">Ash > {surfaceColor}</span>
        </p>

        <Mountain surfaceColor={surfaceColor} />
        <Foreground
          surfaceColor={surfaceColor}
          styles={`absolute -bottom-2 -left-2 h-full fill-foreground-${surfaceColor}`}
        />
      </>
    );
  }
};
export default Ash;
