const Mountain = ({ surfaceColor, range }) => {
  return (
    <>
      <p>Mountain: {surfaceColor}</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className={`h-full bottom-0 absolute -z-1 ${
          surfaceColor ? 'bg-mountain' : ''
        }`}
      >
        <path
          fill="#000"
          fillOpacity="1"
          className="mountain-border"
          d="M0,192L130.9,96L261.8,160L392.7,96L523.6,64L654.5,160L785.5,32L916.4,224L1047.3,256L1178.2,192L1309.1,0L1440,64L1440,320L1309.1,320L1178.2,320L1047.3,320L916.4,320L785.5,320L654.5,320L523.6,320L392.7,320L261.8,320L130.9,320L0,320Z"
        ></path>
        <path
          className="mountain-svg"
          fillOpacity=".95"
          d="M0,192L130.9,96L261.8,160L392.7,96L523.6,64L654.5,160L785.5,32L916.4,224L1047.3,256L1178.2,192L1309.1,0L1440,64L1440,320L1309.1,320L1178.2,320L1047.3,320L916.4,320L785.5,320L654.5,320L523.6,320L392.7,320L261.8,320L130.9,320L0,320Z"
        ></path>
      </svg>
      {range && (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className={`h-full bottom-12 left-28 absolute -z-2 ${
              surfaceColor ? 'bg-mountain' : ''
            }`}
          >
            <path
              fill="#000"
              fillOpacity="1"
              className="mountain-border"
              d="M0,192L130.9,96L261.8,160L392.7,96L523.6,64L654.5,160L785.5,32L916.4,224L1047.3,256L1178.2,192L1309.1,0L1440,64L1440,320L1309.1,320L1178.2,320L1047.3,320L916.4,320L785.5,320L654.5,320L523.6,320L392.7,320L261.8,320L130.9,320L0,320Z"
            ></path>
            <path
              className="mountain-svg"
              fillOpacity=".95"
              d="M0,192L130.9,96L261.8,160L392.7,96L523.6,64L654.5,160L785.5,32L916.4,224L1047.3,256L1178.2,192L1309.1,0L1440,64L1440,320L1309.1,320L1178.2,320L1047.3,320L916.4,320L785.5,320L654.5,320L523.6,320L392.7,320L261.8,320L130.9,320L0,320Z"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className={`h-full -bottom-4 left-54 absolute -z-1 ${
              surfaceColor ? 'bg-mountain' : ''
            }`}
          >
            <path
              fill="#000"
              fillOpacity="1"
              className="mountain-border"
              d="M0,192L130.9,96L261.8,160L392.7,96L523.6,64L654.5,160L785.5,32L916.4,224L1047.3,256L1178.2,192L1309.1,0L1440,64L1440,320L1309.1,320L1178.2,320L1047.3,320L916.4,320L785.5,320L654.5,320L523.6,320L392.7,320L261.8,320L130.9,320L0,320Z"
            ></path>
            <path
              className="mountain-svg"
              fillOpacity=".95"
              d="M0,192L130.9,96L261.8,160L392.7,96L523.6,64L654.5,160L785.5,32L916.4,224L1047.3,256L1178.2,192L1309.1,0L1440,64L1440,320L1309.1,320L1178.2,320L1047.3,320L916.4,320L785.5,320L654.5,320L523.6,320L392.7,320L261.8,320L130.9,320L0,320Z"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className={`h-full -bottom-4 -left-32 absolute -z-1 ${
              surfaceColor ? 'bg-mountain' : ''
            }`}
          >
            <path
              fill="#000"
              fillOpacity="1"
              className="mountain-border"
              d="M0,192L130.9,96L261.8,160L392.7,96L523.6,64L654.5,160L785.5,32L916.4,224L1047.3,256L1178.2,192L1309.1,0L1440,64L1440,320L1309.1,320L1178.2,320L1047.3,320L916.4,320L785.5,320L654.5,320L523.6,320L392.7,320L261.8,320L130.9,320L0,320Z"
            ></path>
            <path
              className="mountain-svg"
              fillOpacity=".95"
              d="M0,192L130.9,96L261.8,160L392.7,96L523.6,64L654.5,160L785.5,32L916.4,224L1047.3,256L1178.2,192L1309.1,0L1440,64L1440,320L1309.1,320L1178.2,320L1047.3,320L916.4,320L785.5,320L654.5,320L523.6,320L392.7,320L261.8,320L130.9,320L0,320Z"
            ></path>
          </svg>
        </>
      )}
    </>
  );
};
export default Mountain;
