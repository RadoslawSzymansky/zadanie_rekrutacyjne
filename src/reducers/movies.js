import {
  FETCH_MOVIES_LOADING,
  FETCH_MOVIES_FAILED,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIE_LOADING,
  FETCH_MOVIE_FAILED,
  FETCH_MOVIE_SUCCESS,
} from '../actions/types';

const initialState = { 
  moviesList: [],
  moviesAreFailed: false,
  moviesAreLoading: false,
  movieIsFailed: false,
  movieIsLoading: false
};

export default function (state = initialState, action) {
  switch (action.type) {

    case FETCH_MOVIES_LOADING:
      return {
        ...state,
        moviesAreLoading: true
      };

    case FETCH_MOVIES_SUCCESS:
      return {
        ...state, 
        moviesList: action.payload.results,
        moviesAreLoading: false
      };

    case FETCH_MOVIES_FAILED:
      return {
        ...state,
        moviesList: [],
        moviesAreLoading: false,
        moviesAreFailed: true
      };

    case FETCH_MOVIE_LOADING:
      return {
        ...state,
        movieIsLoading: true
      };

    case FETCH_MOVIE_SUCCESS:
      return {
        ...state, 
        movieIsLoading: false,
        movies: state.moviesList.push(action.payload)
      };

    case FETCH_MOVIE_FAILED:
      return {
        ...state,
        moviesList: [],
        movieIsLoading: false,
        movieIsFailed: true,
        moviesAreFailed: true
      };

    default:
      return state;
  };
};