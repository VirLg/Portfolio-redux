
import { configureStore } from '@reduxjs/toolkit';
import { getMovie } from './slice';
export const store = configureStore({reducer:{
    movie:getMovie.reducer
}})
