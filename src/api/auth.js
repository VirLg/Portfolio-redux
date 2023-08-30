import axios from 'axios';

const instance = axios.create({ baseURL: 'https://api.escuelajs.co/api/v1/' });

export const signUp = async body => {
  return await instance.post('users', body);
};

export const logIn = async body => {
  console.log(body);
  const { data } = await instance.post('auth/login', body);
  console.log(data);
  return data;
};
