import { configureStore } from '@reduxjs/toolkit';
import appConfigurationReducer from './appConfSlice';
// import categoriesReducer from './categories/categoriesSlice';

export const store = configureStore({
  reducer: {
    appConfData: appConfigurationReducer,
    // categories: categoriesReducer,
  },
});

export default store;
