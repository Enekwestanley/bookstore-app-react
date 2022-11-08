import { configureStore, combineReducers } from 'redux';
import checkStatusReducer from './categories/Categories';
import bookReducer from './books/books';

const rootReducer = combineReducers({
  books: bookReducer,
  status: checkStatusReducer,
});

const bookStore = configureStore(rootReducer);

export default bookStore;
