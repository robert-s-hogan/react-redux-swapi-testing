const Sinkhole = ({ surfaceColor, styles }) => {
  return (
    <>
      <p className="text-white">
        <span className="bg-black">Sinkhole > {surfaceColor}</span>
      </p>
      <svg
        id="sw-js-blob-svg"
        viewBox="0 0 100 100"
        className={`sinkhole ${styles} bg-${surfaceColor}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          //   fill="url(#sw-gradient)"
          d="M19,-34C24.4,-29.8,28.5,-24.3,32.1,-18.4C35.6,-12.5,38.8,-6.3,39.4,0.4C40.1,7,38.4,14.1,34.7,19.7C30.9,25.4,25.2,29.6,19.1,32.7C13,35.8,6.5,37.8,-0.6,38.8C-7.7,39.9,-15.5,40,-22.4,37.4C-29.4,34.8,-35.5,29.4,-38.4,22.7C-41.2,16.1,-40.7,8,-39.3,0.8C-38,-6.4,-35.7,-12.9,-32.9,-19.5C-30,-26.2,-26.5,-33.1,-21,-37.2C-15.4,-41.3,-7.7,-42.7,-0.4,-42C6.8,-41.2,13.6,-38.2,19,-34Z"
          width="100%"
          height="100%"
          transform="translate(50 50)"
          strokeWidth="0"
          //   style="transition: all 0.3s ease 0s;"
          stroke="url(#sw-gradient)"
        ></path>{' '}
      </svg>
    </>
  );
};
export default Sinkhole;
