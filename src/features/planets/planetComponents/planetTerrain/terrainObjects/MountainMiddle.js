const MidMountain = ({ surfaceColor, styles }) => {
  return (
    <>
      <p className="text-white">
        <span className="bg-black">MidMountain > {surfaceColor}</span>
      </p>
      <svg
        className={`mountain-middle fill-mountain-middle-${surfaceColor} ${styles} -z-8`}
        viewBox="0 0 2087 1350.21"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2048,478.86c0,260.14.37,775.87,0,832.35-18.44,0-1563-.06-2048,0V429.31s62.23-17.77,77.83-22c60.58-16.43,121-33.49,181.85-49,121.29-31,238.4-35.12,362.94-40.37,65.37-2.76,131.08-7.05,196.51-7.33,52-.23,88.88,25.44,139,38.17,116.54,29.57,240.24,26,357.4,56.1,62.9,16.16,123,36.6,188.26,42.27,60.71,5.26,119.49-4.46,180-7.84C1808.64,432.33,1925.76,460.14,2048,478.86Z"
          transform="translate(19.5 19.5)"
        />
      </svg>
    </>
  );
};
export default MidMountain;
