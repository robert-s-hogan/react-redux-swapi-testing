// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { FetchSearchedCharactersFromSearchApi } from './peopleSlice';

// export const FetchSearchedCharacters = () => {
//   const [value, setValue] = useState('');
//   const dispatch = useDispatch();

//   const handleChange = (event) => {
//     const newValue = event.target.value;
//     setValue(newValue);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     dispatch(FetchSearchedCharactersFromSearchApi(value));
//     // setValue('');
//   };

//   return (
//     <form
//       className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full md:mx-2 max-w-4x"
//       onSubmit={handleSubmit}
//     >
//       <input
//         onChange={handleChange}
//         placeholder="Search Here"
//         type="search"
//         value={value}
//       />
//       <input
//         className="bg-pink text-white font-bold uppercase text-2xl"
//         type="submit"
//         disabled={!value}
//       />
//     </form>
//   );
// };

// export default FetchSearchedCharacters;
