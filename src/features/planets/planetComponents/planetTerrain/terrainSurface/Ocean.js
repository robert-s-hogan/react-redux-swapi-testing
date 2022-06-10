const Ocean = ({ surfaceColor }) => {
  return (
    <>
      <p>{surfaceColor}</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`bottom-hill-container h-full absolute bottom-0 -z-1 ${
          surfaceColor ? 'bg-water opacity-90' : ''
        }`}
        viewBox="0 0 1440 320"
      >
        <path
          fillOpacity="1"
          d="M0,256L120,240C240,224,480,192,720,202.7C960,213,1200,267,1320,293.3L1440,320L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>
    </>
  );
};
export default Ocean;
