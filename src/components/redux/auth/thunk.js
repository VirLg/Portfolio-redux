import { createAsyncThunk } from '@reduxjs/toolkit';
import { logIn } from 'api/auth';

export const thunkLogin = createAsyncThunk('authUser/login', body => {
  return logIn(body);
});
