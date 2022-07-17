import { configureStore } from '@reduxjs/toolkit'
import { productsApi } from './services/productsApi'
import cartReducer from './services/cartSlice';
import authReducer from './services/authSlice';
import userReducer from './services/userSlice';

export default configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    cart: cartReducer,
    auth: authReducer,
    user: userReducer
  },
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
    }).concat(productsApi.middleware)
})