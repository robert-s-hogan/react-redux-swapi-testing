const Savanna = ({ surfaceColor, styles }) => {
  return (
    <>
      <p>Savanna: {surfaceColor}</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className={`${styles} overflow-x-hidden savana-svg bg-${surfaceColor}`}
      >
        <path
          fillOpacity="1"
          d="M0,128L60,144C120,160,240,192,360,202.7C480,213,600,203,720,186.7C840,171,960,149,1080,165.3C1200,181,1320,235,1380,261.3L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </>
  );
};
export default Savanna;
