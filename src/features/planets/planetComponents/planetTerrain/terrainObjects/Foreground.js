const Foreground = ({ surfaceColor, styles }) => {
  return (
    <>
      <p className="text-white">
        <span className="bg-black">Foreground > {surfaceColor}</span>
      </p>
      <svg
        className={`foreground h-full ${styles}`}
        viewBox="0 0 2087 1350.21"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2048,1048.23v263H0V997c168.25,0,334.1-27.82,502.57-30,174.78-2.28,349.66,10.71,523-12.54,167.54-22.47,340.61.4,507.49,18.58C1705,991.74,1883.3,990.12,2048,1048.23Z"
          transform="translate(19.5 19.5)"
        />
      </svg>
    </>
  );
};
export default Foreground;
