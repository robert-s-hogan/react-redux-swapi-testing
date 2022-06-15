import Cave from '../terrainObjects/Cave';
import Foreground from '../terrainObjects/Foreground';
import MountainTop from '../terrainObjects/Mountain';
const Ice = ({ surfaceColor, cave }) => {
  if (surfaceColor === 'ice' || surfaceColor === 'tundra') {
    return (
      <>
        {/* <p className="text-white">
          <span className="bg-black">Ice > {surfaceColor}</span>
        </p> */}
        <MountainTop
          styles={`fill-mountain-top-${surfaceColor} h-full absolute -bottom-6 -left-2 -z-10`}
          surfaceColor={surfaceColor}
        />
        <Foreground
          styles={`fill-foreground-${surfaceColor} h-full absolute -bottom-6 -left-2 z-1`}
        />
        {/* <Cave surfaceColor={surfaceColor} styles={`rotate-45`} /> */}
      </>
    );
  } else if (surfaceColor === 'ice caves') {
    return (
      <>
        {/* <p className="text-white">
          <span className="bg-black">Ice Caves > {surfaceColor}</span>
        </p> */}
        <Cave
          styles={`fill-cave-${surfaceColor} h-1/4 bg-cave absolute -z-3 bottom-10 right-32 rotate-45`}
          surfaceColor={surfaceColor}
        />
        <Cave
          styles={`fill-cave-${surfaceColor} h-1/3 bg-cave absolute -z-7 bottom-16 right-48 -rotate-200`}
          surfaceColor={surfaceColor}
        />
      </>
    );
  } else {
    return (
      <>
        {/* <code className="text-xs">
          <pre>{JSON.stringify(surfaceColor, null, 2)}</pre>
        </code> */}
      </>
    );
  }
};
export default Ice;
