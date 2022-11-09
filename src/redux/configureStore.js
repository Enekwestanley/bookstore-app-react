import { configureStore } from '@reduxjs/toolkit';
import checkStatusReducer from './categories/Categories';
import bookReducer from './books/books';

const bookStore = configureStore({
  reducer: {
    books: bookReducer,
    status: checkStatusReducer,
  },
});

export default bookStore;
