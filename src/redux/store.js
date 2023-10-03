import { configureStore } from '@reduxjs/toolkit';
import appConfigurationReducer from './appConfSlice';
import productDataReducer from './productSlice';

export const store = configureStore({
  reducer: {
    appConfData: appConfigurationReducer,
    productData: productDataReducer,
  },
});

export default store;
