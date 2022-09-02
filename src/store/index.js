import { configureStore } from '@reduxjs/toolkit'
import { addBookSlice } from './slices/addBookSlice'
import applicationsInnerPageSlices from './slices/applicationInnerPagesSlices'
import authSlices from './slices/authSlices'
import { vendorbookInnerPageSlice } from './slices/vendorBookInnerPageSlice'
import PromocodeSlices from './slices/promocodeSlices'
import globalValues from './slices/globalSlices'

const store = configureStore({
   reducer: {
      auth: authSlices.reducer,
      globalValues: globalValues.reducer,
      addbook: addBookSlice.reducer,
      applicationsInnerPage: applicationsInnerPageSlices.reducer,
      vendorBookInnerPage: vendorbookInnerPageSlice.reducer,
      promocodeStore: PromocodeSlices.reducer,
   },
})

export default store
