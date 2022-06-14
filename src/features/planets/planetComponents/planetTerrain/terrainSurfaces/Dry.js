import Foreground from '../terrainObjects/Foreground';
import MountainBottom from '../terrainObjects/MountainBottom';
import Rock from '../terrainObjects/Rock';

const Dry = ({ surfaceColor, rock }) => {
  if (surfaceColor === 'desert') {
    return (
      <>
        <p className="text-white">
          <span className="bg-black">Dry > {surfaceColor}</span>
        </p>
        <MountainBottom
          styles={`h-full absolute -bottom-16 -left-2 z-2 ${surfaceColor}`}
          surfaceColor={surfaceColor}
        />
        <Foreground
          styles={`h-full absolute -bottom-16 -left-2 z-2 ${surfaceColor}`}
          surfaceColor={surfaceColor}
        />
        <Rock
          surfaceColor={surfaceColor}
          styles={`absolute -bottom-0 h-1/3 fill-${surfaceColor}-rock-1 absolute bottom-0`}
        />
        <Rock
          surfaceColor={surfaceColor}
          styles={`absolute -bottom-0 h-1/4 fill-${surfaceColor}-rock-2  absolute bottom-0 right-48 rotate-45 2xl:hidden`}
        />
        <Rock
          surfaceColor={surfaceColor}
          styles={`absolute -bottom-0 h-1/6 fill-${surfaceColor}-rock-3 absolute bottom-0 right-36 rotate-12`}
        />
        <Rock
          surfaceColor={surfaceColor}
          styles={`absolute -bottom-0 h-1/6 fill-${surfaceColor}-rock-4 absolute bottom-0 right-28 rotate-180`}
        />
      </>
    );
  } else {
    return (
      <>
        <code className="text-xs">
          <pre>{JSON.stringify(surfaceColor, null, 2)}</pre>
        </code>
      </>
    );
  }
};
export default Dry;
