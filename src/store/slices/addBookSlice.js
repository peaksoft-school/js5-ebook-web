import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   bookContainer: [],
   array: [],
   deleteImage: false,
   jenreId: [
      { name: 'Художественнная лит...', id: 1 },
      { name: 'Общество', id: 4 },
      { name: 'Книги для детей ', id: 2 },
      { name: 'Наука и техника', id: 3 },
      { name: 'Деловая литература', id: 5 },
      { name: 'Красота. Здоровье.Спорт ', id: 6 },
   ],
}
export const addBookSlice = createSlice({
   name: 'addbook',
   initialState,
   reducers: {
      deleteImage(state) {
         state.deleteImage = !state.deleteImage
      },
      // bookFromFetch(state, action) {
      // },
      saveBooks(state, action) {
         state.array = action.payload
      },
      // genreId(state) {
      // },
   },
})

const bookAction = addBookSlice.actions
export default bookAction
