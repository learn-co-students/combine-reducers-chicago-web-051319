import { combineReducers } from "redux";
import authorsReducer from './authorsReducer';
import booksReducer from './booksReducer';

export const rootReducer = combineReducers({
  authors: authorsReducer,
  books: booksReducer
});
