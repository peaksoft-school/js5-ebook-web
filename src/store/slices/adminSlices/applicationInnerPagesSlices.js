import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   application: {},
   acceptMessage: null,
   rejectMessage: null,
   status: null,
   blockMessage: '',
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
      error(state) {
         state.status = 'error'
      },
      success(state) {
         state.status = 'fulfilled'
      },
      pending(state) {
         state.status = 'pending'
      },
      getBlockMessage: (state, action) => {
         state.blockMessage = action.payload
         state.status = 'fulfilled'
      },
   },
})
export const applicationsInnerPageSlicesAction =
   applicationsInnerPageSlices.actions
export default applicationsInnerPageSlices
