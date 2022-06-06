const PlanetAtmosphereSunPosition = ({ children, className }) => {
  return (
    <div className={`${className} right-0 absolute rounded-full z-2`}>
      {children}
    </div>
  );
};

export default PlanetAtmosphereSunPosition;
