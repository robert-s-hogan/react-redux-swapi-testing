import Cave from '../terrainObjects/Cave';
import Foreground from '../terrainObjects/Foreground';
import Mountain from '../terrainObjects/Mountain';
const Ice = ({ surfaceColor, cave }) => {
  return (
    <>
      <p>Ice: {surfaceColor}</p>

      <Mountain
        styles={`fill-${surfaceColor} h-full absolute -bottom-6 -left-2 z-3`}
        surfaceColor={surfaceColor}
      />
      <Foreground
        styles={`fill-${surfaceColor} h-full absolute -bottom-6 -left-2 z-3`}
        surfaceColor={surfaceColor}
      />
      <Cave surfaceColor={surfaceColor} styles={`rotate-45`} />
    </>
  );
};
export default Ice;
