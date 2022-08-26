import { configureStore } from '@reduxjs/toolkit'
import { applicationsSlices } from './slices/applicationsSlices'
// eslint-disable-next-line import/no-named-as-default
import authSlices from './slices/authSlices'

const store = configureStore({
   reducer: {
      auth: authSlices.reducer,
      applications: applicationsSlices.reducer,
   },
})

export default store
