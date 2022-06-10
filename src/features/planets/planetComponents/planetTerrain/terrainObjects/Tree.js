const Tree = ({ surfaceColor, styles }) => {
  return (
    <svg
      className={`z-10 h-1/2 bg-${surfaceColor} ${styles}`}
      id="sw-js-blob-svg"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
          <stop id="stop1" stopColor="rgba(248, 117, 55, 1)" offset="0%"></stop>
          <stop
            id="stop2"
            stopColor="rgba(251, 168, 31, 1)"
            offset="100%"
          ></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#sw-gradient)"
        d="M19.5,-30.6C24.6,-27.1,27.7,-20.6,29.3,-14.2C31,-7.9,31.2,-1.7,27.4,1.8C23.7,5.3,15.9,6.2,10.6,5.5C5.4,4.8,2.8,2.6,-0.7,8.7C-4.2,14.9,-8.5,29.3,-10.5,30.9C-12.5,32.5,-12.1,21.3,-14.6,14.7C-17,8.1,-22.4,6,-20.9,4.1C-19.4,2.3,-11,0.5,-8.6,-3.6C-6.2,-7.8,-9.9,-14.4,-9.4,-20.1C-9,-25.8,-4.5,-30.6,1.4,-32.7C7.2,-34.8,14.4,-34.2,19.5,-30.6Z"
        width="100%"
        height="100%"
        transform="translate(50 50)"
        strokeWidth="0"
        //   style="transition: all 0.3s ease 0s;"
      ></path>
    </svg>
  );
};
export default Tree;
