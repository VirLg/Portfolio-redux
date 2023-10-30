import { getApiWether } from 'api/apiWether';
import React from 'react';
import { useEffect } from 'react';

const Weathers = city => {
  useEffect(() => {
    getApiWether(city);
  }, [city]);
  return <div>Weathers</div>;
};

export default Weathers;
