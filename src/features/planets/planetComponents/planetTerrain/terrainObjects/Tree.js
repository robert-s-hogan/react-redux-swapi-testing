const Tree = ({ surfaceColor, styles }) => {
  return (
    <>
      <p className="text-white">
        <span className="bg-black">Tree > {surfaceColor}</span>
      </p>
      <svg
        className={`jungle-tree fill-jungle-tree h-full ${styles}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2087 1350.21"
      >
        <path
          d="M446.47,92.29c-13.8-22.18-21.14-45.4-51.08-39.22-25.12,5.19-22.84,41.17-50.37,9.81C330.87,46.77,334.46,21.61,324.41,0H0V338.41q26.43-8.48,21.58,24.65a278,278,0,0,0,11.36,36.18C50.8,451.75,68.08,512.33,97.77,559.53c11.72,18.63,25.83,35.12,45.47,45.75,18.53,10,49.58,7.94,65.18,21.18,33.45,28.42,26.29,80.15,74.4,35.26Q281.1,648,291.41,641a50.47,50.47,0,0,0,25.23-15.29c11.85-19,4.76-39.25-4.65-57.86,23.83,2.89,69.43,16.89,93,4.62,20.29-10.54,33.09-37.92,12.46-56.62-19.83-18-115.81,6.66-72.51-45.74,13.43-16.26,43.73-5.58,49.74-38.91,4.35-24.15-24.15-37-19-62.4,11.63-56.67,116.19-85,140.06-140C543.93,164.1,475.34,138.67,446.47,92.29Z"
          transform="translate(19.5 19.5)"
        />
      </svg>
    </>
  );
};
export default Tree;