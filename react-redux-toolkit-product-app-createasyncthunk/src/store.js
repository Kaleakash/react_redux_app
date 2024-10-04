import { configureStore,getDefaultMiddleware } from '@reduxjs/toolkit';
import productReducer from './reducer/productSlice';
import logger from 'redux-logger';
const store = configureStore({
  reducer: {
    products: productReducer,
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger),
  devTools:process.env.NODE_ENV !=="production"
});

export default store;
