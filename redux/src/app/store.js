import { configureStore } from "@reduxjs/toolkit";
// import reducer from "../features/counters/counterSlice";

import counterReducer from '../features/counters/counterSlice'
import postReducer from '../features/posts/postsSlice'

const store = configureStore({
  reducer :{
    counters : counterReducer,
    posts : postReducer
  }
})

export default store;