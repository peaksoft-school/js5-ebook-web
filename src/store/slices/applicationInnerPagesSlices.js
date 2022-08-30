import { createSlice } from '@reduxjs/toolkit'
import appFetch from '../../hooks/AppFetch'

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
   // 'applications/applicationActions',

   return async (dispatch) => {
      const result = await appFetch({
         url: '/api/books/1',
      })

      dispatch(applicationInnerPageActions.getApplications(result))
      return result
   }
}
export default applicationInnerPageAction
