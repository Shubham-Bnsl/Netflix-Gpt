import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import movieReducer from './moviesSlice'


export const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
  },

});