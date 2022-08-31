import { createAsyncThunk } from '@reduxjs/toolkit'
import appFetch from '../../hooks/AppFetch'

export const applicationInnerPageAction = createAsyncThunk(
   'applicationsInnerPage/applicationInnerPageAction',
   async (id) => {
      const result = await appFetch({
         url: `/api/books/${id}`,
      })
      // dispatch(applicationInnerPageActions.getApplications(result))
      return result
   }
)
