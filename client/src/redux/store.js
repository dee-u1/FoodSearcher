import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './reducers/todo-reducer';
import userReducer from './reducers/user-reducer';
import foodReducer from './reducers/food-reducer';
import searchReducer from './reducers/search-reducer';

export default configureStore({
  reducer: {
    todo: todoReducer,
    user: userReducer,
    foods: foodReducer,
    search: searchReducer
  },
});
