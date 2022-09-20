import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   stateSnackbar: null,
   bookSuccsess: '',
   bookError: '',
}
export const snackbarSlice = createSlice({
   name: 'snackbar',
   initialState,
   reducers: {
      snackbarSuccess(state) {
         state.bookSuccsess = 'Ваш запрос был успешно отправлен!'
      },
      notSnackbar(state) {
         state.bookError = ''
         state.bookSuccsess = ''
      },
      snackbarFalse(state, action) {
         state.bookError = action.payload
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
