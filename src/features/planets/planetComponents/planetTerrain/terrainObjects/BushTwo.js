const BushTwo = ({ surfaceColor }) => {
  return (
    <>
      {/* <p className="text-white">
        <span className="bg-black">BushTwo > {surfaceColor}</span>
      </p> */}
      <svg
        className={`bush-two fill-bush-${surfaceColor}-2 z-6 absolute -bottom-10 -left-2 -right-48`}
        viewBox="0 0 2087 1350.21"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,570.19c40.84-28.42,83.55-51,135.62-49.76,9.71.23,20.57-5.55,29.23-11.14,33-21.28,56.38-16.94,82.6,12.47,18.94,21.25,41.2,39.54,62,59.1,2.65,2.49,7.36,4.27,8.07,7.13,17.9,71.72,101.52,76.78,134.87,133.82,25.2,43.12,59.42,81.22,82.13,125.4,9.06,17.64-2,45.64-3.48,63.15,38.87,5,78.61,9,117.89,15.66,27.91,4.73,40.5,25.48,42.21,52.29,1.85,29-1.87,55.55-31.7,71.75-14.89,8.09-29.79,18.43-40.69,31.16-29.87,34.92-67.54,26.1-96.68-24.19-48.66,71.9-137.17,136.66-227.72,95.43-15.06-6.86-27.32-20.48-42.67-25.92-14.29-5.08-31-3.42-49-4.92-17.74,29.5-42.48,46.14-80.6,31.16-8.09-3.18-19,.49-28.53,1.36-31.24,2.85-53.63-9-68.58-37.35-5.63-10.67-16.5-18.58-25-27.74Z"
          transform="translate(19.5 19.5)"
        />
      </svg>
    </>
  );
};
export default BushTwo;
