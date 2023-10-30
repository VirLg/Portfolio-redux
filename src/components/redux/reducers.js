// import { authReducer } from './auth/slice';
import { allMovieReducer } from './movies/slice';
import { todoReducer } from './toDo/sliceTodo';
import { weatherReducer } from './weather/weatherSlice';

export const reducer = {
  allMovie: allMovieReducer,
  todo: todoReducer,
  weather: weatherReducer,
};

//===========================================
// import { movieSlice } from "./slice"
// export const reducer = {
//   movie:movieSlice.reducer
// }
