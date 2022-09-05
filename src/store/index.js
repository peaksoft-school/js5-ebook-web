import { configureStore } from '@reduxjs/toolkit'
import { addBookSlice } from './slices/addBookSlice'
import authSlices from './slices/authSlices'
import { vendorbookInnerPageSlice } from './slices/vendorBookInnerPageSlice'
import PromocodeSlices from './slices/promocodeSlices'
import globalValues from './slices/globalSlices'
import сatalogSlices from './slices/catalogSlice'

const store = configureStore({
   reducer: {
      auth: authSlices.reducer,
      addbook: addBookSlice.reducer,
      globalValues: globalValues.reducer,
      books: сatalogSlices.reducer,
      vendorBookInnerPage: vendorbookInnerPageSlice.reducer,
      promocodeStore: PromocodeSlices.reducer,
   },
})

export default store
