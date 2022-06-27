import { configureStore } from '@reduxjs/toolkit'
import { productsApi } from './services/productsApi'
import cartReducer from './services/cartSlice';
import authReducer from './services/authSlice';


export default configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    cart: cartReducer,
    auth: authReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat(productsApi.middleware)
})