import People from './features/people/People';
// import SearchPeopleForm from './features/people/SearchPeopleForm';
// import Pagination from './components/Pagination';
import Navigation from './components/Navigation';

export const App = () => {
  return (
    <div className="container max-w-4xl px-4 md:mx-auto my-4">
      {/* <SearchPeopleForm /> */}
      <People />
      {/* <Pagination /> */}
    </div>
  );
};
