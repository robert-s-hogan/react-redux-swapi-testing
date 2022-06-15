import Canyon from '../terrainObjects/Canyon';
import Glacier from '../terrainObjects/Glacier';
import Island from '../terrainObjects/Island';
import Ocean from '../terrainObjects/Ocean';
import Swamp from '../terrainObjects/Swamp';

const Water = ({ surfaceColor }) => {
  if (
    surfaceColor === 'ocean' ||
    surfaceColor === 'oceans' ||
    surfaceColor === 'sea' ||
    surfaceColor === 'seas'
  ) {
    return (
      <>
        {/* <p className="text-white">
          <span className="bg-black">Water > {surfaceColor}</span>
        </p> */}
        <Ocean
          surfaceColor={surfaceColor}
          styles={`h-full absolute bottom-0 -left-12 -z-6 opacity-60`}
        />
      </>
    );
  } else if (surfaceColor === 'rocky islands') {
    return (
      <>
        {/* <p className="text-white">
          <span className="bg-black">Water > {surfaceColor}</span>
        </p> */}
        <Ocean
          surfaceColor={surfaceColor}
          styles={`h-full absolute bottom-0 -left-12 -z-6 opacity-60`}
        />
        <Island
          styles={`h-screen absolute -bottom-48 md:-bottom-64 lg:-bottom-24 xl:-bottom-56 -left-48 lg:-left-32 xl:-left-48 fill-black -z-0 rotate-4`}
        />
      </>
    );
  } else if (surfaceColor === 'glaciers') {
    return (
      <>
        {/* <p className="text-white">
          <span className="bg-black">Water > {surfaceColor}</span>
        </p> */}
        <Ocean
          surfaceColor={surfaceColor}
          styles={`h-full absolute bottom-0 -z-6 opacity-60`}
        />
        <Glacier
          surfaceColor={surfaceColor}
          styles={`h-full absolute -right-12 -bottom-24 -z-8`}
        />
        <Glacier
          surfaceColor={surfaceColor}
          styles={`h-full absolute -bottom-22 -right-48 -z-8`}
        />
      </>
    );
  } else if (surfaceColor === 'ice canyons') {
    return (
      <>
        {/* <p className="text-white">
          <span className="bg-black">Water > {surfaceColor}</span>
        </p> */}
        <Canyon
          surfaceColor={surfaceColor}
          styles={`h-full absolute -bottom-4 -left-12 -z-6`}
        />
        <Ocean
          surfaceColor={surfaceColor}
          styles={`h-full absolute bottom-0 -z-6 opacity-80`}
        />
      </>
    );
  } else if (surfaceColor === 'swamp' || surfaceColor === 'swamps') {
    return (
      <>
        {/* <p className="text-white">
          <span className="bg-black">Water > {surfaceColor}</span>
        </p> */}
        <Ocean surfaceColor={surfaceColor} styles={`h-full absolute bottom-0 z-3 opacity-80`} />
        <Swamp surfaceColor={surfaceColor} styles={`h-full absolute -left-12 z-4`} />
      </>
    );
  } else if (surfaceColor === 'toxic cloudsea') {
    return (
      <>
        {/* <p className="text-white">
          <span className="bg-black">Water > {surfaceColor}</span>
        </p> */}
        <Ocean
          surfaceColor={surfaceColor}
          styles={`h-full absolute bottom-0 -z-2 fill-green opacity-80`}
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
export default Water;
