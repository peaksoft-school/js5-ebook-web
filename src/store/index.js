import { configureStore } from '@reduxjs/toolkit'
import { addBookSlice } from './slices/addBookSlice'
import authSlices from './slices/authSlices'

const store = configureStore({
   reducer: {
      auth: authSlices.reducer,
      addbook: addBookSlice.reducer,
   },
})

export default store
