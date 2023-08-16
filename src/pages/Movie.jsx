import React, { useEffect } from 'react';

import MovieItem from './MovieItem';
import { getAllMovieThunk } from 'components/redux/thunk';
import { useDispatch, useSelector } from 'react-redux';
import { selectorAllMovie } from 'components/redux/selector';

const Movie = () => {
    const dispatch = useDispatch()
const arrMovies = useSelector(selectorAllMovie)

  useEffect(() => {
  dispatch(getAllMovieThunk())

  }, [dispatch]);
  return (
    <>
      <MovieItem prop={arrMovies} />
    </>
  )
}

export default Movie