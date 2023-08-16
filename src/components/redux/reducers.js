import { createReducer } from "@reduxjs/toolkit"
import { movieSlice } from "./slice"
export const reducer = {
  movie:movieSlice.reducer
}

  
