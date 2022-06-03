// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const SWAPI_API = 'https://swapi.dev/api';

// Define our single API slice object
export const apiPlanets = createApi({
  // The cache reducer expects to be added at `state.api` (already default - this is optional)
  reducerPath: 'api',
  // All of our requests will have URLs starting with PLANETS_URL
  baseQuery: fetchBaseQuery({ baseUrl: SWAPI_API }),
  // The "endpoints" represent operations and requests for this server
  endpoints: (builder) => ({
    // The `getPlanets` endpoint is a "query" operation that returns data
    getPlanets: builder.query({
      // The URL for the request is '/https://swapi.dev/api/planets/'
      query: (page = 1) => `/planets/?page=${page}`,
    }),
  }),
});

// Export the auto-generated hook for the `getPlanets` query endpoint
export const { useGetPlanetsQuery, usePrefetch } = apiPlanets;
