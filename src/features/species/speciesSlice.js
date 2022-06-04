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
const SPECIES_URL = 'https://swapi.dev/api/species/';

export const fetchSpecies = createAsyncThunk(
  'species/fetchSpecies',
  async () => {
    const response = await axios.get(SPECIES_URL);
    return response.data;
  },
);

const speciesSlice = createSlice({
  name: 'species',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchSpecies.fulfilled, (state, action) => {
        state.count = action.payload.count;
        state.next = action.payload.next;
        state.previous = action.payload.previous;
        state.data = action.payload;
        state.results = action.payload.results;
        state.status = 'succeeded';
      })
      .addCase(fetchSpecies.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = 'failed';
      })
      .addCase(fetchSpecies.pending, (state) => {
        state.status = 'loading';
      });
  },
});

export const selectSpeciesDataObject = (state) => state.species.data;
export const selectAllSpeciesResults = (state) => state.species.data.results;
export const getNextSpeciesPage = (state) => state.species.next;
export const getPreviousSpeciesPage = (state) => state.species.previous;
export const getAllSpeciesCount = (state) => state.species.count;
export const getSpeciesStatus = (state) => state.species.status;
export const getSpeciesError = (state) => state.species.error;

export default speciesSlice.reducer;
