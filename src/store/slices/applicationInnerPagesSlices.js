import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   application: {},
   message: {},
}

const applicationsInnerPageSlices = createSlice({
   name: 'getApplications',
   initialState,
   reducers: {
      getInnerPage(state, action) {
         state.application = action.payload
      },
      acceptApplication(state, action) {
         state.message = action.payload
      },
   },
})
export const applicationsInnerPageSlicesAction =
   applicationsInnerPageSlices.actions
export default applicationsInnerPageSlices
