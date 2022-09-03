import { createSlice } from '@reduxjs/toolkit'
import appFetch from '../../../hooks/AppFetch'

const initialState = {
   data: {},
}

export const applicationsInnerPageSlices = createSlice({
   name: 'getApplications',
   initialState,
   reducers: {
      getApplications(state, action) {
         state.data = action.payload
      },
   },
})
export const applicationInnerPageActions = applicationsInnerPageSlices.actions

const applicationInnerPageAction = () => {
   return async (dispatch) => {
      const result = await appFetch({
         url: '/api/books/1',
      })
      dispatch(applicationInnerPageActions.getApplications(result))
      console.log(result)
      return result
   }
}

export default applicationInnerPageAction
