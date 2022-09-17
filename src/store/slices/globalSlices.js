import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'
import appFetch from '../../hooks/appFetch'
import { sortRequestApplic } from '../../utils/helpers/helpers'

const initialState = {
   genres: '',
   books: [],
   sortGenres: '',
   blockMessage: '',
   totalElements: null,
   totalPages: null,
}

const globalValues = createSlice({
   name: 'globalValues',
   initialState,
   reducers: {
      setGenres: (state, action) => {
         state.genres = action.payload
      },
      setBooks: (state, action) => {
         action.payload.forEach((element) => {
            const prev = state.books.find((el) => el.id === element.id)
            if (!prev) {
               state.books.push(element)
            }
         })
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
      getBlockMessage: (state, action) => {
         state.blockMessage = action.payload
      },
      setTotalElements(state, action) {
         state.totalElements = action.payload
      },
      setTotalPages(state, action) {
         state.totalPages = action.payload
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
      const genres = await appFetch({
         url: '/api/genres',
      })
      dispatch(globalValuesAction.setGenres(genres))
   }
}
export function blockBookAction(id, onClose) {
   return async (dispatch) => {
      try {
         const books = await appFetch({
            url: '',
         })
         dispatch(globalValuesAction.getBlockMessage(books))
         onClose()
         toast.success(books.message)
         return books
      } catch (error) {
         toast.error('Не удалось блокироват!')
         return error
      }
   }
}
