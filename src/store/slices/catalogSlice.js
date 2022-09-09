import { createSlice } from '@reduxjs/toolkit'
import appFetch from '../../hooks/appFetch'
import { sortRequestApplic } from '../../utils/helpers/helpers'

const initialState = {
   books: [],
   totalBooks: 0,
   totalPages: 0,
   status: null,
   error: null,
}

const сatalogSlices = createSlice({
   initialState,
   name: 'CatalogSlices',
   reducers: {
      getBooks: (state, action) => {
         state.books = action.payload.content
         state.totalBooks = action.payload.totalElements
         state.totalPages = action.payload.totalPages
      },
      updateBooks: (state, action) => {
         action.payload.content.forEach((el) => {
            const prevElem = state.books.find((elem) => elem.id === el.id)
            if (!prevElem) {
               state.books.push(el)
            }
         })
      },
      rejected: (state, action) => {
         state.error = action.payload
      },
      cleanError: (state) => {
         state.error = null
      },
   },
})

export const сatalogActions = сatalogSlices.actions
export default сatalogSlices

export const getBooks = (request) => {
   return async (dispatch) => {
      try {
         const result = await appFetch({
            url: `/api/books${sortRequestApplic(request)}`,
         })
         dispatch(сatalogActions.getBooks(result))
      } catch (error) {
         dispatch(сatalogActions.rejected(error))
      }
   }
}

export const updateBooks = (request) => {
   return async (dispatch) => {
      try {
         const result = await appFetch({
            url: `/api/books${sortRequestApplic(request)}`,
         })
         dispatch(сatalogActions.updateBooks(result))
      } catch (error) {
         dispatch(сatalogActions.rejected(error))
      }
   }
}
