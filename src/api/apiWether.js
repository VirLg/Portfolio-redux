

import axios from 'axios';


axios.defaults.baseURL = 'http://api.weatherapi.com/v1';
const WEATHERAPI_KEY = "ac002f517cd54a6d99c141240231608"


export const getApiWether = function (props) {
  const data = axios(`/forecast.json?key=${WEATHERAPI_KEY}&q=lviv`);
  if (!data) return new Error('some');
  return data;
};
