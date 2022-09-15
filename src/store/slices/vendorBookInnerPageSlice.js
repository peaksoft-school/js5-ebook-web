import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   deleteBook: false,
   message: '',
   status: '',
   error: null,
   book: {},
}

export const vendorbookInnerPageSlice = createSlice({
   name: 'innerPage',
   initialState,
   reducers: {
      getBook(state, action) {
         state.book = action.payload
      },
      success(state) {
         state.status = 'fulfilled'
      },
      rejected(state, action) {
         state.status = 'rejected'
         state.error = action.payload
      },
      deleteBook(state, action) {
         state.deleteBook = true
         state.message = action.payload
      },
      falseDelete(state) {
         state.deleteBook = false
      },
   },
})

const bookInnerPageAction = vendorbookInnerPageSlice.actions
export default bookInnerPageAction
