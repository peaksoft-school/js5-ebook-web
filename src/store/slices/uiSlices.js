import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import AppFetch from '../../hooks/AppFetch'

const initialState = {
   vendor: '',
   client: '',
   admin: '',
}

export const func = createAsyncThunk('uiSlices/func', async (user) => {
   const result = await AppFetch(
      'http://ebook-env.eba-kbrgztwq.eu-central-1.elasticbeanstalk.com/api/public/vendor/register',
      'POST',
      user
   )
   return result
})

const UiSlices = createSlice({
   name: 'uiSlices',
   initialState,
   reducers: {
      getToken(state, action) {
         state.vendor = action.payload.token
      },
   },
   extraReducers: {
      [func.fulfilled]: (state, action) => {
         state.vendor = action.payload
      },
   },
})

export const UiActions = UiSlices.actions

export default UiSlices
