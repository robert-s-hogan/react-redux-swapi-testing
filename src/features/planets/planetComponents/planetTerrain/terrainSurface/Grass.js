import Forest from '../terrainObjects/Forest';
import Hill from '../terrainObjects/Hill';
import Jungle from '../terrainObjects/Jungle';

const Grass = ({ surfaceColor, forest, jungle, hill, hills, swamp }) => {
  return (
    <>
      <p className="text-white">Grass: {surfaceColor}</p>
      <Hill surfaceColor={surfaceColor} hills={true} />
      {forest && <Forest surfaceColor={surfaceColor} forest={forest} />}
      {jungle && <Jungle surfaceColor={surfaceColor} jungle={jungle} />}
    </>
  );
};
export default Grass;
