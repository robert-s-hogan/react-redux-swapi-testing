// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const SWAPI_API = 'https://swapi.dev/api';

// Define our single API slice object
export const apiFilms = createApi({
  // The cache reducer expects to be added at `state.api` (already default - this is optional)
  reducerPath: 'films',
  // All of our requests will have URLs starting with SWAPI_API
  baseQuery: fetchBaseQuery({ baseUrl: SWAPI_API }),
  // The "endpoints" represent operations and requests for this server
  endpoints: (builder) => ({
    // The `getFilms` endpoint is a "query" operation that returns data
    getFilms: builder.query({
      // The URL for the request is '/https://swapi.dev/api/films/'
      query: (page = 1) => `/films/?page=${page}`,
    }),
  }),
});

// Export the auto-generated hook for the `getFilms` query endpoint
export const { useGetFilmsQuery, usePrefetch } = apiFilms;
