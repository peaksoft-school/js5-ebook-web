import { createSlice } from '@reduxjs/toolkit'
import { applicationInnerPageAction } from './applicationInnerPageActions'

const initialState = {
   data: {},
   status: null,
}

const applicationsInnerPageSlices = createSlice({
   name: 'getApplications',
   initialState,
   reducers: {},
   extraReducers: {
      [applicationInnerPageAction.fulfilled]: (state, action) => {
         state.data = action.payload
         state.status = 'success'
      },
   },
})
export const applicationsInnerPageSlicesAction =
   applicationsInnerPageSlices.actions
export default applicationsInnerPageSlices
