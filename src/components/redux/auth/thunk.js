import { createAsyncThunk } from '@reduxjs/toolkit';
import { logIn } from 'api/auth';
export const getProfileThunk = createAsyncThunk('get/profile', body =>
  logIn(body)
);
export const thunkLogin = createAsyncThunk('authUser/login', body => {
  return logIn(body);
});
