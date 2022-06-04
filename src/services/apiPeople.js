// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const SWAPI_API = 'https://swapi.dev/api';

// Define our single API slice object
export const apiPeople = createApi({
  // The cache reducer expects to be added at `state.api` (already default - this is optional)
  reducerPath: 'people',
  // All of our requests will have URLs starting with SWAPI_API
  baseQuery: fetchBaseQuery({ baseUrl: SWAPI_API }),
  // The "endpoints" represent operations and requests for this server
  endpoints: (builder) => ({
    // The `getPeople` endpoint is a "query" operation that returns data
    getPeople: builder.query({
      // The URL for the request is '/https://swapi.dev/api/planets/'
      query: (page = 1) => `/people/?page=${page}`,
    }),
  }),
});

// Export the auto-generated hook for the `getPeople` query endpoint
export const { useGetPeopleQuery, usePrefetch } = apiPeople;
