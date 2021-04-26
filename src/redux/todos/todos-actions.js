import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

const addTodo = createAction('todos/add', text => ({
  payload: {
    id: shortid.generate(),
    text,
    completed: false,
  },
}));

const deleteTodo = createAction('todos/delete');

const changeFilter = createAction('todos/changeFilter');

const toggleCompleted = createAction('todos/toggleCompleted');

// eslint-disable-next-line import/no-anonymous-default-export
export default { addTodo, deleteTodo, changeFilter, toggleCompleted };
