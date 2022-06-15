const Lake = ({ surfaceColor }) => {
  return (
    <>
      <p className="text-white">Lake: {surfaceColor}</p>
      <svg
        id="sw-js-blob-svg"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className={`lake absolute top-48 lg:top-36 2xl:top-64 -right-16 w-full z-1 ${
          surfaceColor ? 'bg-lake' : ''
        }`}
      >
        <defs>
          <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
            <stop
              id="stop1"
              stopColor="rgba(248, 117, 55, 1)"
              offset="0%"
            ></stop>{' '}
            <stop
              id="stop2"
              stopColor="rgba(251, 168, 31, 1)"
              offset="100%"
            ></stop>{' '}
          </linearGradient>{' '}
        </defs>{' '}
        <path
          //   fill="url(#sw-gradient)"
          d="M19.1,-32.1C25.6,-29.4,32,-25.8,35.6,-20.3C39.1,-14.8,39.6,-7.4,39.3,-0.2C39,7.1,37.8,14.1,34.3,19.7C30.9,25.2,25.1,29.3,19,32.3C12.9,35.2,6.4,37.1,-0.2,37.5C-6.9,37.9,-13.8,36.8,-20.3,34.1C-26.8,31.3,-32.9,26.9,-36.8,21C-40.6,15,-42.3,7.5,-42.5,-0.2C-42.8,-7.8,-41.8,-15.7,-38.1,-22.1C-34.5,-28.4,-28.3,-33.4,-21.5,-35.8C-14.7,-38.3,-7.4,-38.3,-0.5,-37.4C6.4,-36.5,12.7,-34.8,19.1,-32.1Z"
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
export default Lake;
