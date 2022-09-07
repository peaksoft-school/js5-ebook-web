import { configureStore } from '@reduxjs/toolkit'
import { addBookSlice } from './slices/addBookSlice'
import authSlices from './slices/authSlices'
import { vendorbookInnerPageSlice } from './slices/vendorBookInnerPageSlice'
import PromocodeSlices from './slices/promocodeSlices'
import globalValues from './slices/globalSlices'
import UserProfileSlice from './slices/userProfileSlice'

const store = configureStore({
   reducer: {
      auth: authSlices.reducer,
      globalValues: globalValues.reducer,
      addbook: addBookSlice.reducer,
      vendorBookInnerPage: vendorbookInnerPageSlice.reducer,
      promocodeStore: PromocodeSlices.reducer,
      userProfile: UserProfileSlice.reducer,
   },
})

export default store
