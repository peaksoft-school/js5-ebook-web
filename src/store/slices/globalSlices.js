import { createSlice } from '@reduxjs/toolkit'
import appFetch from '../../hooks/appFetch'
import { sortRequestApplic } from '../../utils/helpers/helpers'

const initialState = {
   genres: '',
   books: '',
}

const globalValues = createSlice({
   name: 'globalValues',
   initialState,
   reducers: {
      setGenres: (state, action) => {
         state.genres = action.payload
      },
      setBooks: (state, action) => {
         state.books = action.payload
      },
   },
})

export const globalValuesAction = globalValues.actions

export default globalValues

export function setBooks(request) {
   return async (dispatch) => {
      console.log(request)
      const books = await appFetch({
         url: `/api/admin/books${sortRequestApplic(request)}`,
      })
      console.log(books.content)
      dispatch(globalValuesAction.setBooks(books))
   }
}

export function setGenres() {
   return async (dispatch) => {
      const genres = await appFetch({
         url: '/api/genres',
      })
      dispatch(globalValuesAction.setGenres(genres))
   }
}
