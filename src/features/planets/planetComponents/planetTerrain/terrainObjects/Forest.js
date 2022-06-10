import Tree from './Tree';
const Forest = ({ surfaceColor }) => {
  return (
    <>
      <p>{surfaceColor}</p>
      <Tree
        surfaceColor={surfaceColor}
        styles="absolute bottom-12 right-12 -rotate-45"
      />
      <Tree
        surfaceColor={surfaceColor}
        styles="absolute bottom-12 right-4 -rotate-45"
      />
      <Tree
        surfaceColor={surfaceColor}
        styles="absolute bottom-12 -right-4 -rotate-45"
      />
    </>
  );
};
export default Forest;
