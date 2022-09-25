import { createSlice } from '@reduxjs/toolkit'
import appFetch from '../../hooks/appFetch'

const initialState = {
   book: null,
   message: null,
   status: null,
}

const userInnerPageSlices = createSlice({
   name: 'userInnerPageSlices',
   initialState,
   reducers: {
      getBook: (state, action) => {
         state.book = action.payload
      },
      pending: (state) => {
         state.status = 'pending'
      },
      success: (state) => {
         state.status = 'success'
      },
      error: (state, action) => {
         state.status = 'error'
         state.message = action.payload
      },
      clean: (state) => {
         state.message = null
         state.status = null
      },
   },
})

export const userInnerPageActions = userInnerPageSlices.actions

export default userInnerPageSlices

export const cleanStore = () => {
   return (dispatch) => {
      const time = setTimeout(() => {
         dispatch(userInnerPageActions.clean())
      }, 3000)
      return () => {
         clearTimeout(time)
      }
   }
}

export const getBook = (bookId) => {
   return async (dispatch) => {
      try {
         dispatch(userInnerPageActions.pending())
         const result = await appFetch({
            url: `/api/books/${bookId}`,
         })
         dispatch(userInnerPageActions.getBook(result))
         dispatch(userInnerPageActions.success())
      } catch (error) {
         dispatch(userInnerPageActions.error(error))
      }
   }
}
