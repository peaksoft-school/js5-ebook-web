import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   vendorBooks: [],
   paperBooks: null,
   audioBooks: null,
   electronicBooks: null,
   allBooks: null,
   isValid: true,
   bookType: null,
   status: null,
   boolean: null,
}
export const vendorMainPageSlice = createSlice({
   name: 'vendorMainPage',
   initialState,
   reducers: {
      // save book
      saveBook(state, action) {
         state.vendorBooks = action.payload
      },

      updateValid(state) {
         state.isValid = !state.isValid
      },

      // status VendormainPage
      success(state) {
         state.status = 'success'
         state.boolean = true
      },
      errorResult(state, action) {
         state.status = 'rejected'
         state.boolean = action.payload
      },

      // type books withId
      findBookWithId(state, action) {
         const typeBook = action.payload.bookType
         if (typeBook === 'PAPER_BOOK') {
            state.paperBooks = action.payload
         } else {
            state.paperBooks = ''
         }
         if (typeBook === 'AUDIO_BOOK') {
            state.audioBooks = action.payload
         } else {
            state.audioBooks = ''
         }
         if (typeBook === 'ELECTRONIC_BOOK') {
            state.electronicBooks = action.payload
         } else {
            state.electronicBooks = ''
         }
         state.allBooks = action.payload
      },

      bookType(state, action) {
         if (action.payload.bookType === 'PAPER_BOOK') {
            state.bookType = 'Бумажная'
         }
         if (action.payload.bookType === 'ELECTRONIC_BOOK') {
            state.bookType = 'Электронная книга'
         }
         if (action.payload.bookType === 'AUDIO_BOOK') {
            state.bookType = 'Аудиокнига'
         }
      },
   },
})

const vendorMainPageAction = vendorMainPageSlice.actions
export default vendorMainPageAction
