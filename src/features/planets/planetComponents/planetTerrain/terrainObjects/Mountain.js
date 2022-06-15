import MountainBottom from './MountainBottom';
import MountainMiddle from './MountainMiddle';
import MountainTop from './MountainTop';

const Mountain = ({ surfaceColor, cityscape, styles }) => {
  return (
    <>
      <MountainTop
        styles={`h-full absolute bottom-0 fill-mountain-top-${surfaceColor} -left-2 -z-10 ${styles}`}
        surfaceColor={surfaceColor}
      />
      <MountainMiddle
        styles={`h-full absolute -bottom-10 -left-2 -z-8  ${styles}`}
        surfaceColor={surfaceColor}
      />
      <MountainBottom
        styles={`h-full absolute -bottom-16 -left-2 -z-4 ${styles}`}
        surfaceColor={surfaceColor}
      />
    </>
  );
};
export default Mountain;
