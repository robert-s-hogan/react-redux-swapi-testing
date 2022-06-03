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
const SPECIES_URL = 'https://swapi.dev/api/films/';

export const fetchFilms = createAsyncThunk('films/fetchFilms', async () => {
  const response = await axios.get(SPECIES_URL);
  return response.data;
});

const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFilms.fulfilled, (state, action) => {
        state.count = action.payload.count;
        state.next = action.payload.next;
        state.previous = action.payload.previous;
        state.data = action.payload;
        state.results = action.payload.results;
        state.status = 'succeeded';
      })
      .addCase(fetchFilms.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = 'failed';
      })
      .addCase(fetchFilms.pending, (state) => {
        state.loading = 'loading';
      });
  },
});

export const selectFilmsDataObject = (state) => state.films.data;
export const selectAllFilmsResults = (state) => state.films.data.results;
export const getNextFilmsPage = (state) => state.films.next;
export const getPreviousFilmsPage = (state) => state.films.previous;
export const getAllFilmsCount = (state) => state.films.count;
export const getFilmsStatus = (state) => state.films.status;
export const getFilmsError = (state) => state.films.error;

export default filmsSlice.reducer;
