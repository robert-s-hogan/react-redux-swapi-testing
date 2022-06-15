const BushFour = ({ surfaceColor }) => {
  return (
    <>
      {/* <p className="text-white">
        <span className="bg-black">BushFour > {surfaceColor}</span>
      </p> */}
      <svg
        className={`bush-4 fill-bush-${surfaceColor}-4 z-6 absolute bottom-0 -right-2`}
        viewBox="0 0 2087 1350.21"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2048,542.86s-41.13,32.33-48.26,58.9c-21.65-42.71-65.93-99.6-87.92-19.76-23.52-10.3-94.88-57-111-14.15-13.59,36.15,50.71,62.55,72.4,74.59-19.56,13.32-102.38,57.71-61.18,92.46,19.07,16.09,50.14-5.27,67.44-16.42-12.5,31.07-61.63,67.85-43.73,102.23,2.21,4.23,44,46.5,46.72,48.35,12.31,8.38,30.17,9.35,43.33,4.57q13.61-11.73,27.53-23.06,16-30.24,32.77-6.4c27.83,3.61,61.87-3.41,61.87-3.41Z"
          transform="translate(19.5 19.5)"
        />
      </svg>
    </>
  );
};
export default BushFour;
