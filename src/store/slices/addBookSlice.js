import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   bookContainer: [],
   deleteImage: false,
}
export const addBookSlice = createSlice({
   name: 'addbook',
   initialState,
   reducers: {
      addBook(state, action) {
         const values = action.payload
         if (values.typeBook === 'paperbook') {
            state.bookContainer.push({
               bookname: values.bookname,
               author: values.author,
               genre: values.genre,
               publish: values.publish,
               aboutbook: values.aboutbook,
               fragment: values.fragment,
               language: values.language,
               data: values.data,
               size: values.size,
               amount: values.amount,
               price: values.price,
               discount: values.discount,
               images: values.images,
            })
         }
         if (values.typeBook === 'audiobook') {
            state.bookContainer.push({
               bookname: values.bookname,
               author: values.author,
               genre: values.genre,
               aboutbook: values.aboutbook,
               language: values.language,
               data: values.data,
               duration: values.duration,
               minute: values.minute,
               second: values.second,
               price: values.price,
               discount: values.discount,
               audioValues: values.audioValues,
            })
         }
         if (values.typeBook === 'electronicbook') {
            state.bookContainer.push({
               bookname: values.bookname,
               author: values.author,
               genre: values.genre,
               publish: values.publish,
               aboutbook: values.aboutbook,
               fragment: values.fragment,
               language: values.language,
               data: values.data,
               size: values.size,
               price: values.price,
               images: values.images,
            })
         }
      },
      deleteImage(state) {
         state.deleteImage = !state.deleteImage
      },
   },
})

const bookAction = addBookSlice.actions
export default bookAction
