import { createSlice } from '@reduxjs/toolkit'
import appFetch from '../../hooks/AppFetch'
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
      const books = appFetch({
         url: `/api/books${sortRequestApplic(request)}`,
      })
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
