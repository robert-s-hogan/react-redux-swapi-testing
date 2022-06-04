// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const SWAPI_API = 'https://swapi.dev/api';

// Define our single API slice object
export const apiVehicles = createApi({
  // The cache reducer expects to be added at `state.api` (already default - this is optional)
  reducerPath: 'vechiles',
  // All of our requests will have URLs starting with SWAPI_API
  baseQuery: fetchBaseQuery({ baseUrl: SWAPI_API }),
  // The "endpoints" represent operations and requests for this server
  endpoints: (builder) => ({
    // The `getVehicles` endpoint is a "query" operation that returns data
    getVehicles: builder.query({
      // The URL for the request is '/https://swapi.dev/api/vehicles/'
      query: (page = 1) => `/vehicles/?page=${page}`,
    }),
  }),
});

// Export the auto-generated hook for the `getVehicles` query endpoint
export const { useGetVehiclesQuery, usePrefetch } = apiVehicles;
