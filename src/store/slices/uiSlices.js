import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   snackbar: false,
}
const uiSlices = createSlice({
   name: 'uiSlice',
   initialState,
   reducers: {
      showSnackbar(state) {
         state.snackbar = true
      },
      hideSnackbar(state) {
         state.snackbar = false
      },
   },
})

export const uiSlicesSlicesActions = uiSlices.actions
export default uiSlices
