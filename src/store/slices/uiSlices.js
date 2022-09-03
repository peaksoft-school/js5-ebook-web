import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   snakbar: false,
}
const uiSlices = createSlice({
   name: 'uiSlice',
   initialState,
   reducers: {
      uiApplications(state) {
         state.snakbar = !state.snakbar
      },
   },
})

export const uiSlicesSlicesActions = uiSlices.actions
export default uiSlices
