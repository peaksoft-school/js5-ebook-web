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
      getApplications(state, action) {
         action.payload.forEach((element) => {
            const prev = state.applications.find((el) => el.id === element.id)
            if (!prev) {
               state.applications.push(element)
            }
         })
      },
      getTotalElements(state, action) {
         state.totalElements = action.payload
      },
      getUnwatched(state, action) {
         state.unwatched = action.payload
      },
      getTotalPages(state, action) {
         state.totalPages = action.payload
      },
      postAcceptApplication(state, action) {
         state.acceptMessage = action.payload
      },
      postRejectApplication(state, action) {
         console.log(action.payload)
         state.rejectMessage = action.payload
      },
      cleanAccept(state) {
         state.acceptMessage = null
      },
      cleanReject(state) {
         state.rejectMessage = null
      },
      getApplicationId(state, action) {
         console.log(action.payload)
         state.getId = action.payload
      },
   },
})

export const applicationSlicesActions = applicationsSlices.actions
export default applicationsSlices
