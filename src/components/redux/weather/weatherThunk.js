import { createAsyncThunk } from '@reduxjs/toolkit';
import { getApiWether } from 'api/apiWether';

export const weatherThunk = createAsyncThunk('weather/getWeathet', prop => {
  return getApiWether(prop);
});
