import { configureStore } from '@reduxjs/toolkit'
import { addBookSlice } from './slices/addBookSlice'
import { applicationsSlices } from './slices/applicationsSlices'
// eslint-disable-next-line import/no-named-as-default
import authSlices from './slices/authSlices'
import globalValues from './slices/globalSlices'
import сatalogSlices from './slices/catalogSlice'

const store = configureStore({
   reducer: {
      auth: authSlices.reducer,
      addbook: addBookSlice.reducer,
      applications: applicationsSlices.reducer,
      globalValues: globalValues.reducer,
      books: сatalogSlices.reducer,
   },
})

export default store
