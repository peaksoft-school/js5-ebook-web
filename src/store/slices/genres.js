import { createSlice } from '@reduxjs/toolkit'
import appFetch from '../../hooks/appFetch'

const initialState = {
   genres: '',
}

const globalValues = createSlice({
   name: 'globalValues',
   initialState,
   reducers: {
      updateGenres: (state, action) => {
         state.genres = action.payload
      },
   },
})

export const globalValuesAction = globalValues.actions

export default globalValues

export function addGenres() {
   return async (dispatch) => {
      try {
         const response = await appFetch({
            url: '/api/genres',
         })
         dispatch(globalValuesAction.updateGenres(response))
      } catch (error) {
         console.log(error)
      }
   }
}
