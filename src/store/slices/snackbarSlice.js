import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   snackbarMessage: null,
   snackbarStatus: '',
   stateSnackbar: null,
}
export const snackbarSlice = createSlice({
   name: 'snackbar',
   initialState,
   reducers: {
      snackbarPending(state) {
         state.snackbarStatus = 'pending'
      },
      snackbarSuccess(state, action) {
         // console.log(action.payload)
         state.snackbarStatus = 'success'
         state.snackbarMessage = action.payload
      },
      snackbarFalse(state, action) {
         state.snackbarMessage = action.payload
         state.snackbarStatus = 'error'
      },
      notSnackbar(state) {
         state.snackbarStatus = ''
         state.stateSnackbar = ''
         state.snackbarMessage = ''
      },
      success(state) {
         state.stateSnackbar = true
      },
      error(state) {
         state.stateSnackbar = false
      },
   },
})

const snackbarAction = snackbarSlice.actions
export default snackbarAction
