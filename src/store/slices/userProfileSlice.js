import { createSlice } from '@reduxjs/toolkit'
import appFetch from '../../hooks/appFetch'

const initialState = {
   dataUser: {},
}

const UserProfileSlice = createSlice({
   name: 'userProfile',
   initialState,
   reducers: {
      getUserprofile: (state, action) => {
         state.dataUser = action.payload
      },
      putUserPfrofile: (state, action) => {
         state.dataUser = action.payload
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
      const res = await appFetch({
         method: 'PUT',
         url: `/api/users`,
         body: newUser,
      })
      console.log(newUser)
      dispatch(UserProfileAction.putUserPfrofile(res))
   }
}
