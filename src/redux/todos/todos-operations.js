import axios from 'axios';

import {
  addTodoRequest,
  addTodoSuccess,
  addTodoError,
  deleteTodoRequest,
  deleteTodoSuccess,
  deleteTodoError,
  toggleCompletedRequest,
  toggleCompletedSuccess,
  toggleCompletedError,
  fetchTodosRequest,
  fetchTodosSuccess,
  fetchTodosError,
} from './todos-actions';

axios.defaults.baseURL = 'http://localhost:4040';

const fetchTodos = () => dispatch => {
  dispatch(fetchTodosRequest());
  axios
    .get('/todos')
    .then(({ data }) => dispatch(fetchTodosSuccess(data)))
    .catch(error => dispatch(fetchTodosError(error)));
};

const addTodo = text => dispatch => {
  const todo = { text, completed: false };

  dispatch(addTodoRequest);

  axios
    .post('/todos', todo)
    .then(({ data }) => dispatch(addTodoSuccess(data)))
    .catch(error => dispatch(addTodoError(error)));
};

const deleteTodo = todoId => dispatch => {
  dispatch(deleteTodoRequest());
  axios
    .delete(`/todos/${todoId}`)
    .then(() => dispatch(deleteTodoSuccess(todoId)))
    .catch(error => dispatch(deleteTodoError(error)));
};

const toggleCompleted = ({ id, completed }) => dispatch => {
  const update = { completed };
  dispatch(toggleCompletedRequest());

  axios
    .patch(`/todos/${id}`, update)
    .then(({ data }) => dispatch(toggleCompletedSuccess(data)))
    .catch(error => dispatch(toggleCompletedError(error)));
};

export default { addTodo, deleteTodo, toggleCompleted, fetchTodos };
