import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import AppFetch from '../../hooks/AppFetch'

const initialState = {
   vendor: '',
   client: '',
   admin: '',
   status: null,
}
// http://ebook-env.eba-kbrgztwq.eu-central-1.elasticbeanstalk.com/api/public/vendor/register

export const SignUpRequest = createAsyncThunk(
   'uiSlices/SignUpPost',
   async (user) => {
      let result = null
      try {
         result = await AppFetch(
            'https://jsonplaceholder.typicode.com/posts',
            'POST',
            user
         )
         localStorage.setItem('vendor', result)
         return result
      } catch (error) {
         throw new Error('ffe')
      }
   }
)

const SignSlices = createSlice({
   name: 'uiSlices',
   initialState,
   reducers: {
      updateСountries: (state, action) => {
         state.vendor = action.payload
      },
   },
   extraReducers: {
      [SignUpRequest.pending]: (state) => {
         state.status = 'pending'
      },
      [SignUpRequest.fulfilled]: (state, action) => {
         state.vendor = action.payload
         state.status = 'fulfilled'
      },
      [SignUpRequest.rejected]: (state) => {
         state.status = 'rejected'
      },
   },
})

export const SignActions = SignSlices.actions

export default SignSlices
