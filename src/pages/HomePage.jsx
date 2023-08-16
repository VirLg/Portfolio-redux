import React, { useEffect } from 'react';

import HomePageItem from './HomePageItem';
import { getAllMovieThunk } from 'components/redux/thunk';
import { useDispatch, useSelector } from 'react-redux';
import { selectorAllMovie } from 'components/redux/selector';

const HomePage = () => {

const dispatch = useDispatch()
const arrMovies = useSelector(selectorAllMovie)

  useEffect(() => {
  dispatch(getAllMovieThunk())

  }, [dispatch]);

  return (
    <>
      <HomePageItem prop={arrMovies} />
    </>
  );
};

export default HomePage;