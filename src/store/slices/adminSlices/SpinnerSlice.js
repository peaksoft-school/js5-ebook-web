import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   isValid: false,
}

const spinnerSlice = createSlice({
   name: 'spinner',
   initialState,
   reducers: {
      spinnerHandler(state) {
         state.isValid = !state.isValid
      },
   },
})

export const spinnerActions = spinnerSlice.actions
export default spinnerSlice
