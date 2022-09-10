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
         state.applications = action.payload
      },
      // getApplications(state, action) {
      //    const updatedApplications = []

      //    action.payload.array.forEach((newApplicationn) => {
      //       const isNew = state.applications.find(
      //          (oldApplication) =>
      //             oldApplication.id === newApplicationn.id &&
      //             oldApplication.enabled !== newApplicationn.enabled
      //       )
      //       if (!isNew) {
      //          updatedApplications.push(newApplicationn)
      //       }
      //    })

      //    state.applications = updatedApplications
      // },bul ishtebedi

      seeMoreGetApplications(state, action) {
         action.payload.forEach((element) => {
            const prev = state.applications.find((el) => el.id === element.id)
            if (!prev) {
               state.applications.push(element)
            }
         })
      },
      setTotalElements(state, action) {
         state.totalElements = action.payload
      },
      setUnwatched(state, action) {
         state.unwatched = action.payload
      },
      setTotalPages(state, action) {
         state.totalPages = action.payload
      },
      postAcceptApplication(state, action) {
         state.acceptMessage = action.payload
      },
      postRejectApplication(state, action) {
         state.rejectMessage = action.payload
      },
      getApplicationId(state, action) {
         state.getId = action.payload
      },
   },
})

export const applicationSlicesActions = applicationsSlices.actions
export default applicationsSlices
