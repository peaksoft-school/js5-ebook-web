import { createSlice } from '@reduxjs/toolkit'
import appFetch from '../../hooks/appFetch'
// import appFetch from '../../hooks/appFetch'

const initialState = {
   books: {
      favoriteBooksResponses: null,
      bestsellerBooksResponses: null,
   },
   message: null,
   status: null,
}

const mainPageSlices = createSlice({
   name: 'mainPageSlices',
   initialState,
   reducers: {
      setMessage: (state, action) => {
         state.message = action.payload
      },
      setBooks: (state, action) => {
         state.books = { ...action.payload }
      },
   },
})

export const mainPageActions = mainPageSlices.actions

export default mainPageSlices

export const getBookMainPage = () => {
   return async (dispatch) => {
      const result = await appFetch({
         url: '/api/users/mainPage',
      })
      console.log(result)
      dispatch(mainPageActions.setBooks(result))
   }
}

// export const postEmail = (email) => {
//    return async () => {
//       const result = appFetch({
//          url: '',
//       })
//    }
// }
