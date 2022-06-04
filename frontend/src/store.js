import { configureStore } from '@reduxjs/toolkit'
import { productsApi } from './services/productsApi'
import cartReducer from './services/cartSlice';

export default configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    cart: cartReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat(productsApi.middleware)
})