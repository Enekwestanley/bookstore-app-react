import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import checkStatusReducer from './categories/Categories';
import bookReducer, { getBooks } from './books/books';

const bookStore = configureStore({
  reducer: {
    books: bookReducer,
    status: checkStatusReducer,
  },
}, applyMiddleware(thunk));
bookStore.dispatch(getBooks());

export default bookStore;
