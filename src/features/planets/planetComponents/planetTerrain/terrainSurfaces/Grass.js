import BushOne from '../terrainObjects/BushOne';
import BushTwo from '../terrainObjects/BushTwo';
import BushThree from '../terrainObjects/BushThree';
import BushFour from '../terrainObjects/BushFour';
import BushFive from '../terrainObjects/BushFive';
import Foreground from '../terrainObjects/Foreground';
import Mountain from '../terrainObjects/Mountain';
const Grass = ({ surfaceColor, styles, jungle }) => {
  console.log(jungle);
  return (
    <>
      <p className="text-white z-10">Grass: {surfaceColor}</p>
      <p className="text-xs">Jungle: {jungle}</p>
      <Mountain surfaceColor={surfaceColor} />
      <Foreground
        styles={`fill-${surfaceColor} h-full absolute -bottom-6 -left-2 z-3`}
        surfaceColor={surfaceColor}
      />
      <BushOne surfaceColor={surfaceColor} />
      <BushTwo surfaceColor={surfaceColor} />
      <BushThree surfaceColor={surfaceColor} />
      <BushFour surfaceColor={surfaceColor} />
      <BushFive surfaceColor={surfaceColor} />
    </>
  );
};
export default Grass;
