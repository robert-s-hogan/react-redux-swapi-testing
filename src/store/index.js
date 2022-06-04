import { configureStore } from '@reduxjs/toolkit';
import peopleReducer from '../features/people/peopleSlice';
import planetReducer from '../features/planets/planetsSlice';
import speciesReducer from '../features/species/speciesSlice';
import filmReducer from '../features/films/filmsSlice';
import starshipsReducer from '../features/starships/starshipsSlice';
import vehiclesReducer from '../features/vehicles/vehiclesSlice';

import { apiPlanets } from '../services/apiPlanets';
import { apiPeople } from '../services/apiPeople';
import { apiSpecies } from '../services/apiSpecies';
// import { apiStarships } from '../services/apiStarships';
// import { apiVehicles } from '../services/apiVehicles';

export const store = configureStore({
  reducer: {
    people: peopleReducer,
    planets: planetReducer,
    species: speciesReducer,
    films: filmReducer,
    starships: starshipsReducer,
    vehicles: vehiclesReducer,
    [apiPlanets.reducerPath]: apiPlanets.reducer,
    [apiPeople.reducerPath]: apiPeople.reducer,
    [apiSpecies.reducerPath]: apiSpecies.reducer,
    // [apiStarships.reducerPath]: apiStarships.reducer,
    // [apiVehicles.reducerPath]: apiVehicles.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiPlanets.middleware),
});
