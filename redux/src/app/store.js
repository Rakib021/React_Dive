import { configureStore } from "@reduxjs/toolkit";
// import reducer from "../features/counters/counterSlice";

import counterReducer from '../features/counters/counterSlice'

const store = configureStore({
  reducer :{
    counters : counterReducer
  }
})

export default store;