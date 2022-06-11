const Plains = ({ surfaceColor }) => {
  return (
    <>
      <p>plains: {surfaceColor}</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className={`bottom-hill-container h-full absolute -bottom-24 -z-1 bg-plains opacity-100`}
      >
        <path
          fillOpacity="1"
          d="M0,224L48,208C96,192,192,160,288,176C384,192,480,256,576,234.7C672,213,768,107,864,64C960,21,1056,43,1152,74.7C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </>
  );
};
export default Plains;
