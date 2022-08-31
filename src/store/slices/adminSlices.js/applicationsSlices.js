import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   status: null,
   error: null,
   applications: [],
}

const applicationsSlices = createSlice({
   name: 'applications',
   initialState,
   reducers: {
      getApplications(state, action) {
         state.applications = action.payload
      },
   },
})

export const applicationActions = applicationsSlices.actions
export default applicationsSlices
