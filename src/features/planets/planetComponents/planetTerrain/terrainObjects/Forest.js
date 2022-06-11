import Tree from './Tree';
const Forest = ({ surfaceColor }) => {
  return (
    <>
      <p className="text-white">Forest: {surfaceColor}</p>
      <Tree surfaceColor={surfaceColor} styles="absolute bottom-0 -right-8" />
    </>
  );
};
export default Forest;
