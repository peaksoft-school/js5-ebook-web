import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'
import appFetch from '../../hooks/appFetch'

const initialState = {
   users: [],
   user: {},
   favoriteBooks: [],
   basketBooks: [],
   purchasedBooks: [],
   totalElementFavoriteBooks: null,
   totalElementBasketBooks: null,
   numberOfElements: null,
   totalElements: null,
   deleteUser: null,
   status: null,
   error: null,
}
export const getAdminUsersSlice = createSlice({
   name: 'getUsers',
   initialState,
   reducers: {
      setAllUsers(state, action) {
         state.status = 'fulfilled'
         state.users = action.payload
      },
      setUserWithId(state, action) {
         state.status = 'fulfilled'
         state.user = action.payload
      },
      setOperationHistory(state, action) {
         state.purchasedBooks = action.payload.purchasedBooks.content
         state.numberOfElements = action.payload.purchasedBooks.numberOfElements
         state.totalElements = action.payload.purchasedBooks.totalElements
         state.totalElementFavoriteBooks =
            action.payload.totalElementFavoriteBooks
         state.favoriteBooks = action.payload.favoriteBooks
         state.basketBooks = action.payload.basketBooks
         state.totalElementBasketBooks = action.payload.totalElementBasketBooks
      },
      deleteUser(state, action) {
         state.deleteUser = action.payload
         state.status = 'fulfilled'
      },
      cleanUserDel: (state) => {
         state.deleteUser = null
      },
      pending: (state) => {
         state.status = 'pending'
      },
      rejected: (state, action) => {
         state.status = 'rejected'
         state.error = action.payload
      },
   },
})

const adminUsersAction = getAdminUsersSlice.actions
export default adminUsersAction

export const cleanUserDel = () => {
   return (dispatch) => {
      const time = setTimeout(() => {
         dispatch(adminUsersAction.cleanUserDel())
         clearTimeout(time)
      }, 1000)
   }
}

export const getAdminUsers = () => {
   return async (dispatch) => {
      try {
         dispatch(adminUsersAction.pending())
         const getData = await appFetch({
            url: '/api/admin/users',
         })
         dispatch(adminUsersAction.setAllUsers(getData))
      } catch (error) {
         dispatch(adminUsersAction.rejected(error))
      }
   }
}

export const getAdminUserWithId = (userId) => {
   return async (dispatch) => {
      try {
         dispatch(adminUsersAction.pending())
         const getData = await appFetch({
            url: `/api/users/${userId}`,
         })
         dispatch(adminUsersAction.setUserWithId(getData))
      } catch (error) {
         dispatch(adminUsersAction.rejected(error))
      }
   }
}

export function getUserOperationHistory(id, nextCart) {
   return async (dispatch) => {
      const response = await appFetch({
         url: `/api/admin/users/${id}/operationsHistory?page=1&size=${nextCart}`,
      })
      dispatch(adminUsersAction.setOperationHistory(response))
   }
}

export const deleteAdminVendor = (vendorId) => {
   return async (dispatch) => {
      try {
         dispatch(adminUsersAction.pending())
         const removeData = await appFetch({
            url: `/api/vendors/${vendorId}`,
            method: 'DELETE',
         })
         dispatch(adminUsersAction.deleteVendor(removeData))
      } catch (error) {
         dispatch(adminUsersAction.rejected(error))
      }
   }
}

export const deleteAdminUser = (userId) => {
   return async (dispatch) => {
      try {
         dispatch(adminUsersAction.pending())
         const removeData = await appFetch({
            url: `/api/users/${userId}`,
            method: 'DELETE',
         })
         dispatch(adminUsersAction.deleteUser(removeData))
         toast.success(removeData.message)
      } catch (error) {
         dispatch(adminUsersAction.rejected(error))
         toast.error('Не удалось удалить аккаунт!')
      }
   }
}
