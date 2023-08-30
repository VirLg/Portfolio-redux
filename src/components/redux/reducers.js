import { authReducer } from './auth/slice';
import { allMovieSlice } from './slice';
export const reducer = {
  allMovie: allMovieSlice.reducer,
  auth: authReducer,
};

//===========================================
// import { movieSlice } from "./slice"
// export const reducer = {
//   movie:movieSlice.reducer
// }
