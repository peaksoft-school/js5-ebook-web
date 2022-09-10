import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'
import appFetch from '../../hooks/appFetch'
import { sortRequestApplic } from '../../utils/helpers/helpers'

const initialState = {
   genres: '',
   books: '',
   sortGenres: '',
   deleteMessage: '',
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
      getDeleteMessage: (state, action) => {
         state.deleteMessage = action.payload
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
export function deleteBookAction(id) {
   return async (dispatch) => {
      try {
         const books = await appFetch({
            url: `/api/book/delete/${id}`,
            method: 'DELETE',
         })
         console.log(books)
         dispatch(globalValuesAction.getDeleteMessage(books))
         toast.success(books.message)
         return books
      } catch (error) {
         toast.error('Не удалось удалить!')
         return error
      }
   }
}
