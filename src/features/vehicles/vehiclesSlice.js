import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  status: 'idle',
  count: 0,
  totalPages: 0,
  next: null,
  previous: null,
  error: null,
};

const VEHICLES_URL = 'https://swapi.dev/api/vehicles/';

export const fetchVehicles = createAsyncThunk(
  'vehicles/fetchVehicles',
  async () => {
    const response = await axios.get(VEHICLES_URL);
    return response.data;
  },
);

const vehiclesSlice = createSlice({
  name: 'vehicles',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchVehicles.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchVehicles.fulfilled, (state, action) => {
        state.count = action.payload.count;
        state.next = action.payload.next;
        state.previous = action.payload.previous;
        state.data = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchVehicles.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = 'failed';
      });
  },
});

export const selectAllVehicles = (state) => state.vehicles.data;
export const selectAllVehiclesResults = (state) => state.vehicles.data.results;
export const getNextVehiclesPage = (state) => state.vehicles.next;
export const getPreviousVehiclesPage = (state) => state.vehicles.previous;
export const getAllVehiclesCount = (state) => state.vehicles.count;
export const getVehiclesTotalPages = (state) => state.vehicles.totalPages;
export const getVehiclesStatus = (state) => state.vehicles.status;
export const getVehiclesError = (state) => state.vehicles.error;

export default vehiclesSlice.reducer;
