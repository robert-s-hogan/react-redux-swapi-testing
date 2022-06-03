import { configureStore } from '@reduxjs/toolkit';
import peopleReducer from '../features/people/peopleSlice';
// import planetReducer from '../features/planets/planetsSlice';

export const store = configureStore({
  reducer: {
    people: peopleReducer,
    // planet: planetReducer,
  },
});
