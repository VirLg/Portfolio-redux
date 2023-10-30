// import { authReducer } from './auth/slice';
import { allMovieSlice } from './movies/slice';
export const reducer = {
  allMovie: allMovieSlice.reducer,
  // auth: authReducer.reducer,
};

//===========================================
// import { movieSlice } from "./slice"
// export const reducer = {
//   movie:movieSlice.reducer
// }
