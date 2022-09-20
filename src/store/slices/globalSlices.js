import { createSlice } from '@reduxjs/toolkit'
import appFetch from '../../hooks/appFetch'
import { sortRequestApplic } from '../../utils/helpers/helpers'

const initialState = {
   genres: '',
   books: [],
   sortGenres: '',
   globalSearch: [],
   totalElements: null,
   totalPages: null,
   status: null,
}

const globalValues = createSlice({
   name: 'globalValues',
   initialState,
   reducers: {
      setGlobalSearch: (state, action) => {
         state.globalSearch = action.payload
      },
      setGenres: (state, action) => {
         state.genres = action.payload
      },
      setBooks: (state, action) => {
         state.books = action.payload.content
         state.totalElements = action.payload.totalElements
         state.totalPages = action.payload.totalPages
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
      error: (state) => {
         state.status = 'error'
      },
      success: (state) => {
         state.status = 'fulfilled'
      },
      pending(state) {
         state.status = 'pending'
      },
   },
})

export const globalValuesAction = globalValues.actions

export default globalValues

export function getGlobalSearch(requestObj) {
   return async (dispatch) => {
      const result = await appFetch({
         url: `/api/books/search?search=${requestObj}`,
      })
      dispatch(globalValuesAction.setGlobalSearch(result))
   }
}

export function updateSortGenres(value) {
   return async (dispatch) => {
      dispatch(globalValuesAction.pending())
      const response = await appFetch({
         url: `/api/books/search?search=${value}`,
      })
      dispatch(globalValuesAction.updateSortGenres(response))
      dispatch(globalValuesAction.success())
   }
}

export function setBooks(request) {
   return async (dispatch) => {
      dispatch(globalValuesAction.pending())
      const books = await appFetch({
         url: `/api/admin/books${sortRequestApplic(request)}`,
      })
      dispatch(globalValuesAction.setBooks(books))
      dispatch(globalValuesAction.success())
   }
}

export function setGenres() {
   return async (dispatch) => {
      dispatch(globalValuesAction.pending())
      const genres = await appFetch({
         url: '/api/genres',
      })
      dispatch(globalValuesAction.setGenres(genres))
      dispatch(globalValuesAction.success())
   }
}
