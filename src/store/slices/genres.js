import { createSlice } from '@reduxjs/toolkit'
import appFetch from '../../hooks/appFetch'
// import appFetch from '../../hooks/appFetch'
// import { URL } from '../../utils/constants/constants'

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
      // fetch(`${URL}/api/genres`)
      //    .then((response) => {
      //       if (!response.ok) {
      //          throw new Error('Что то пошло не так!')
      //       }
      //       return response.json()
      //    })
      //    .then((data) => {
      //       dispatch(globalValuesAction.updateGenres(data))
      //    })
      //    .catch((error) => {
      //       console.log(error)
      //    })
   }
}
