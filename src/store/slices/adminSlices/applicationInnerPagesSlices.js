import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   application: {},
   acceptMessage: null,
   rejectMessage: null,
   status: null,
}

const applicationsInnerPageSlices = createSlice({
   name: 'getApplications',
   initialState,
   reducers: {
      pending: (state) => {
         state.status = 'pending'
      },
      rejected: (state) => {
         state.status = 'error'
      },
      success: (state) => {
         state.status = 'success'
      },
      getInnerPage(state, action) {
         state.application = action.payload
      },
      postAcceptApplication(state, action) {
         state.acceptMessage = action.payload
      },
      postRejectApplication(state, action) {
         state.rejectMessage = action.payload
      },
   },
})
export const applicationsInnerPageSlicesAction =
   applicationsInnerPageSlices.actions
export default applicationsInnerPageSlices
