const Gas = ({ surfaceColor }) => {
  return (
    <>
      <p className="text-white">
        <span className="bg-black">Gas > {surfaceColor}</span>
      </p>
      <div className="planet absolute top-0 -left-24 h-full w-full 02 shadow-inner rounded-full"></div>
    </>
  );
};
export default Gas;
