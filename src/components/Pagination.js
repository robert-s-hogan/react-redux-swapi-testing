// import { useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { FetchOnLoad } from '../store/charactersSlice';

const Pagination = () => {
  return (
    <div className="bg- mt-4 flex justify-between">
      <button
        className={`bg-orange uppercase py-2 px-4 text-white font-bold text-xl`}
      >
        Previous
      </button>
      <button className="bg-orange uppercase py-2 px-4 text-white font-bold text-xl">
        1
      </button>
      <button
        className={`bg-orange uppercase py-2 px-4 text-white font-bold text-xl`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
