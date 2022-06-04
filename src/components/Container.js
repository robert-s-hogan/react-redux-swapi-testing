const Container = ({ children }) => {
  return (
    <div className="container max-w-4xl md:max-w-7xl md:mx-auto my-8">
      {children}
    </div>
  );
};
export default Container;
