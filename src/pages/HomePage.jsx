import React, { useEffect, useState } from 'react';
import Api from 'api/Api';
import HomePageItem from './HomePageItem';
import { getAllMovieThunk } from 'components/redux/thunk';
import { useDispatch, useSelector } from 'react-redux';
import { selectorAllMovie } from 'components/redux/selector';
// import HomePageItem from './HomePageItem';
const HomePage = () => {
  // const [arrMovies, setArrMovies] = useState([]);
const dispatch = useDispatch()
const arrMovies = useSelector(selectorAllMovie)
console.log('arrMovies', arrMovies)
  useEffect(() => {
  dispatch(getAllMovieThunk())
    // let isCancelled = false;
    // if (!isCancelled) handleApi();
    // return () => (isCancelled = true);
  }, []);
  // const handleApi = async () => {
  //   getAllMovieThunk()
  //   // const arr = await Api(`/trending/movie/day?`);
  //   // setArrMovies(arr.data.results);
  // };
  return (
    <>
      <HomePageItem prop={arrMovies} />
    </>
  );
};

export default HomePage;