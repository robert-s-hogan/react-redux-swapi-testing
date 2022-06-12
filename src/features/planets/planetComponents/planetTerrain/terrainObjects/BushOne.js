const BushOne = ({ surfaceColor }) => {
  return (
    <>
      {/* <p className="text-xs">BushOne</p> */}
      <svg
        className={`foreground fill-bush-${surfaceColor}-1 z-3 absolute -bottom-6 -right-48`}
        viewBox="0 0 2087 1350.21"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M688.86,1011.58c5.28-70.47,49-114.07,95.71-161.29,41.47-41.89,60.62-100,131.25-86.89,113.25,21,249.42,92,301.92,199.29,22.1,45.17,46.77,115.34-.37,154.5-49.82,41.39-134.75-.61-191.43-2C898.45,1112.06,699.61,1210.32,688.86,1011.58Z"
          transform="translate(19.5 19.5)"
        />
      </svg>
    </>
  );
};
export default BushOne;
