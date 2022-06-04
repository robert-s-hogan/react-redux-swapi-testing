const GridContainer = ({ children }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-4">
      {children}
    </div>
  );
};

export default GridContainer;
