import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import appFetch from '../../hooks/appFetch'

const applicationAction = createAsyncThunk(
   'applications/applicationActions',
   async (dispatch) => {
      const result = await appFetch('api/books?search=all&page=1&size=12', {
         url: '',
         token: '',
      })

      dispatch(applicationAction.getApplications(result))
      //   return result
   }
)

export default applicationAction
const initialState = {
   data: [],
}

export const applicationsSlices = createSlice({
   name: 'getApplications',
   initialState,
   reducers: {
      getApplications(state, action) {
         console.log(action)
         state.data = action.payload
      },
   },
})
export const applicationActions = applicationsSlices.actions
