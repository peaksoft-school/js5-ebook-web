import { configureStore } from '@reduxjs/toolkit'
// eslint-disable-next-line import/no-named-as-default
import { addBookSlice } from './slices/addBookSlice'
import applicationsSlices from './slices/adminSlices/applicationsSlices'
import authSlices from './slices/authSlices'
import uiSlices from './slices/uiSlices'
import { vendorbookInnerPageSlice } from './slices/vendorBookInnerPageSlice'
import PromocodeSlices from './slices/promocodeSlices'
import globalValues from './slices/globalSlices'

const store = configureStore({
   reducer: {
      auth: authSlices.reducer,
      globalValues: globalValues.reducer,
      addbook: addBookSlice.reducer,
      applications: applicationsSlices.reducer,
      uiSlice: uiSlices.reducer,
      vendorBookInnerPage: vendorbookInnerPageSlice.reducer,
      promocodeStore: PromocodeSlices.reducer,
   },
})

export default store
