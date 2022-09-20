import { createSlice } from '@reduxjs/toolkit'
import appFetch from '../../hooks/appFetch'
import { exitApp } from './authSlices'

const initialState = {
   dataUser: null,
   userHistory: [],
   message: null,
   status: null,
   deleteUser: null,
   totalElements: null,
}

const UserProfileSlice = createSlice({
   name: 'userProfile',
   initialState,
   reducers: {
      pending: (state) => {
         state.status = 'pending'
      },
      deleteUser(state, action) {
         state.message = action.payload.message
         state.status = 'success'
      },
      getUserprofile: (state, action) => {
         state.dataUser = {
            email: action.payload.email,
            id: action.payload.id,
            name: action.payload.name,
         }
      },
      putUserPfrofile: (state, action) => {
         state.message = action.payload.message
         state.status = 'success'
      },
      clearMessage: (state) => {
         state.message = null
         state.status = null
      },
      error(state, action) {
         state.message = action.payload
         state.status = 'error'
      },
      getOperationHistory(state, action) {
         state.userHistory = action.payload.content
         state.totalElements = action.payload.totalElements
      },
   },
})

export const userProfileAction = UserProfileSlice.actions
export default UserProfileSlice

export function getUserprofile(id) {
   return async (dispatch) => {
      const response = await appFetch({
         url: `/api/users/${id}`,
      })
      dispatch(userProfileAction.getUserprofile(response))
   }
}
export function getUserOperationHistory(id, nextCart) {
   return async (dispatch) => {
      const response = await appFetch({
         url: `/api/users/${id}/operationsHistory?page=1&size=${nextCart}`,
      })
      dispatch(userProfileAction.getOperationHistory(response))
   }
}
export const PutUserPfrofile = (newUser) => {
   return async (dispatch) => {
      try {
         dispatch(userProfileAction.pending())
         const res = await appFetch({
            method: 'PUT',
            url: `/api/users`,
            body: newUser,
         })
         dispatch(userProfileAction.putUserPfrofile(res))
      } catch (error) {
         dispatch(userProfileAction.error('Пароль не верен!'))
      }
   }
}

export const deleteUserProfile = (id) => {
   return async (dispatch) => {
      try {
         dispatch(userProfileAction.pending())
         const deleteuser = await appFetch({
            url: `/api/users/${id}`,
            method: 'DELETE',
         })
         dispatch(userProfileAction.deleteUser(deleteuser))
         dispatch(exitApp())
      } catch (error) {
         dispatch(userProfileAction.error(error))
      }
   }
}
