import PalmTree from './PalmTree';

const Jungle = ({ surfaceColor, jungle }) => {
  return <>{jungle && <PalmTree surfaceColor={surfaceColor} />}</>;
};
export default Jungle;
