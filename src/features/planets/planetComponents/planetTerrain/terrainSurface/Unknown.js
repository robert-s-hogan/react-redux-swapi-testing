const Unknown = ({ surfaceColor, gas }) => {
  return (
    <>
      <p className="text-white">Unknown: {surfaceColor}</p>
      <div className="planet absolute -top-2 -left-4 w-96 h-96 z-5 shadow-inner rounded-full"></div>
      <div id="stars" className="z-1"></div>
      <div id="stars2" className="z-1"></div>
      <div id="stars3" className="z-1"></div>
    </>
  );
};
export default Unknown;
