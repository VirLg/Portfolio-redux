// import { authReducer } from './auth/slice';
import { allMovieReducer } from './movies/slice';
import { todoReducer } from './toDo/sliceTodo';

export const reducer = {
  allMovie: allMovieReducer,
  todo: todoReducer,
};

//===========================================
// import { movieSlice } from "./slice"
// export const reducer = {
//   movie:movieSlice.reducer
// }
