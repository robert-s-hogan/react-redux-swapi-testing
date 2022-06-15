const Cave = ({ surfaceColor, styles }) => {
  return (
    <>
      {/* <p className="text-white">
        <span className="bg-black">Cave > {surfaceColor}</span>
      </p> */}
      <svg className={`${styles}`} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M14.5,-12.3C22,-7,33.4,-3.5,34.8,1.5C36.3,6.5,27.9,13,20.4,20.3C13,27.7,6.5,35.9,-1.2,37C-8.8,38.2,-17.7,32.4,-23.6,25C-29.6,17.7,-32.6,8.8,-34.1,-1.4C-35.5,-11.7,-35.3,-23.4,-29.4,-28.7C-23.4,-34,-11.7,-32.9,-4.1,-28.8C3.5,-24.7,7,-17.6,14.5,-12.3Z"
          width="100%"
          height="100%"
          transform="translate(50 50)"
          strokeWidth="1"
        ></path>
      </svg>
    </>
  );
};
export default Cave;
