import { configureStore } from '@reduxjs/toolkit'
// eslint-disable-next-line import/no-named-as-default
import authSlices from './slices/authSlices'

const store = configureStore({
   reducer: {
      auth: authSlices.reducer,
   },
})

export default store
