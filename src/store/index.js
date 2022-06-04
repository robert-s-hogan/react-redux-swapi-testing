import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { apiPeople } from '../services/apiPeople';
import { apiPlanets } from '../services/apiPlanets';
import { apiSpecies } from '../services/apiSpecies';
import { apiFilms } from '../services/apiFilms';
import { apiStarships } from '../services/apiStarships';
import { apiVehicles } from '../services/apiVehicles';

export const store = configureStore({
  reducer: {
    [apiPeople.reducerPath]: apiPeople.reducer,
    [apiPlanets.reducerPath]: apiPlanets.reducer,
    [apiSpecies.reducerPath]: apiSpecies.reducer,
    [apiFilms.reducerPath]: apiFilms.reducer,
    [apiStarships.reducerPath]: apiStarships.reducer,
    [apiVehicles.reducerPath]: apiVehicles.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(apiPeople.middleware)
      .concat(apiPlanets.middleware)
      .concat(apiSpecies.middleware)
      .concat(apiFilms.middleware)
      .concat(apiStarships.middleware)
      .concat(apiVehicles.middleware),
});

setupListeners(store.dispatch);
