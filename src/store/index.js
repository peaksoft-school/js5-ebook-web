import { configureStore } from '@reduxjs/toolkit'
// eslint-disable-next-line import/no-named-as-default
import SignSlices from './slices/SignSlices'

const store = configureStore({
   reducer: {
      vendor: SignSlices.reducer,
      client: '',
      admin: '',
   },
})

export default store
