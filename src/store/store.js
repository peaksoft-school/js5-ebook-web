import { configureStore } from '@reduxjs/toolkit'
import UiSlices from './slices/uiSlices'

const store = configureStore({
   reducer: {
      vendor: UiSlices.reducer,
      client: '',
      admin: '',
   },
})

export default store
