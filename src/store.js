import { configureStore } from '@reduxjs/toolkit'
import elementsReducer from './features/elementsSlice'

const store = configureStore({
  reducer: {
    elements: elementsReducer,
  },
})

export default store
