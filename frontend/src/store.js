import { configureStore } from '@reduxjs/toolkit'
import { productsApi } from './services/productsApi'

export default configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat(productsApi.middleware)
})