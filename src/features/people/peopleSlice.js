import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  status: 'idle', // 'idle' | 'loading' | 'success' | 'failed'
  count: 0,
  totalPages: 0,
  next: null,
  previous: null,
  error: null,
};

// const SEARCHENDPOINT = 'https://swapi.dev/api/people/?search=';

// export const FetchSearchedpeopleFromSearchApi = createAsyncThunk(
//   'people/FetchSearchedpeopleFromSearchApi',
//   async (searchTerm) => {
//     const response = await fetch(SEARCHENDPOINT + searchTerm).then((res) =>
//       res.json(),
//     );
//     console.log(SEARCHENDPOINT + searchTerm);
//     return response.results;
//   },
// );

const PEOPLE_URL = 'https://swapi.dev/api/people/';

export const fetchPeople = createAsyncThunk('people/fetchPeople', async () => {
  const response = await axios.get(PEOPLE_URL);
  return response.data;
});

const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPeople.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPeople.fulfilled, (state, action) => {
        state.count = action.payload.count;
        state.next = action.payload.next;
        state.previous = action.payload.previous;
        state.data = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchPeople.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = 'failed';
      });
  },
});

export const selectAllPeople = (state) => state.people.data;
export const selectAllPeopleResults = (state) => state.planets.data.results;
export const getNextPeoplePage = (state) => state.people.next;
export const getPreviousPeoplePage = (state) => state.people.previous;
export const getAllPeopleCount = (state) => state.people.count;
export const getPeopleTotalPages = (state) => state.planets.totalPages;
export const getPeopleStatus = (state) => state.people.status;
export const getPeopleError = (state) => state.people.error;

export default peopleSlice.reducer;
