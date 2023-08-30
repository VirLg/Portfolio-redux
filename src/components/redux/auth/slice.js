const { createSlice } = require('@reduxjs/toolkit');
const initialState = {
  access_token: '',
  isLoading: false,
  error: '',
};
const authSlice = createSlice({
  name: auth,
  initialState,
  extraReducers: {},
});
