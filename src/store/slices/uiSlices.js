import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   snackbar: true,
   rejectModal: false,
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
      showRejectModal(state) {
         state.rejectModal = true
      },
      hideRejectModal(state) {
         state.rejectModal = false
      },
   },
})

export const uiSlicesSlicesActions = uiSlices.actions
export default uiSlices
