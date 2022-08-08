import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import appFetch from '../../hooks/AppFetch'
import { EBOOK_AUTH_INFO } from '../../utils/constants/constants'
import { getFromLocaleStorage, saveToLocaleStorage } from '../../hooks/locale'

function reloadGetLocale() {
   const user = getFromLocaleStorage(EBOOK_AUTH_INFO)
   if (user) {
      return user
   }
   return null
}

const initialState = {
   user: reloadGetLocale(),
   status: null,
   error: null,
}

export const signUpVendor = createAsyncThunk(
   'SignSlices/SignUpVendorRequest',
   async (data) => {
      const result = await appFetch('/api/public/vendor/register', 'POST', data)
      const vendor = {
         id: result.id,
         token: result.jwt,
         role: result.role,
      }
      saveToLocaleStorage(EBOOK_AUTH_INFO, vendor)
      return vendor
   }
)

const authSlices = createSlice({
   name: 'SignSlices',
   initialState,
   extraReducers: {
      [signUpVendor.pending]: (state) => {
         state.status = 'pending'
      },
      [signUpVendor.fulfilled]: (state, action) => {
         state.user = action.payload
         state.status = 'fulfilled'
      },
      [signUpVendor.rejected]: (state, action) => {
         state.status = 'rejected'
         state.error = action.error
      },
   },
})

export const authSlicesActions = authSlices.actions

export default authSlices