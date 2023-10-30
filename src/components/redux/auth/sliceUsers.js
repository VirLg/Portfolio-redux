import { createSlice } from '@reduxjs/toolkit';
import { getProfileThunk, thunkLogin } from './thunkUsers';

const initialState = {
  access_token: '',
  isLoading: false,
  error: '',
  profile: null,
};
const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.access_token = action.payload.access_token;
};
const handleFulfilledProfile = (state, action) => {
  state.isLoading = false;
  state.profile = action.payload;
};
const handlePending = state => {
  state.isLoading = true;
  state.error = '';
};
const handleRejected = (state, { error, payload }) => {
  state.isLoading = false;
  state.error = payload ?? error.message;
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut: state => {
      state.access_token = '';
      state.isLoading = false;
      state.error = '';
      state.profile = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(thunkLogin.fulfilled, handleFulfilled)
      .addCase(getProfileThunk.fulfilled, handleFulfilledProfile)
      .addMatcher(({ type }) => type.endsWith('/pending'), handlePending)
      .addMatcher(({ type }) => type.endsWith('/rejected'), handleRejected);
  },
});
export const authReducer = authSlice.reducer;
export const { logOut } = authSlice.actions;
