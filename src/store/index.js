import { configureStore } from '@reduxjs/toolkit'
// eslint-disable-next-line import/no-named-as-default
import authSlices from './slices/authSlices'

const store = configureStore({
   reducer: {
      authReducers: authSlices.reducer,
   },
})

export default store
