import { configureStore } from '@reduxjs/toolkit'
// eslint-disable-next-line import/no-named-as-default
import { addBookSlice } from './slices/addBookSlice'
import authSlices from './slices/authSlices'
import globalValues from './slices/genres'

const store = configureStore({
   reducer: {
      auth: authSlices.reducer,
      globalValues: globalValues.reducer,
      addbook: addBookSlice.reducer,
   },
})

export default store
