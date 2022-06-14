import BushOne from '../terrainObjects/BushOne';
import BushTwo from '../terrainObjects/BushTwo';
import BushThree from '../terrainObjects/BushThree';
import BushFour from '../terrainObjects/BushFour';
import BushFive from '../terrainObjects/BushFive';
import Cityscape from '../terrainObjects/Cityscape';
import Foreground from '../terrainObjects/Foreground';
import Forest from '../terrainObjects/Forest';
import MountainBottom from '../terrainObjects/MountainBottom';
import MountainMiddle from '../terrainObjects/MountainMiddle';
import MountainTop from '../terrainObjects/MountainTop';
import Mountain from '../terrainObjects/Mountain';
const Grass = ({ surfaceColor, styles, jungle }) => {
  if (surfaceColor === 'savanna') {
    return (
      <>
        <p className="text-white">
          <span className="bg-black">Grass > {surfaceColor}</span>
        </p>
        <MountainBottom
          styles={`h-full absolute -bottom-16 -left-2 z-2`}
          surfaceColor={surfaceColor}
        />
      </>
    );
  } else if (surfaceColor === 'swamp' || surfaceColor === 'swamps') {
    return (
      <>
        <p className="text-white">
          <span className="bg-black">Grass > {surfaceColor}</span>
        </p>
        <MountainBottom
          styles={`h-full absolute -bottom-16 -left-2 z-2`}
          surfaceColor={surfaceColor}
        />
        <MountainMiddle
          styles={`h-full absolute -bottom-16 -left-2 z-2`}
          surfaceColor={surfaceColor}
        />
        <BushThree surfaceColor={surfaceColor} styles={styles} />
        <BushFour surfaceColor={surfaceColor} styles={styles} />
        <Foreground
          styles={`fill-${surfaceColor} h-full absolute -bottom-6 -left-2 z-3`}
          surfaceColor={surfaceColor}
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
        <Mountain surfaceColor={surfaceColor} styles={styles} />
        <Forest surfaceColor={surfaceColor} styles={styles} />
        <BushOne surfaceColor={surfaceColor} styles={styles} />
        <BushTwo surfaceColor={surfaceColor} styles={styles} />
        <BushThree surfaceColor={surfaceColor} styles={styles} />
        <BushFour surfaceColor={surfaceColor} styles={styles} />
        <BushFive surfaceColor={surfaceColor} styles={styles} />
        <Foreground surfaceColor={surfaceColor} styles={styles} />
        <Mountain surfaceColor={surfaceColor} styles={styles} />
      </>
    );
  } else if (surfaceColor === 'scrublands') {
    return (
      <>
        <p className="text-white">
          <span className="bg-black">Grass > {surfaceColor}</span>
        </p>
        <BushThree surfaceColor={surfaceColor} styles={styles} />
        <BushFour surfaceColor={surfaceColor} styles={styles} />
        <Mountain surfaceColor={surfaceColor} styles={styles} />
      </>
    );
  } else if (surfaceColor === 'jungle' || surfaceColor === 'jungles') {
    return (
      <>
        <p className="text-white">
          <span className="bg-black">Grass > {surfaceColor}</span>
        </p>
        <BushOne surfaceColor={surfaceColor} styles={styles} />
        <BushTwo surfaceColor={surfaceColor} styles={styles} />
        <BushThree surfaceColor={surfaceColor} styles={styles} />
        <BushFour surfaceColor={surfaceColor} styles={styles} />
        <BushFive surfaceColor={surfaceColor} styles={styles} />
        <Mountain surfaceColor={surfaceColor} styles={styles} />
        <Foreground surfaceColor={surfaceColor} styles={styles} />
      </>
    );
  } else if (surfaceColor === 'grasslands' || surfaceColor === 'grassy hills') {
    return (
      <>
        <p className="text-white">
          <span className="bg-black">Grass > {surfaceColor}</span>
        </p>
        <MountainBottom
          styles={`h-full absolute -bottom-16 -left-2 z-2`}
          surfaceColor={surfaceColor}
        />
        <MountainMiddle
          styles={`h-full absolute -bottom-16 -left-2 z-2`}
          surfaceColor={surfaceColor}
        />
        <BushThree surfaceColor={surfaceColor} styles={styles} />
        <BushFour surfaceColor={surfaceColor} styles={styles} />
        <Foreground
          styles={`fill-${surfaceColor} h-full absolute -bottom-6 -left-2 z-3`}
          surfaceColor={surfaceColor}
        />
      </>
    );
  } else if (surfaceColor === 'cityscape' || surfaceColor === 'urban') {
    return (
      <>
        <p className="text-white">
          <span className="bg-black">Grass > {surfaceColor}</span>
        </p>
        <Mountain surfaceColor={surfaceColor} styles={styles} />
        <Cityscape
          surfaceColor={surfaceColor}
          styles={`cityscape fill-cityscape ${surfaceColor}`}
        />
        <BushOne surfaceColor={surfaceColor} styles={styles} />
        <BushTwo surfaceColor={surfaceColor} styles={styles} />
        <BushThree surfaceColor={surfaceColor} styles={styles} />
        <BushFour surfaceColor={surfaceColor} styles={styles} />
        <BushFive surfaceColor={surfaceColor} styles={styles} />
        <Foreground
          styles={`fill-${surfaceColor} h-full absolute -bottom-6 -left-2 z-2`}
          surfaceColor={surfaceColor}
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
