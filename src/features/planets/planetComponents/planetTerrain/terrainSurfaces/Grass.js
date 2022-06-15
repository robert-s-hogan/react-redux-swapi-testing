import Branch from '../terrainObjects/Branch';
import BushOne from '../terrainObjects/BushOne';
import BushTwo from '../terrainObjects/BushTwo';
import BushThree from '../terrainObjects/BushThree';
import BushFour from '../terrainObjects/BushFour';
import BushFive from '../terrainObjects/BushFive';
import Cityscape from '../terrainObjects/Cityscape';
import Foreground from '../terrainObjects/Foreground';
import Forest from '../terrainObjects/Forest';
import LeavesOne from '../terrainObjects/LeavesOne';
import LeavesTwo from '../terrainObjects/LeavesTwo';
import MountainBottom from '../terrainObjects/MountainBottom';
import MountainMiddle from '../terrainObjects/MountainMiddle';
import MountainTop from '../terrainObjects/MountainTop';
import Mountain from '../terrainObjects/Mountain';
import Mushroom from '../terrainObjects/Mushroom';
import Tree from '../terrainObjects/Tree';

const Grass = ({ surfaceColor, styles }) => {
  if (
    surfaceColor === 'savanna' ||
    surfaceColor === 'savannas' ||
    surfaceColor === 'savannahs'
  ) {
    return (
      <>
        <p className="text-white">
          <span className="bg-black">Grass > {surfaceColor}</span>
        </p>
        <MountainBottom
          styles={`h-full absolute -bottom-16 -left-2 -z-4`}
          surfaceColor={surfaceColor}
        />
        <Foreground styles={`fill-foreground-grass h-full absolute -bottom-6 -left-2 z-1`} />
      </>
    );
  } else if (surfaceColor === 'swamp' || surfaceColor === 'swamps') {
    return (
      <>
        <p className="text-white">
          <span className="bg-black">Grass > {surfaceColor}</span>
        </p>
        <MountainBottom
          styles={`h-full absolute -bottom-16 -left-2 -z-4`}
          surfaceColor={surfaceColor}
        />
        <MountainMiddle
          styles={`h-full absolute -bottom-16 -left-2 -z-8`}
          surfaceColor={surfaceColor}
        />
        <BushThree surfaceColor={surfaceColor} />
        <BushFour surfaceColor={surfaceColor} />
        <Foreground
          styles={`fill-foreground-${surfaceColor} h-full absolute -bottom-6 -left-2 z-1`}
        />
      </>
    );
  } else if (
    surfaceColor === 'rainforests' ||
    surfaceColor === 'rainforest' ||
    surfaceColor === 'forests' ||
    surfaceColor === 'forest'
  ) {
    return (
      <>
        <p className="text-white">
          <span className="bg-black">Grass > {surfaceColor}</span>
        </p>
        <Mountain surfaceColor={surfaceColor} />
        <Forest
          surfaceColor={surfaceColor}
          styles={`-z-2 fill-${surfaceColor} h-full absolute bottom-10 -right-8`}
        />
        <BushOne surfaceColor={surfaceColor} />
        <BushTwo surfaceColor={surfaceColor} />
        <BushThree surfaceColor={surfaceColor} />
        <BushFour surfaceColor={surfaceColor} />
        <BushFive surfaceColor={surfaceColor} />
        <Foreground
          styles={`fill-foreground-forest h-full absolute z-1 -bottom-8 -left-12 -rotate-12`}
        />
        <Mountain surfaceColor={surfaceColor} />
      </>
    );
  } else if (surfaceColor === 'fungus forests') {
    return (
      <>
        <p className="text-white">
          <span className="bg-black">Grass > {surfaceColor}</span>
        </p>
        <Forest
          surfaceColor={surfaceColor}
          styles={`-z-2 h-full bg-tree absolute bottom-0 -right-8`}
        />
        <MountainMiddle
          surfaceColor={surfaceColor}
          styles={`h-full absolute -bottom-16 -left-2 -z-8`}
        />
        <MountainBottom
          surfaceColor={surfaceColor}
          styles={`h-full absolute -bottom-16 -left-2 -z-4`}
        />
        <Foreground
          styles={`fill-foreground-fungus h-full absolute z-1 -bottom-8 -left-12 -rotate-12`}
        />
        <Mushroom
          surfaceColor={surfaceColor}
          styles={`absolute bottom-0 left-6 h-1/6 fill-mushroom`}
        />
        <Mushroom
          surfaceColor={surfaceColor}
          styles={`absolute bottom-4 left-16 h-1/6 fill-mushroom z-1`}
        />
        <Mushroom
          surfaceColor={surfaceColor}
          styles={`absolute bottom-6 left-24 h-1/6 fill-mushroom z-1`}
        />
        <Mushroom
          surfaceColor={surfaceColor}
          styles={`absolute bottom-3 left-36 h-1/6 fill-mushroom z-1`}
        />
        <Mushroom
          surfaceColor={surfaceColor}
          styles={`absolute bottom-10 left-48 h-1/6 fill-mushroom z-1`}
        />
        <Mushroom
          surfaceColor={surfaceColor}
          styles={`absolute bottom-0 left-64 h-1/6 fill-mushroom z-1`}
        />
        <Mushroom
          surfaceColor={surfaceColor}
          styles={`absolute bottom-10 left-80 h-1/6 fill-mushroom z-1`}
        />
      </>
    );
  } else if (surfaceColor === 'scrublands') {
    return (
      <>
        <p className="text-white">
          <span className="bg-black">Grass > {surfaceColor}</span>
        </p>
        <BushThree surfaceColor={surfaceColor} />
        <BushFour surfaceColor={surfaceColor} />
        <Mountain surfaceColor={surfaceColor} />
      </>
    );
  } else if (surfaceColor === 'jungle' || surfaceColor === 'jungles') {
    return (
      <>
        <p className="text-white">
          <span className="bg-black">Grass > {surfaceColor}</span>
        </p>
        <Tree surfaceColor={surfaceColor} styles={`absolute top-12 -left-12 z-6`} />
        <BushOne surfaceColor={surfaceColor} />
        <BushTwo surfaceColor={surfaceColor} />
        <BushThree surfaceColor={surfaceColor} />
        <BushFour surfaceColor={surfaceColor} />
        <BushFive surfaceColor={surfaceColor} />
        <LeavesOne
          surfaceColor={surfaceColor}
          styles={`z-8 h-full absolute -top-2 -left-48 fill-leaves`}
        />
        <LeavesTwo styles={`z-7 h-full absolute -top-2 -right-2 fill-leaves`} />
        <Branch styles={`z-7 h-full absolute -top-2 -left-2 fill-brown`} />
        <MountainTop surfaceColor={surfaceColor} styles={`h-full absolute -z-10`} />
        <MountainMiddle
          surfaceColor={surfaceColor}
          styles={`h-full absolute -bottom-16 -left-2 -z-8`}
        />
        <Foreground
          styles={`fill-foreground-jungle h-full absolute z-1 -bottom-8 -left-12 -rotate-12`}
        />
      </>
    );
  } else if (
    surfaceColor === 'grasslands' ||
    surfaceColor === 'grassy hills' ||
    surfaceColor === 'grass' ||
    surfaceColor === 'verdant'
  ) {
    return (
      <>
        <p className="text-white">
          <span className="bg-black">Grass > {surfaceColor}</span>
        </p>
        <MountainBottom
          styles={`h-full absolute -bottom-16 -left-2 -z-4`}
          surfaceColor={surfaceColor}
        />
        <MountainMiddle
          styles={`h-full absolute -bottom-16 -left-2 -z-8`}
          surfaceColor={surfaceColor}
        />
        <BushOne surfaceColor={surfaceColor} />

        <BushTwo surfaceColor={surfaceColor} />
        <BushThree surfaceColor={surfaceColor} />
        <BushFour surfaceColor={surfaceColor} />
        <BushFive surfaceColor={surfaceColor} />
        <Foreground
          styles={`fill-foreground-dirt h-full absolute z-1 -bottom-8 -left-12 -rotate-12`}
        />
      </>
    );
  } else if (surfaceColor === 'cityscape' || surfaceColor === 'urban') {
    return (
      <>
        <p className="text-white">
          <span className="bg-black">Grass > {surfaceColor}</span>
        </p>
        <Mountain surfaceColor={surfaceColor} />
        <Cityscape
          surfaceColor={surfaceColor}
          styles={`cityscape -z-1 absolute bottom-2 left-14`}
        />
        {/* <BushOne surfaceColor={surfaceColor} /> */}
        <BushTwo surfaceColor={surfaceColor} />
        {/* <BushThree surfaceColor={surfaceColor} /> */}
        {/* <BushFour surfaceColor={surfaceColor} /> */}
        <BushFive surfaceColor={surfaceColor} />
        <Foreground
          styles={`fill-foreground-${surfaceColor} h-full absolute -bottom-10 -left-8 z-1 -rotate-6`}
        />
      </>
    );
  } else {
    return (
      <>
        <p className="text-white z-10 mt-10">
          <span className="bg-black">Grass</span>
        </p>
        <code className="text-xs">
          <pre>{JSON.stringify(surfaceColor, null, 2)}</pre>
        </code>
      </>
    );
  }
};
export default Grass;
