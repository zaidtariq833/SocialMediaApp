import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './slices'

export const store = configureStore({
  reducer: {
    reducer: rootReducer
  },
//   middleware: [],
  devTools: process.env.NODE_ENV !== 'production',
})

