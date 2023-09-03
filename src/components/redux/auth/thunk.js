import { createAsyncThunk } from '@reduxjs/toolkit';
import { getProfile, logIn } from 'api/auth';
export const getProfileThunk = createAsyncThunk('get/profile', body =>
  getProfile()
);
export const thunkLogin = createAsyncThunk(
  'authUser/login',
  async (body, { rejectWithValue, dispatch }) => {
    try {
      dispatch(getProfileThunk());
      const data = await logIn(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.responce.data.message);
    }
  }
);
