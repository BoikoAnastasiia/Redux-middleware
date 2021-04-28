import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addTodoRequest,
  addTodoSuccess,
  addTodoError,
  deleteTodo,
  changeFilter,
  deleteTodoRequest,
  deleteTodoError,
  deleteTodoSuccess,
  toggleCompletedRequest,
  toggleCompletedSuccess,
  toggleCompletedError,
} from './todos-actions';

const items = createReducer([], {
  [addTodoSuccess]: (state, { payload }) => [...state, payload],
  [deleteTodoSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [toggleCompletedSuccess]: (state, { payload }) =>
    state.map(todo => (todo.id === payload.id ? payload : todo)),
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [addTodoRequest]: () => true,
  [addTodoSuccess]: () => false,
  [addTodoError]: () => false,
  [deleteTodoRequest]: () => true,
  [deleteTodoSuccess]: () => false,
  [deleteTodoError]: () => false,
  [toggleCompletedRequest]: () => true,
  [toggleCompletedSuccess]: () => false,
  [toggleCompletedError]: () => false,
});

export default combineReducers({
  items,
  filter,
  loading,
});
