import { createAsyncThunk } from '@reduxjs/toolkit';
import { getTodoApi, createTodoApi } from 'api/ApiTodo';

export const getTodoThunk = createAsyncThunk('todo/getTodo', () => {
  getTodoApi();
});
export const createTodoThunk = createAsyncThunk('todo/postTodo', () => {
  createTodoApi();
});
