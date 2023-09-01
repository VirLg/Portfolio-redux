import axios from 'axios';

const instance = axios.create({ baseURL: 'https://api.escuelajs.co/api/v1/' });

export const signUp = async body => {
  return await instance.post('users', body);
};
const setToken = token => {
  instance.defaults.headers.common['Authorization'] = token;
};
export const logIn = async body => {
  const { data } = await instance.post('auth/login', body);
  if ('access_token' in data) setToken(`Bearer ${data.access_token}`);
  return data;
};
