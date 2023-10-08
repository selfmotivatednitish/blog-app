import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import blogSlice from '../features/blogData/blogSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    blogs: blogSlice,
  },
});
