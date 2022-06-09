const PlanetSurface = ({ surface }) => {
  /**
   * Filter array items based on search criteria (query)
   */

  return (
    <div
      className={`planet-background-bottom-third absolute h-29 top-64 w-full text-black -z-5 overflow-hidden bg-brown}`}
    >
      planetSurface
      {/* <div className="dirt bg-brown h-27 w-full absolute bottom-0 z-5"></div>
      <div className="cliff h-48 w-48 absolute right-0 bottom-0 z-10 overflow-hidden">
        <div className={`${surfaceStyles.cliffTop} absolute z-20`}></div>
        <div className={`${surfaceStyles.cliffShadow} z-20`}></div>
      </div> */}
      {/* {surface.map((surface, index) => {
        return <p key={index}>{surface}</p>;
      })} */}
    </div>
  );
};

export default PlanetSurface;
