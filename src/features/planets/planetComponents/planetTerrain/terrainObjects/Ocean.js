const Ocean = ({ surfaceColor, styles }) => {
  return (
    <>
      <p className="text-white">
        <span className="bg-black">Ocean > {surfaceColor}</span>
      </p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`ocean  ${surfaceColor ? 'bg-water opacity-90' : ''} ${styles}`}
        viewBox="0 0 1440 320"
      >
        <path
          fillOpacity="1"
          d="M0,192L34.3,202.7C68.6,213,137,235,206,229.3C274.3,224,343,192,411,202.7C480,213,549,267,617,245.3C685.7,224,754,128,823,74.7C891.4,21,960,11,1029,37.3C1097.1,64,1166,128,1234,181.3C1302.9,235,1371,277,1406,298.7L1440,320L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>
    </>
  );
};
export default Ocean;
