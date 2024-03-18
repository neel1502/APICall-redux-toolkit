import {configureStore} from "@reduxjs/toolkit"
import todoReducer from '../Slice/todo';
export const Store=configureStore({
    reducer:{
      todo:todoReducer,
    }
})