import Container from '../components/Container';
import Stormtrooper from '../style/stormtrooper/Stormtrooper';

const NotFoundPage = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 md:mt-32">
        <Stormtrooper />
        <div className="flex flex-col justify-center h-screen md:h-full my-auto">
          <h1 className="text-white uppercase text-2xl">
            This is not the page you're looking for
          </h1>
          <h2 className="text-white mt-3">Move along...</h2>
          <h2 className="text-white">Move along...</h2>
          <button className="mt-8 letter-box bg-red w-full lg:w-3/4">
            Move Along
          </button>
        </div>
      </div>
    </Container>
  );
};

export default NotFoundPage;
