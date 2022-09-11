import { createSlice } from '@reduxjs/toolkit'
import appFetch from '../../hooks/appFetch'
import { sortRequestApplic } from '../../utils/helpers/helpers'

const initialState = {
   users: [],
   user: {},
   userHistory: {
      history: [],
      totalElements: '',
      totalPages: '',
   },
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
      setUserHistory(state, action) {
         state.status = 'fulfilled'
         state.userHistory.history = action.payload.content
         state.userHistory.totalElements = action.payload.totalElements
         state.userHistory.totalPages = action.payload.totalPages
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

export const getAdminUserHistory = (userId, filterHistory) => {
   return async (dispatch) => {
      try {
         dispatch(adminUsersAction.pending())
         const getData = await appFetch({
            url: `/api/users/${userId}/operationsHistory${sortRequestApplic(
               filterHistory
            )}`,
         })
         dispatch(adminUsersAction.getVendorBooks(getData))
      } catch (error) {
         dispatch(adminUsersAction.rejected(error))
      }
   }
}
