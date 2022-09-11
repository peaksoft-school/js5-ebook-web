import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   requestObj: {
      genres: [],
      bookType: null,
      priceFrom: null,
      priceTo: null,
      languages: null,
      search: 'all',
      sortBy: null,
      page: '1',
      size: '12',
   },
}

const catalogSlices = createSlice({
   name: 'catalogSlices',
   initialState,
   reducers: {
      setGenres: (state, action) => {
         state.genres = [...action.payload]
      },
   },
})
export default catalogSlices

export const setGenres = () => {
   return (dispatch) => {
      dispatch()
   }
}
