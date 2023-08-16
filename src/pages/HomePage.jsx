import React, { useEffect, useState } from 'react';
import Api from 'api/Api';
import HomePageItem from './HomePageItem';
import { getAllMovieThunk } from 'components/redux/thunk';
import { useDispatch } from 'react-redux';
// import HomePageItem from './HomePageItem';
const HomePage = () => {
  const [arrMovies, setArrMovies] = useState([]);
const dispatch = useDispatch()
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