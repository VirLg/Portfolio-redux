const { createSlice } = require('@reduxjs/toolkit');
const { thunkLogin } = require('./thunk');
const initialState = {
  access_token: '',
  isLoading: false,
  error: '',
};
const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.access_token = action.payload.access_token;
};
const handlePending = state => {
  state.isLoading = true;
  state.error = '';
};
const handleRejected = (state, { error }) => {
  state.isLoading = false;
  state.error = error.message;
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(thunkLogin.fulfilled, handleFulfilled)
      .addMatcher(({ type }) => type.endsWith('/pending'), handlePending)
      .addMatcher(({ type }) => type.endsWith('/rejected'), handleRejected);
  },
});
export const authReducer = authSlice.reducer;
