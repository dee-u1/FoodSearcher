import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchTasks = createAsyncThunk('todo/fetchTasks', async () => {
  const response = await axios.get('/todos');
  return response.data;
});

export const addTask = createAsyncThunk('todo/addTask', async (title) => {
  const newTask = {
    title,
    completed: false,
  };

  const response = await axios.post('/todos', newTask);
  return response.data;
});

export const removeTask = createAsyncThunk('todo/removeTask', async (id) => {
  const response = await axios.delete(`/todos/${id}`);
  return response.data;
});

export const clearTask = createAsyncThunk('todo/clearTask', async () => {
  const response = await axios.post(`/clear/todos`);
  return response.data;
});

export const completeTask = createAsyncThunk('todo/completeTask', async (id) => {
  const response = await axios.put(`/todos/${id}`, {completed: true})
  return response.data;
});

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    tasks: []
  },
  reducers: {
  },
  extraReducers: {
    [fetchTasks.fulfilled]: (state, action) => {
      state.tasks = action.payload;
    },
    [fetchTasks.error]: (state, action) => {
      alert("Failed to get Tasks");
    },
    [addTask.fulfilled]: (state, action) => {
      state.tasks = [action.payload, ...state.tasks,];
    },
    [addTask.error]: (state, action) => {
      alert("Failed to add Task");
    },
    [removeTask.fulfilled]: (state, action) => {
      state.tasks = action.payload;
    },
    [removeTask.error]: (state, action) => {
      alert("Failed to Delete Task");
    },
    [clearTask.fulfilled]: (state, action) => {
      state.tasks = action.payload;
    },
    [clearTask.error]: (state, action) => {
      alert("Could not clear tasks");
    },
    [completeTask.fulfilled]: (state, action) => {
      state.tasks = action.payload;
    },
    [completeTask.error]: (state, action) => {
      alert("Could not complete tasks");
    }
  }
});

export default todoSlice.reducer;