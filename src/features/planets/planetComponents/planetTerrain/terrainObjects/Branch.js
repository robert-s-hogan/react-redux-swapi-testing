const Branch = ({ surfaceColor, styles }) => {
  return (
    <>
      {/* <p className="text-white">
        <span className="bg-black">Branch > {surfaceColor}</span>
      </p> */}
      <svg
        className={`branch ${styles}`}
        viewBox="0 0 2087 1350.21"
        preserveAspectRatio="xMidYMax slice"
      >
        <path
          d="M142.29,51.58c-2.61,1.43-77.54,62.49-93.47,72.31C31.15,134.79.29,173.34.29,173.34s-.65,422.22,0,431.84c36.93-27.1,72.94-52.07,107.33-79.1C166.06,480.15,224.83,434.5,281,385.89c84.71-73.31,165.55-151.17,251.49-222.95,49.61-41.43,106-74.72,159.36-111.67,0-2.6,41.78-38.85,54-51.27H241.2C219.44,4.6,204.86,17,142.29,51.58Z"
          transform="translate(19.5 19.5)"
        />
      </svg>
    </>
  );
};
export default Branch;
