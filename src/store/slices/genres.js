import { createSlice } from '@reduxjs/toolkit'
// import appFetch from '../../hooks/appFetch'
import { URL } from '../../utils/constants/constants'

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
   return (dispatch) => {
      fetch(`${URL}/api/genres`)
         .then((response) => {
            return response.json()
         })
         .then((data) => {
            dispatch(globalValuesAction.updateGenres(data))
         })
   }
}
