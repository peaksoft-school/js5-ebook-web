import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   application: {},
   acceptMessage: null,
   rejectMessage: null,
   status: null,
   error: null,
}

const applicationsInnerPageSlices = createSlice({
   name: 'getApplications',
   initialState,
   reducers: {
      getInnerPage(state, action) {
         state.application = action.payload
         state.status = 'fulfilled'
      },
      postAcceptApplication(state, action) {
         state.acceptMessage = action.payload
         state.status = 'fulfilled'
      },
      postRejectApplication(state, action) {
         state.rejectMessage = action.payload
         state.status = 'fulfilled'
      },
      pending(state) {
         state.status = 'pending'
      },
   },
})
export const applicationsInnerPageSlicesAction =
   applicationsInnerPageSlices.actions
export default applicationsInnerPageSlices
