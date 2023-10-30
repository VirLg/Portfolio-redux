import { weatherThunk } from 'components/redux/weather/weatherThunk';
import WethersForm from 'components/wethers/WethersForm';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Weathers = () => {
  const [city, setCity] = useState('');
  const getCity = value => {
    setCity(value);
    console.log('value', value);
  };
  const dispath = useDispatch();
  useEffect(() => {
    dispath(weatherThunk(city));
  }, [city, dispath]);
  return (
    <>
      <WethersForm getCity={getCity} />
    </>
  );
};

export default Weathers;
