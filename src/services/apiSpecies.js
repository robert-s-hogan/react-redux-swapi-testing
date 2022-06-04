// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const SWAPI_API = 'https://swapi.dev/api';

// Define our single API slice object
export const apiSpecies = createApi({
  // The cache reducer expects to be added at `state.api` (already default - this is optional)
  reducerPath: 'api',
  // All of our requests will have URLs starting with SWAPI_API
  baseQuery: fetchBaseQuery({ baseUrl: SWAPI_API }),
  // The "endpoints" represent operations and requests for this server
  endpoints: (builder) => ({
    // The `getSpecies` endpoint is a "query" operation that returns data
    getSpecies: builder.query({
      // The URL for the request is '/https://swapi.dev/api/planets/'
      query: (page = 1) => `/species/?page=${page}`,
    }),
  }),
});

// Export the auto-generated hook for the `getSpecies` query endpoint
export const { useGetSpeciesQuery, usePrefetch } = apiSpecies;
