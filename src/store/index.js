import { configureStore } from '@reduxjs/toolkit'
import { addBookSlice } from './slices/addBookSlice'
import applicationsInnerPageSlices from './slices/applicationInnerPagesSlices'
import applicationsSlices from './slices/adminSlices/applicationsSlices'
import authSlices from './slices/authSlices'
import uiSlices from './slices/uiSlices'
import { vendorbookInnerPageSlice } from './slices/vendorBookInnerPageSlice'
import PromocodeSlices from './slices/promocodeSlices'
import globalValues from './slices/globalSlices'
import { vendorMainPageSlice } from './slices/vendorMainPageSlice'
import { snackbarSlice } from './slices/snackbarSlice'
import сatalogSlices from './slices/catalogSlice'
import userInnerPageSlices from './slices/userInnerPageSlices'

const store = configureStore({
   reducer: {
      auth: authSlices.reducer,
      globalValues: globalValues.reducer,
      addbook: addBookSlice.reducer,
      applicationsInnerPage: applicationsInnerPageSlices.reducer,
      applications: applicationsSlices.reducer,
      uiSlice: uiSlices.reducer,
      books: сatalogSlices.reducer,
      vendorBookInnerPage: vendorbookInnerPageSlice.reducer,
      vendorMainPage: vendorMainPageSlice.reducer,
      promocodeStore: PromocodeSlices.reducer,
      snackbar: snackbarSlice.reducer,
      userBook: userInnerPageSlices.reducer,
   },
})

export default store
