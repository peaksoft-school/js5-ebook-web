import { configureStore } from '@reduxjs/toolkit'
import { addBookSlice } from './slices/addBookSlice'
import authSlices from './slices/authSlices'
import PromocodeSlices from './slices/promocodeSlices'
import globalValues from './slices/globalSlices'

const store = configureStore({
   reducer: {
      auth: authSlices.reducer,
      globalValues: globalValues.reducer,
      addbook: addBookSlice.reducer,
      promocodeStore: PromocodeSlices.reducer,
   },
})

export default store
