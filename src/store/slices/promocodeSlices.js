import { createSlice } from '@reduxjs/toolkit'
import appFetch from '../../hooks/appFetch'

const initialState = {
   promocode: '',
   status: null,
   error: null,
   snackbar: false,
}

const promocodeSlices = createSlice({
   name: 'promocodeSlices',
   initialState,
   reducers: {
      createPromocode: (state, action) => {
         state.promocode = action.payload
      },
      error: (state, action) => {
         state.error = action.payload
      },
      snackbar: (state) => {
         state.snackbar = true
      },
      clean: (state) => {
         state.promocode = ''
         state.error = ''
         state.snackbar = false
      },
   },
})

export const promocodeActions = promocodeSlices.actions

export default promocodeSlices

export const createPromocode = (requestData) => {
   return async (dispatch) => {
      try {
         const response = await appFetch({
            method: 'POST',
            body: requestData,
            url: '/api/promocode/create',
         })
         dispatch(promocodeActions.createPromocode(response.message))
      } catch (error) {
         dispatch(promocodeActions.error(error))
      }
   }
}
