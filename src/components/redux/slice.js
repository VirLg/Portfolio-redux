import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    isLoading:false,
    movie:[],
    error:''   
}

export const allMovieSlice = createSlice({
    name:'allMovie',
    initialState,
    reducers:{
        fetching:(state)=>{state.isLoading = true},
        fetchSuccess:(state,action)=>{
            state.isLoading=false
            state.movie = action.payload
            state.erorr=''
        },
        fetchError:(state,action)=>{
            state.isLoading=false
            state.error=action.payload
        }
    }
})
export const{fetching,fetchSuccess,fetchError}=allMovieSlice.actions
export default allMovieSlice.reducer



    // export const movieSlice =  createSlice({
    //     name:'movie',
    //     initialState:[],
    //     reducers:{
    //         getMovie:(state,action)=>[...state]
    //     }
    // })
    // export const {getMovie}=movieSlice.actions;
    // export default movieSlice.reducer;