import { createAsyncThunk } from '@reduxjs/toolkit';

export const thunkLogin = createAsyncThunk('authUser/login', body => {
  return login(body);
});
