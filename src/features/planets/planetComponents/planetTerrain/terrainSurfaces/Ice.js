// import Cave from '../terrainObjects/Cave';
import Foreground from '../terrainObjects/Foreground';
import MountainTop from '../terrainObjects/Mountain';
const Ice = ({ surfaceColor, cave }) => {
  if (surfaceColor === 'ice' || surfaceColor === 'tundra') {
    return (
      <>
        <p className="text-white">
          <span className="bg-black">Ice > {surfaceColor}</span>
        </p>
        <MountainTop
          styles={`fill-${surfaceColor} h-full absolute -bottom-6 -left-2 z-3`}
          surfaceColor={surfaceColor}
        />
        <Foreground
          styles={`fill-${surfaceColor} h-full absolute -bottom-6 -left-2 z-3`}
          surfaceColor={surfaceColor}
        />
        {/* <Cave surfaceColor={surfaceColor} styles={`rotate-45`} /> */}
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
export default Ice;
