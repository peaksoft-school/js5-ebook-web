import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   deleteImage: false,
   status: null,
   error: null,
   jenreId: [
      { name: 'Художественнная лит...', id: 1 },
      { name: 'Общество', id: 4 },
      { name: 'Книги для детей ', id: 2 },
      { name: 'Наука и техника', id: 3 },
      { name: 'Деловая литература', id: 5 },
      { name: 'Красота. Здоровье.Спорт ', id: 6 },
   ],
   array: [],
}
export const addBookSlice = createSlice({
   name: 'addbook',
   initialState,
   reducers: {
      deleteImage(state) {
         state.deleteImage = !state.deleteImage
      },
      statusSuccess(state, action) {
         state.status = 'fulfilled'
         state.user = action.payload
      },
      statusError(state, action) {
         state.error = action.payload
      },
      saveBook(state, action) {
         state.array = action.payload
      },
   },
})

const bookAction = addBookSlice.actions
export default bookAction
