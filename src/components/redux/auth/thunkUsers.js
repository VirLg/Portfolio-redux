import { createAsyncThunk } from '@reduxjs/toolkit';
import { getProfile, logIn } from 'api/ApiAuthUsers';
export const getProfileThunk = createAsyncThunk('get/profile', () =>
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
      return rejectWithValue(error.response.data.message);
    }
  }
);
