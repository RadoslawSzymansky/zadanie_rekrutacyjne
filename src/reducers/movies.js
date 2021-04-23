import {
  FETCH_MOVIES_LOADING,
  FETCH_MOVIES_FAILED,
  FETCH_MOVIES_SUCCESS,
} from '../actions/types';

const initialState = { 
  moviesList: [],
  moviesAreFailed: false,
  moviesAreLoading: false
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
        moviesList: action.payload,
        moviesAreLoading: false

      };

    case FETCH_MOVIES_FAILED:

      return {
        ...state,
        moviesList: [],
        moviesAreLoading: false,
        moviesAreFailed: true
      };
    default:
      return state;
  };
};