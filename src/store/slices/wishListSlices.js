import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'
import appFetch from '../../hooks/appFetch'

const initialState = {
   favoriteBooks: [],
   status: null,
   message: null,
}

const favoritBooksSlices = createSlice({
   name: 'favoriteBooks',
   initialState,
   reducers: {
      pending: (state) => {
         state.status = 'pending'
      },
      success: (state) => {
         state.status = 'success'
      },
      error: (state) => {
         state.status = 'error'
      },
      getFavoriteBooks(state, action) {
         state.favoriteBooks = action.payload
         state.status = 'fulfilled'
      },
      addWishlist(state, action) {
         state.message = action.payload
         state.status = 'fulfilled'
      },
      removeWishlist(state, action) {
         state.message = action.payload
         state.status = 'fulfilled'
      },
   },
})
export const favoritBooksActions = favoritBooksSlices.actions
export default favoritBooksSlices

export const favoriteBooksAction = () => {
   return async (dispatch) => {
      try {
         dispatch(favoritBooksActions.pending())
         const response = await appFetch({
            url: '/api/wishlist',
         })
         dispatch(favoritBooksActions.getFavoriteBooks(response))
      } catch (error) {
         dispatch(favoritBooksActions.error(error))
      }
   }
}

export const addWishlist = (bookId) => {
   return async (dispatch) => {
      try {
         dispatch(favoritBooksActions.pending())
         const result = await appFetch({
            url: `/api/wishlist/${bookId}`,
            method: 'PUT',
            body: bookId,
         })
         dispatch(favoritBooksActions.addWishlist(result))
         toast.success(result.message)
         dispatch(favoriteBooksAction())
      } catch (error) {
         dispatch(favoritBooksActions.error(error))
         toast.error(error)
      }
   }
}

export const removeWishlist = (bookId) => {
   return async (dispatch) => {
      try {
         const result = await appFetch({ url: `/api/wishlist/${bookId}` })
         dispatch(favoritBooksActions.removeWishlist(result))
         toast.success(result.message)
         dispatch(favoriteBooksAction())
      } catch (error) {
         dispatch(favoritBooksActions.error(error))
         toast.error(error)
      }
   }
}
