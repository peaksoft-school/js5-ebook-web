import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   status: null,
   error: null,
   applications: [],
   totalElements: 0,
   totalPages: null,
   unwatched: null,
   acceptMessage: null,
   rejectMessage: null,
   getId: null,
}

const applicationsSlices = createSlice({
   name: 'applications',
   initialState,
   reducers: {
      pending: (state) => {
         state.status = 'pending'
      },
      success: (state) => {
         state.status = 'success'
      },
      rejected: (state) => {
         state.status = 'error'
      },
      getApplications(state, action) {
         state.applications = action.payload
      },
      seeMoreGetApplications(state, action) {
         action.payload.forEach((element) => {
            const prev = state.applications.find((el) => el.id === element.id)
            if (!prev) {
               state.applications.push(element)
            }
         })
         state.status = 'fulfilled'
      },
      getTotalElements(state, action) {
         state.totalElements = action.payload
         state.status = 'fulfilled'
      },
      getUnwatched(state, action) {
         state.unwatched = action.payload
         state.status = 'fulfilled'
      },
      getTotalPages(state, action) {
         state.totalPages = action.payload
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
      getApplicationId(state, action) {
         state.getId = action.payload
         state.status = 'fulfilled'
      },
   },
})

export const applicationSlicesActions = applicationsSlices.actions
export default applicationsSlices
