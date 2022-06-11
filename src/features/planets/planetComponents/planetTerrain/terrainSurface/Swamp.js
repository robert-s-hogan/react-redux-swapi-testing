import Hill from '../terrainObjects/Hill';

const Swamp = ({ surfaceColor }) => {
  console.log('Swamp: ', surfaceColor);
  return (
    <>
      <p className="text-white">Swamp: {surfaceColor}</p>
      <Hill surfaceColor={surfaceColor} />
    </>
  );
};
export default Swamp;
