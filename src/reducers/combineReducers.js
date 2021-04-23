import { combineReducers } from 'redux';
import moviesReducer from './movies.js';

export default combineReducers({
  movies: moviesReducer,
});
