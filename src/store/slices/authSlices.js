import { createSlice } from '@reduxjs/toolkit'
import appFetch from '../../hooks/appFetch'
import { EBOOK_AUTH_INFO, APP_ROLES } from '../../utils/constants/constants'
import {
   getFromLocaleStorage,
   saveToLocaleStorage,
   deleteFromLocaleStorage,
} from '../../hooks/locale'

const InitialUser = {
   role: APP_ROLES.USER,
}
function reloadGetLocale() {
   const user = getFromLocaleStorage(EBOOK_AUTH_INFO)
   if (user) {
      return user
   }
   return InitialUser
}
const initialState = {
   user: reloadGetLocale(),
   status: null,
   error: null,
}
const authSlices = createSlice({
   name: 'authSlices',
   initialState,
   reducers: {
      reject: (state) => {
         state.status = 'rejected'
      },
      fulfilled: (state) => {
         state.status = 'fulfilled'
      },
      pending: (state) => {
         state.status = 'pending'
      },
      userUpate: (state, action) => {
         state.status = 'fulfilled'
         state.user = action.payload
      },
      rejected: (state, action) => {
         state.status = 'rejected'
         state.error = action.payload
      },
      exitApp: (state) => {
         state.user = InitialUser
      },
      cleanStatus: (state) => {
         state.status = null
      },
   },
})
export const authSlicesActions = authSlices.actions
export default authSlices

export const exitApp = () => {
   return (dispatch) => {
      deleteFromLocaleStorage(EBOOK_AUTH_INFO)
      dispatch(authSlicesActions.exitApp())
   }
}

export const signIn = (data) => {
   return async (dispatch) => {
      try {
         dispatch(authSlicesActions.pending())
         const result = await appFetch({
            url: '/api/public/login',
            method: 'POST',
            body: data,
         })
         const user = {
            id: result.id,
            token: result.jwt,
            role: result.role,
            firstName: result.firstName,
         }
         saveToLocaleStorage(EBOOK_AUTH_INFO, user)
         dispatch(authSlicesActions.userUpate(user))
      } catch (error) {
         dispatch(authSlicesActions.rejected(error))
      }
   }
}
export const signUpClient = (data) => {
   return async (dispatch) => {
      try {
         dispatch(authSlicesActions.pending())
         const result = await appFetch({
            url: '/api/public/user/register',
            method: 'POST',
            body: data,
         })
         const user = {
            id: result.id,
            token: result.jwt,
            role: result.role,
            firstName: result.firstName,
         }
         saveToLocaleStorage(EBOOK_AUTH_INFO, user)
         dispatch(authSlicesActions.userUpate(user))
      } catch (error) {
         dispatch(authSlicesActions.rejected(error))
      }
   }
}
export const signUpVendor = (data) => {
   return async (dispatch) => {
      try {
         dispatch(authSlicesActions.pending())
         const result = await appFetch({
            url: '/api/public/vendor/register',
            method: 'POST',
            body: data,
         })
         const vendor = {
            id: result.id,
            token: result.jwt,
            role: result.role,
         }
         dispatch(authSlicesActions.userUpate(vendor))
      } catch (error) {
         dispatch(authSlicesActions.rejected(error))
      }
   }
}
