import { createSlice } from '@reduxjs/toolkit'
import appFetch from '../../hooks/appFetch'
import { sortRequestApplic } from '../../utils/helpers/helpers'

const initialState = {
   genres: '',
   books: [],
   sortGenres: '',
   totalElements: null,
   totalPages: null,
   status: null,
}

const globalValues = createSlice({
   name: 'globalValues',
   initialState,
   reducers: {
      setGenres: (state, action) => {
         state.genres = action.payload
         state.status = 'fulfilled'
      },
      setBooks: (state, action) => {
         action.payload.forEach((element) => {
            const prev = state.books.find((el) => el.id === element.id)
            if (!prev) {
               state.books.push(element)
            }
         })
         state.status = 'fulfilled'
      },
      updateSortGenres: (state, action) => {
         const arr = action.payload.filter((el) => el.searchType === 'GENRE')
         state.sortGenres = arr.map((el) => {
            return {
               ...el,
               name: el.search,
            }
         })
         state.status = 'fulfilled'
      },

      setTotalElements(state, action) {
         state.totalElements = action.payload
         state.status = 'fulfilled'
      },
      setTotalPages(state, action) {
         state.totalPages = action.payload
         state.status = 'fulfilled'
      },
      pending(state) {
         state.status = 'pending'
      },
   },
})

export const globalValuesAction = globalValues.actions

export default globalValues

export function updateSortGenres(value) {
   return async (dispatch) => {
      dispatch(globalValuesAction.pending())
      const response = await appFetch({
         url: `/api/books/search?search=${value}`,
      })
      dispatch(globalValuesAction.updateSortGenres(response))
   }
}

export function setBooks(request) {
   return async (dispatch) => {
      dispatch(globalValuesAction.pending())
      const books = await appFetch({
         url: `/api/admin/books${sortRequestApplic(request)}`,
      })
      dispatch(globalValuesAction.setBooks(books.content))
      dispatch(globalValuesAction.setTotalElements(books.totalElements))
      dispatch(globalValuesAction.setTotalPages(books.totalPages))
   }
}

export function setGenres() {
   return async (dispatch) => {
      dispatch(globalValuesAction.pending())
      const genres = await appFetch({
         url: '/api/genres',
      })
      dispatch(globalValuesAction.setGenres(genres))
   }
}
