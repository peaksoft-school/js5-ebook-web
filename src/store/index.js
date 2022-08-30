import { configureStore } from '@reduxjs/toolkit'
import { applicationsInnerPageSlices } from './slices/applicationInnerPagesSlices'

// eslint-disable-next-line import/no-named-as-default
import { addBookSlice } from './slices/addBookSlice'
import authSlices from './slices/authSlices'
import globalValues from './slices/genres'

const store = configureStore({
   reducer: {
      auth: authSlices.reducer,
      applicationsInnerPage: applicationsInnerPageSlices.reducer,
      globalValues: globalValues.reducer,
      addbook: addBookSlice.reducer,
   },
})

export default store
