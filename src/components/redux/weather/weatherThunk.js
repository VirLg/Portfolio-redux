import { createAsyncThunk } from '@reduxjs/toolkit';
import { getApiWether } from 'api/apiWether';

export const wetherThunk = createAsyncThunk('weather/getWeathet', data => {
  console.log('data', data)
  getApiWether(data);
});
