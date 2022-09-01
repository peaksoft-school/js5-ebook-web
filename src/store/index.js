import { configureStore } from '@reduxjs/toolkit'
import { addBookSlice } from './slices/addBookSlice'
import authSlices from './slices/authSlices'
import { vendorbookInnerPageSlice } from './slices/vendorBookInnerPageSlice'

const store = configureStore({
   reducer: {
      auth: authSlices.reducer,
      addbook: addBookSlice.reducer,
      vendorBookInnerPage: vendorbookInnerPageSlice.reducer,
   },
})

export default store
