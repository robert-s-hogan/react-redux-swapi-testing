import { configureStore } from '@reduxjs/toolkit';
import peopleReducer from '../features/people/peopleSlice';
import planetReducer from '../features/planets/planetsSlice';
import speciesReducer from '../features/species/speciesSlice';
import filmReducer from '../features/films/filmsSlice';
import starshipsReducer from '../features/starships/starshipsSlice';
import vehiclesReducer from '../features/vehicles/vehiclesSlice';

export const store = configureStore({
  reducer: {
    people: peopleReducer,
    planets: planetReducer,
    species: speciesReducer,
    films: filmReducer,
    starships: starshipsReducer,
    vehicles: vehiclesReducer,
  },
});
