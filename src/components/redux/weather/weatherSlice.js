import { wetherThunk } from './weatherThunk';

const { createSlice } = require('@reduxjs/toolkit');

const handleGetFulfilled = (state, action) => {
  state.isLoading = false;
};

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, { error, payload }) => {
  state.isLoading = false;
  state.error = payload ?? error.message;
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState: { weaterAll: null, isLoading: false, error: '' },
  extraReducers: builder => {
    builder
      .addCase(wetherThunk.fulfilled, handleGetFulfilled)

      .addMatcher(({ type }) => type.endsWith('/pending'), handlePending)
      .addMatcher(({ type }) => type.endsWith('/rejected'), handleRejected);
  },
});
export const weatherReducer = weatherSlice.reducer;
