import { createSlice } from '@reduxjs/toolkit'
import appFetch from '../../hooks/appFetch'
import { sortRequestApplic } from '../../utils/helpers/helpers'

const initialState = {
   books: [],
   totalBooks: 0,
   totalPages: 0,
   status: null,
   error: null,
   externalSetting: {
      languages: null,
      bookType: null,
      sortBy: {
         type: null,
         label: '',
      },
      genres: {
         id: null,
         label: '',
      },
   },
}

const сatalogSlices = createSlice({
   initialState,
   name: 'CatalogSlices',
   reducers: {
      deleteExternal: (state, action) => {
         if (action.payload.key === 'genres') {
            state.externalSetting = {
               ...state.externalSetting,
               [action.payload.key]: { id: null, label: '' },
            }
         }
         if (action.payload.key === 'bookType') {
            state.externalSetting = {
               ...state.externalSetting,
               [action.payload.key]: null,
            }
         }
      },
      setExternalSetting: (state, action) => {
         state.externalSetting = {
            ...state.externalSetting,
            [action.payload.key]: action.payload.value,
         }
      },
      getBooks: (state, action) => {
         state.books = action.payload.content
         state.totalBooks = action.payload.totalElements
         state.totalPages = action.payload.totalPages
      },
      updateBooks: (state, action) => {
         state.totalBooks = action.payload.totalElements
         state.totalPages = action.payload.totalPages
         action.payload.content.forEach((el) => {
            const prevElem = state.books.find((elem) => elem.id === el.id)
            if (!prevElem) {
               state.books.push(el)
            }
         })
      },
      success: (state) => {
         state.status = 'success'
      },
      pending: (state) => {
         state.status = 'pending'
      },
      rejected: (state, action) => {
         state.status = 'error'
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
         dispatch(сatalogActions.pending())
         const result = await appFetch({
            url: `/api/books${sortRequestApplic(request)}`,
         })
         dispatch(сatalogActions.getBooks(result))
         dispatch(сatalogActions.success())
      } catch (error) {
         dispatch(сatalogActions.rejected(error))
      }
   }
}

export const updateBooks = (request) => {
   return async (dispatch) => {
      try {
         dispatch(сatalogActions.pending())
         const result = await appFetch({
            url: `/api/books${sortRequestApplic(request)}`,
         })
         dispatch(сatalogActions.updateBooks(result))
         dispatch(сatalogActions.success())
      } catch (error) {
         dispatch(сatalogActions.rejected(error))
      }
   }
}
