import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   deleteImage: false,
   addBookStatus: '',
   addBookMessage: '',
}
export const addBookSlice = createSlice({
   name: 'addbook',
   initialState,
   reducers: {
      deleteImage(state) {
         state.deleteImage = !state.deleteImage
      },
      statusSuccess(state, action) {
         state.addBookStatus = 'success'
         state.addBookMessage = action.payload
      },
      statusError(state, action) {
         state.addBookStatus = 'error'
         state.addBookMessage = action.payload
      },
      statusPending(state) {
         state.addBookStatus = 'pending'
      },
      cleanStatusMessage(state) {
         state.addBookMessage = ''
         state.addBookStatus = ''
      },
   },
})

const bookAction = addBookSlice.actions
export default bookAction
