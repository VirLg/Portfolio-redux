import Api from 'api/Api';
import {fetching,fetchSuccess,fetchError} from './slice'

export const getAllMovieThunk = ()=>{
    return async(dispatch)=>{
        dispatch(fetching())
        try {
            const {data}=await Api(`/trending/movie/day?`);
            dispatch(fetchSuccess(data))
        } catch (error) {
            dispatch(fetchError(error))
        }
    }
}