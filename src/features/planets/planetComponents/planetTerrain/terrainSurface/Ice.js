import Cave from '../terrainObjects/Cave';

const Ice = ({ surfaceColor, cave }) => {
  return (
    <>
      <p>{surfaceColor}</p>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`bottom-hill-container h-full absolute -bottom-16 -z-1 ${
          surfaceColor ? 'bg-ice opacity-90' : ''
        }`}
        viewBox="0 0 1440 320"
      >
        <path
          className="bottom-hill-svg"
          fillOpacity="1"
          d="M0,160L21.8,170.7C43.6,181,87,203,131,181.3C174.5,160,218,96,262,80C305.5,64,349,96,393,101.3C436.4,107,480,85,524,64C567.3,43,611,21,655,16C698.2,11,742,21,785,37.3C829.1,53,873,75,916,101.3C960,128,1004,160,1047,170.7C1090.9,181,1135,171,1178,149.3C1221.8,128,1265,96,1309,90.7C1352.7,85,1396,107,1418,117.3L1440,128L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"
        ></path>
      </svg>
      {cave && (
        <Cave
          surfaceColor={surfaceColor}
          styles={`absolute bottom-12 right-48 rotate-45`}
        />
      )}
    </>
  );
};
export default Ice;
