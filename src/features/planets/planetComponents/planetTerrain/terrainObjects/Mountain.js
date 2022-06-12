import MountainBottom from './MountainBottom';
import MountainMiddle from './MountainMiddle';
import MountainTop from './MountainTop';
import Cityscape from './Cityscape';

const Mountain = ({ surfaceColor, cityscape, styles }) => {
  return (
    <>
      <MountainTop
        styles={`h-full absolute bottom-0 fill-mountain-top-${surfaceColor} -left-2 z-0 ${styles}`}
        surfaceColor={surfaceColor}
      />
      <MountainMiddle
        styles={`h-full absolute -bottom-10 -left-2 z-1  ${styles}`}
        surfaceColor={surfaceColor}
      />
      <MountainBottom
        styles={`h-full absolute -bottom-16 -left-2 z-2 ${styles}`}
        surfaceColor={surfaceColor}
      />
      {cityscape && (
        <Cityscape cityscape={cityscape} surfaceColor={surfaceColor} />
      )}
    </>
  );
};
export default Mountain;
