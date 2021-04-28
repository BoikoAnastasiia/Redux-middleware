import { createAction } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:4040';

// const asyncActionCreator = args => dispatch => {};

const addTodo = text => dispatch => {
  const todo = { text, completed: false };

  dispatch({ type: 'todos/addTodoRequest' });

  axios
    .post('/todos', todo)
    .then(({ data }) =>
      dispatch({ type: 'todos/addTodoSuccess', payload: data }),
    )
    .catch(error => dispatch({ type: 'todos/addTodoError', payload: error }));
};

// const addTodo = createAction('todos/add', text => ({
//   payload: {
//     id: shortid.generate(),
//     text,
//     completed: false,
//   },
// }));

const deleteTodo = createAction('todos/delete');

const changeFilter = createAction('todos/changeFilter');

const toggleCompleted = createAction('todos/toggleCompleted');

// eslint-disable-next-line import/no-anonymous-default-export
export default { addTodo, deleteTodo, changeFilter, toggleCompleted };
