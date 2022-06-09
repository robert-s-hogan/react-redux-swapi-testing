import styles from './planetSurface/PlanetSurface.css';

const PlanetTerrain = ({
  primarySurface,
  secondarySurface,
  tertiarySurface,
  quaternarySurface,
  terrain,
}) => {
  const grassSurfaces = terrain.filter((terrainSurface) => {
    const pickedTerrain = terrainSurface.includes('grass');
    console.log(`pickedTerrain: ${pickedTerrain}`);
    return pickedTerrain;
  });
  return (
    <div
      className={`planet-background-middle-third relative h-60 w-full top-32  text-black z-1 overflow-x-hidden`}
    >
      <code>
        <pre>{JSON.stringify(grassSurfaces, null, 2)}</pre>
      </code>
      {/* <div className="top-mountain absolute h-full bottom-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="h-full bottom-5 absolute z-1"
        >
          <style>{`.top-mountain{fill: brown}`}</style>

          <path
            className="top-mountain"
            fillOpacity="1"
            d="M0,160L21.8,170.7C43.6,181,87,203,131,181.3C174.5,160,218,96,262,80C305.5,64,349,96,393,101.3C436.4,107,480,85,524,64C567.3,43,611,21,655,16C698.2,11,742,21,785,37.3C829.1,53,873,75,916,101.3C960,128,1004,160,1047,170.7C1090.9,181,1135,171,1178,149.3C1221.8,128,1265,96,1309,90.7C1352.7,85,1396,107,1418,117.3L1440,128L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"
          ></path>
        </svg>
  </div> */}
      {grassSurfaces && (
        <div className={`mid-mountain absolute h-full bottom-4 z-2`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-full"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#4eda12"
              fillOpacity="1"
              d="M0,192L130.9,96L261.8,160L392.7,96L523.6,64L654.5,160L785.5,32L916.4,224L1047.3,256L1178.2,192L1309.1,0L1440,64L1440,320L1309.1,320L1178.2,320L1047.3,320L916.4,320L785.5,320L654.5,320L523.6,320L392.7,320L261.8,320L130.9,320L0,320Z"
            ></path>
          </svg>
        </div>
      )}
      {/* <div className="bottom-mountain absolute h-full bottom z-10">
        <svg
          className="h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#d6b995"
            fillOpacity="1"
            d="M0,160L20,170.7C40,181,80,203,120,218.7C160,235,200,245,240,213.3C280,181,320,107,360,106.7C400,107,440,181,480,186.7C520,192,560,128,600,112C640,96,680,128,720,128C760,128,800,96,840,69.3C880,43,920,21,960,26.7C1000,32,1040,64,1080,80C1120,96,1160,96,1200,80C1240,64,1280,32,1320,21.3C1360,11,1400,21,1420,26.7L1440,32L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"
          ></path>
        </svg>
      </div> */}
    </div>
  );
};
export default PlanetTerrain;
