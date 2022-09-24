import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   vendorBooks: [],
   totalElements: 0,
   paperBooks: null,
   audioBooks: null,
   electronicBooks: null,
   allBooks: null,
   bookType: null,
   status: null,
   clearInputs: false,
}
export const vendorMainPageSlice = createSlice({
   name: 'vendorMainPage',
   initialState,
   reducers: {
      // save book
      saveBook(state, action) {
         state.totalElements = action.payload.totalElements
         if (action.payload) {
            state.vendorBooks = action.payload.content
         } else {
            state.vendorBooks = ''
         }
      },
      clearSaveBook(state) {
         state.paperBooks = ''
         state.audioBooks = ''
         state.electronicBooks = ''
         state.allBooks = ''
         state.vendorBooks = ''
         state.clearInputs = true
      },
      unClearBook(state) {
         state.clearInputs = false
      },

      success(state) {
         state.status = 'success'
      },
      errorResult(state) {
         state.status = 'rejected'
      },
      pending(state) {
         state.status = 'pending'
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
   },
})

const vendorMainPageAction = vendorMainPageSlice.actions
export default vendorMainPageAction
