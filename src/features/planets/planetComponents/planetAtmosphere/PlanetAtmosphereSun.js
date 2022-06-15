const PlanetAtmosphereSun = ({ width, height }) => {
  return (
    <>
      <div
        className={`sun bg-sun shadow-sun circle rounded-full absolute top-0 bottom-0 left-0 right-0 m-auto h-${height} w-${width} z-30`}
      ></div>
      <div
        className={`
            sun-loop-one bg-sun circle border-30 rounded-full absolute top-0 bottom-0 left-0 right-0 m-auto h-${
              width + 20
            } w-${width + 20} z-27 opacity-10`}
      ></div>
      <div
        className={`sun-loop-two bg-sun circle border-30 rounded-full absolute top-0 bottom-0 left-0 right-0 m-auto w-${
          width + 14
        } h-${height + 14} z-28 opacity-30`}
      ></div>
      <div
        className={`sun-loop-three bg-sun circle border-30 rounded-full absolute top-0 bottom-0 left-0 right-0 m-auto w-${
          width + 8
        } h-${height + 8} z-29 opacity-40`}
      ></div>
    </>
  );
};
export default PlanetAtmosphereSun;
