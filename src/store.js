import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from './Slice/counterSlice'
import  cart  from './Slice/cart'


export default configureStore({
  reducer: {
    counter:counterSlice,
    carttab:cart
  }
  
})