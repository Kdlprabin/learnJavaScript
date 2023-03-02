import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from './slices/cartSlice'
export default configureStore({
  reducer: {
    cart: CounterReducer
  },
})