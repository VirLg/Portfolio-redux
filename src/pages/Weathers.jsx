import { weatherThunk } from 'components/redux/weather/weatherThunk';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Weathers = city => {
  const dispath = useDispatch();
  useEffect(() => {
    dispath(weatherThunk('lviv'));
  }, [city, dispath]);
  return <div>Weathers</div>;
};

export default Weathers;
