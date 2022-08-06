import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import appFetch from '../../hooks/AppFetch'
import { EBOOK_AUTH_INFO } from '../../utils/constants/constants'
import saveToLocaleStorage from '../../hooks/saveToLocaleStorage'

const initialState = {
   [EBOOK_AUTH_INFO]: '',
   status: null,
   error: null,
}

export const signUpVendor = createAsyncThunk(
   'SignSlices/SignUpVendorRequest',
   async (vendor) => {
      const result = await appFetch(
         '/api/public/vendor/register',
         'POST',
         vendor
      )
      saveToLocaleStorage(result)
      return result
   }
)

const authSlices = createSlice({
   name: 'SignSlices',
   initialState,
   reducers: {
      updateСountries: (state, action) => {
         state[EBOOK_AUTH_INFO] = action.payload
      },
   },
   extraReducers: {
      [signUpVendor.pending]: (state) => {
         state.status = 'pending'
      },
      [signUpVendor.fulfilled]: (state, action) => {
         state[EBOOK_AUTH_INFO] = action.payload
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
