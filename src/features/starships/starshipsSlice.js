import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  status: 'idle', // 'idle' | 'loading' | 'success' | 'failed'
  count: 0,
  next: null,
  previous: null,
  error: null,
};
const STARSHIPS_URL = 'https://swapi.dev/api/starships/';

export const fetchStarships = createAsyncThunk(
  'starships/fetchStarships',
  async () => {
    const response = await axios.get(STARSHIPS_URL);
    return response.data;
  },
);

const starshipsSlice = createSlice({
  name: 'starships',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchStarships.fulfilled, (state, action) => {
        state.count = action.payload.count;
        state.next = action.payload.next;
        state.previous = action.payload.previous;
        state.data = action.payload;
        state.results = action.payload.results;
        state.status = 'succeeded';
      })
      .addCase(fetchStarships.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = 'failed';
      })
      .addCase(fetchStarships.pending, (state) => {
        state.status = 'loading';
      });
  },
});

// export const selectStarshipsDataObject = (state) => state.starships.data;
export const selectAllStarshipsResults = (state) =>
  state.starships.data.results;
export const getNextStarshipsPage = (state) => state.starships.next;
export const getPreviousStarshipsPage = (state) => state.starships.previous;
export const getAllStarshipsCount = (state) => state.starships.count;
export const getStarshipsStatus = (state) => state.starships.status;
export const getStarshipsError = (state) => state.starships.error;

export default starshipsSlice.reducer;
