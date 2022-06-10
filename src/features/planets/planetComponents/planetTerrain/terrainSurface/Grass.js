import Hill from '../terrainObjects/Hill';
import Forest from '../terrainObjects/Forest';

const Grass = ({ surfaceColor, forest }) => {
  console.log(` surfaceColor: ${surfaceColor}`);
  return (
    <>
      <p>{surfaceColor}</p>
      <Hill surfaceColor={surfaceColor} />
      {forest && <Forest forest={surfaceColor} />}
    </>
  );
};
export default Grass;
