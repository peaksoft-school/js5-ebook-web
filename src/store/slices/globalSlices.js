import { createSlice } from '@reduxjs/toolkit'
import appFetch from '../../hooks/appFetch'
import { sortRequestApplic } from '../../utils/helpers/helpers'

const initialState = {
   genres: '',
   books: '',
   sortGenres: '',
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
      updateSortGenres: (state, action) => {
         const arr = action.payload.filter((el) => el.searchType === 'GENRE')
         state.sortGenres = arr.map((el) => {
            return {
               ...el,
               name: el.search,
            }
         })
      },
   },
})

export const globalValuesAction = globalValues.actions

export default globalValues

export function updateSortGenres(value) {
   return async (dispatch) => {
      const response = await appFetch({
         url: `/api/books/search?search=${value}`,
      })
      dispatch(globalValuesAction.updateSortGenres(response))
   }
}

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
