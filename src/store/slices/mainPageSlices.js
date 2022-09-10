import { createSlice } from '@reduxjs/toolkit'
// import appFetch from '../../hooks/appFetch'

const initialState = {
   message: null,
   status: null,
}

const mainPageSlices = createSlice({
   name: 'mainPageSlices',
   initialState,
   reducers: {
      setMessage: (state, action) => {
         state.message = action.payload
      },
   },
})

export const mainPageActions = mainPageSlices.actions

export default mainPageSlices

// export const postEmail = (email) => {
//    return async () => {
//       const result = appFetch({
//          url: '',
//       })
//    }
// }
