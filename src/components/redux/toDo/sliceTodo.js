import { createSlice } from '@reduxjs/toolkit';
import { getTodoThunk, createTodoThunk } from './thunkTodo';

const handleGetFulfilled = (state, action) => {
  state.isLoading = false;
};

const handleCreateFulfilled = (state, action) => {
  state.isLoading = false;
};

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, { error, payload }) => {
  state.isLoading = false;
  state.error = payload ?? error.message;
};

const todoSlice = createSlice({
  name: 'todo',
  initialState: { todo: null, isLoading: false, error: '' },

  extraReducers: builder => {
    builder
      .addCase(getTodoThunk.fulfilled, handleGetFulfilled)
      .addCase(createTodoThunk.fulfilled, handleCreateFulfilled)

      .addMatcher(({ type }) => type.endsWith('/pending'), handlePending)
      .addMatcher(({ type }) => type.endsWith('/rejected'), handleRejected);
  },
});
export const todoReducer = todoSlice.reducer;
