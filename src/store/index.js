import { configureStore } from '@reduxjs/toolkit'
import { addBookSlice } from './slices/addBookSlice'

const store = configureStore({
   reducer: {
      addbook: addBookSlice.reducer,
   },
})
export default store
