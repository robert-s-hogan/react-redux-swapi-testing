import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = [];
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
    builder.addCase(fetchPlanets.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectAllPlanets = (state) => state.planets.data;

export default planetsSlice.reducer;
