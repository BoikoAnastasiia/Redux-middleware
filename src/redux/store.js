import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import todosReducer from './todos/todos-reducer';
import counterReducer from '../redux/counter';

// const myMiddleware = store => next => action => {
//   console.log("my middleware", action)
//   next(action)
// }

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),

  logger,
];

const store = configureStore({
  reducer: {
    todos: todosReducer,
    counter: counterReducer,
  },

  devTools: process.env.NODE_ENV === 'development',
});

// const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default store;
