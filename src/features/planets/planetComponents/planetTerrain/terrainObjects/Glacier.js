const Glacier = ({ surfaceColor, styles }) => {
  return (
    <>
      {/* <p className="text-white">Glacier > {surfaceColor}</p> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`glacier ${styles}`}
        version="1.1"
        viewBox="0 0 3000 2000"
      >
        <g transform="translate(0 947.64)">
          <g transform="matrix(.83453 0 0 .83453 259.58 28.207)">
            <g transform="matrix(1.6956 0 0 1.6956 1169.6 -339.39)">
              <path
                d="m431.34 170.19h-460.36l84.511 127.23 41.007 176.74 42.242-34.324 64.454 243.59 35.495-135.07 27.579 41.615 65.295-211.29 49.446-28.864z"
                fill="#A5F2F3"
              />
              <path
                d="m197.44-82.036-72.353 88.382-89.136 40.026-64.974 131.49h452.92l-58.393-113.63-66.543-14.231z"
                fill="#A5F2F3"
              />
              <path
                d="m197.09-57.091-63.029 77.065-87.081 38.616-49.726 103.51h279.01l-31.736-79.254-110.14 36.657 69.661-65.175z"
                fill="#fff"
              />
            </g>
          </g>
        </g>
      </svg>
    </>
  );
};
export default Glacier;
