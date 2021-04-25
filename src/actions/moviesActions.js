import {
  FETCH_MOVIES_LOADING,
  FETCH_MOVIES_FAILED,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIE_LOADING,
  FETCH_MOVIE_FAILED,
  FETCH_MOVIE_SUCCESS,
} from './types';

import axios from 'axios';

export const fetchMovie = id => (dispatch) => {
  dispatch({
    type: FETCH_MOVIE_LOADING
  });

  console.log(id);

  axios.get(`https://swapi.dev/api/films/${id}`)
    .then(res => {
      dispatch({
        type: FETCH_MOVIE_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: FETCH_MOVIE_FAILED,
        payload: {
          msg: err
        }
      });
    });
};

export const fetchMovies = () => (dispatch) => {
  dispatch({
    type: FETCH_MOVIES_LOADING
  });

  axios.get(`https://swapi.dev/api/films/`)
    .then(res => {
      dispatch({
        type: FETCH_MOVIES_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: FETCH_MOVIES_FAILED,
        payload: {
          msg: err
        }
      });
    });
};