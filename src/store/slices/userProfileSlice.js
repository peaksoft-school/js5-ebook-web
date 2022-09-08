import { createSlice } from '@reduxjs/toolkit'
import appFetch from '../../hooks/appFetch'
import { exitApp } from './authSlices'

const initialState = {
   dataUser: null,
   message: null,
   status: null,
   deleteUser: null,
}

const UserProfileSlice = createSlice({
   name: 'userProfile',
   initialState,
   reducers: {
      pending: (state) => {
         state.status = 'pending'
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
         state.status = 'fulfilled'
      },
      error(state, action) {
         state.message = action.payload.message
         state.status = 'error'
      },
      deleteUser(state, action) {
         state.deleteUser = !state.deleteUser
         state.message = action.payload
      },
   },
})

export const UserProfileAction = UserProfileSlice.actions
export default UserProfileSlice

export function getUserprofile(id) {
   return async (dispatch) => {
      const response = await appFetch({
         url: `/api/users/${id}`,
      })
      dispatch(UserProfileAction.getUserprofile(response))
   }
}

export const putUserPfrofile = (newUser) => {
   return async (dispatch) => {
      try {
         dispatch(UserProfileAction.pending())
         const res = await appFetch({
            method: 'PUT',
            url: `/api/users`,
            body: newUser,
         })
         dispatch(UserProfileAction.putUserPfrofile(res))
      } catch (error) {
         dispatch(UserProfileAction.error(error))
      }
   }
}

export const deleteUserProfile = (id) => {
   return async (dispatch) => {
      try {
         const deleteuser = await appFetch({
            url: `/api/users/${id}`,
            method: 'DELETE',
         })
         dispatch(UserProfileAction.deleteUser(deleteuser))
         dispatch(exitApp())
      } catch (error) {
         dispatch(UserProfileAction.rejected(error))
      }
   }
}
