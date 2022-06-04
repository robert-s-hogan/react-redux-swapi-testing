import Navigation from './components/Navigation';
import Container from './components/Container';

const App = ({ children }) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <Navigation />
      <Container>{children}</Container>
    </div>
  );
};

export default App;
