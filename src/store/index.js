import { configureStore } from '@reduxjs/toolkit'
import { applicationsSlices } from './slices/applicationsSlices'
// eslint-disable-next-line import/no-named-as-default
import authSlices from './slices/authSlices'
import globalValues from './slices/genres'

const store = configureStore({
   reducer: {
      auth: authSlices.reducer,
      applications: applicationsSlices.reducer,
      globalValues: globalValues.reducer,
   },
})

export default store
