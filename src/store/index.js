import { configureStore } from '@reduxjs/toolkit'
// eslint-disable-next-line import/no-named-as-default
import authSlices from './slices/authSlices'

const store = configureStore({
   reducer: {
      vendor: authSlices.reducer,
      client: '',
      admin: '',
   },
})

export default store
