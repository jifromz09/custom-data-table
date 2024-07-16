import { configureStore } from "@reduxjs/toolkit";
import taskReducer from '../data/taskSlice';
 
const store = configureStore({
  reducer: {
    tasks: taskReducer
  },
});

export default store;