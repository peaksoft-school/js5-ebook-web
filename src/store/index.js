import { configureStore } from '@reduxjs/toolkit'
// eslint-disable-next-line import/no-named-as-default
import { addBookSlice } from './slices/addBookSlice'
import { applicationsInnerPageSlices } from './slices/adminSlices/applicationInnerPagesSlices'
import applicationsSlices from './slices/adminSlices/applicationsSlices'
import spinnerSlice from './slices/adminSlices/SpinnerSlice'
import authSlices from './slices/authSlices'
import globalValues from './slices/genres'
import uiSlices from './slices/uiSlices'

const store = configureStore({
   reducer: {
      auth: authSlices.reducer,
      globalValues: globalValues.reducer,
      addbook: addBookSlice.reducer,
      applications: applicationsSlices.reducer,
      uiSlice: uiSlices.reducer,
      applicationsInnerPage: applicationsInnerPageSlices.reducer,
      spinner: spinnerSlice.reducer,
   },
})

export default store
