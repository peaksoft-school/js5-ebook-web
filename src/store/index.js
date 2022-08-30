import { configureStore } from '@reduxjs/toolkit'
import { addBookSlice } from './slices/addBookSlice'
import { applicationsInnerPageSlices } from './slices/applicationInnerPagesSlices'
import authSlices from './slices/authSlices'

const store = configureStore({
   reducer: {
      auth: authSlices.reducer,
      addbook: addBookSlice.reducer,
      applicationsInnerPage: applicationsInnerPageSlices.reducer,
   },
})

export default store
