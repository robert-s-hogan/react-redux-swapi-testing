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
const PLANET_URL = 'https://swapi.dev/api/planets/';

export const fetchPlanets = createAsyncThunk(
  'planets/fetchPlanets',
  async () => {
    const response = await axios.get(PLANET_URL);
    return response.data;
  },
);

const planetsSlice = createSlice({
  name: 'planets',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPlanets.fulfilled, (state, action) => {
        state.count = action.payload.count;
        state.next = action.payload.next;
        state.previous = action.payload.previous;
        state.data = action.payload;
        state.results = action.payload.results;
        state.status = 'succeeded';
      })
      .addCase(fetchPlanets.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = 'failed';
      })
      .addCase(fetchPlanets.pending, (state) => {
        state.loading = 'loading';
      });
  },
});

export const selectPlanetDataObject = (state) => state.planets.data;
export const selectAllPlanetResults = (state) => state.planets.data.results;
export const getNextPlanetsPage = (state) => state.planets.next;
export const getPreviousPlanetsPage = (state) => state.planets.previous;
export const getAllPlanetsCount = (state) => state.planets.count;
export const getPlanetsStatus = (state) => state.planets.status;
export const getPlanetsError = (state) => state.planets.error;

export default planetsSlice.reducer;
