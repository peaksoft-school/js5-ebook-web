import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   deleteImage: false,
   status: null,
   message: '',
}
export const addBookSlice = createSlice({
   name: 'addbook',
   initialState,
   reducers: {
      deleteImage(state) {
         state.deleteImage = !state.deleteImage
      },
      statusSuccess(state) {
         state.status = 'success'
         state.message = 'Ваш запрос был успешно отправлен!'
      },
      statusError(state) {
         state.status = 'error'
         state.message = 'Что то пошла не так!'
      },
   },
})

const bookAction = addBookSlice.actions
export default bookAction
