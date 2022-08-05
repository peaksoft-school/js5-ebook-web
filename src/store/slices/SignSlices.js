import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import appFetch from '../../hooks/appFetch'

const initialState = {
   token: '',
   status: null,
   error: null,
}

export const SignUpVendorRequest = createAsyncThunk(
   'SignSlices/SignUpVendorRequest',
   async (vendor) => {
      const result = await appFetch(
         '/api/public/vendor/register',
         'POST',
         vendor
      )
      localStorage.setItem('token', JSON.stringify(result))
      return result
   }
)

const SignSlices = createSlice({
   name: 'SignSlices',
   initialState,
   reducers: {
      updateСountries: (state, action) => {
         state.token = action.payload
      },
   },
   extraReducers: {
      [SignUpVendorRequest.pending]: (state) => {
         state.status = 'pending'
      },
      [SignUpVendorRequest.fulfilled]: (state, action) => {
         state.token = {
            id: action.payload.id,
            jwt: action.payload.jwt,
            role: action.payload.role,
            firstName: action.payload.firstName,
         }
         state.status = 'fulfilled'
      },
      [SignUpVendorRequest.rejected]: (state, action) => {
         state.status = 'rejected'
         state.error = action.error
      },
   },
})

export const SignActions = SignSlices.actions

export default SignSlices
