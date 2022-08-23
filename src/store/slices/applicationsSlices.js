import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import appFetch from '../../hooks/appFetch'

const applicationActions = createAsyncThunk(
   'applications/applicationActions',
   async (data, setRequestBooks) => {
      const result = await appFetch('api/books?search=all&page=1&size=12', data)
      setRequestBooks(result)
      //   return result
   }
)

export default applicationActions

export const applicationsSlices = createSlice({
   name: 'getApplications',
   initialState,
   reducers: {
      getApplications: (state, action),
   },
})
