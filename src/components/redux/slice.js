const { createSlice } = require("@reduxjs/toolkit");

const movieSlice = createSlice({
    name:'movie',
    initialState:[],
    reducers:{
        getMovie:(state,action)=>state
    }
})
export const {getMovie}=movieSlice.actions;
export default movieSlice.reducer;