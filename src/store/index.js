import { configureStore } from '@reduxjs/toolkit'
import { addBookSlice } from './slices/addBookSlice'
import applicationsInnerPageSlices from './slices/adminSlices/applicationInnerPagesSlices'
import applicationsSlices from './slices/adminSlices/applicationsSlices'
import authSlices from './slices/authSlices'
import uiSlices from './slices/uiSlices'
import { vendorbookInnerPageSlice } from './slices/vendorBookInnerPageSlice'
import PromocodeSlices from './slices/promocodeSlices'
import globalValues from './slices/globalSlices'
import UserProfileSlice from './slices/userProfileSlice'
import VendorProfileSlice from './slices/ProfileVendorSlice'
import { getAdminVendorsSlice } from './slices/getAdminVendorsSlice'
import { vendorMainPageSlice } from './slices/vendorMainPageSlice'
import { snackbarSlice } from './slices/snackbarSlice'
import сatalogSlices from './slices/catalogSlice'
import { notificationsSlise } from './slices/notificationSlice'
import { getAdminUsersSlice } from './slices/getAdminUsersSlices'
import userInnerPageSlices from './slices/userInnerPageSlices'
import mainPageSlices from './slices/mainPageSlices'

const store = configureStore({
   reducer: {
      auth: authSlices.reducer,
      mainPage: mainPageSlices.reducer,
      globalValues: globalValues.reducer,
      addbook: addBookSlice.reducer,
      applicationsInnerPage: applicationsInnerPageSlices.reducer,
      applications: applicationsSlices.reducer,
      uiSlice: uiSlices.reducer,
      books: сatalogSlices.reducer,
      vendorBookInnerPage: vendorbookInnerPageSlice.reducer,
      vendorMainPage: vendorMainPageSlice.reducer,
      promocodeStore: PromocodeSlices.reducer,
      userProfile: UserProfileSlice.reducer,
      vendorProfile: VendorProfileSlice.reducer,
      adminVendors: getAdminVendorsSlice.reducer,
      snackbar: snackbarSlice.reducer,
      notifications: notificationsSlise.reducer,
      adminUsers: getAdminUsersSlice.reducer,
      userBook: userInnerPageSlices.reducer,
   },
})

export default store
