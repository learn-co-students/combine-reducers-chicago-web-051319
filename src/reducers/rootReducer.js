import { combineReducers } from "redux";
import { createStore } from 'redux';
import authorsReducer from './authorsReducer';
import booksReducer from './booksReducer';

const rootReducer = combineReducers({
  authors: authorsReducer,
  books: booksReducer
});

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
