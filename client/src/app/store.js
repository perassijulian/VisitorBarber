import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import workerReducer from '../features/worker/workerSlice'

export const store = configureStore({
    reducer: {
      auth: authReducer,
      worker: workerReducer,
    }
  })