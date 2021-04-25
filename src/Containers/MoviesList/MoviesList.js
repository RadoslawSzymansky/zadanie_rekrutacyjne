import React, { useEffect } from 'react';
import Spinner from '../../Components/Spinner/Spinner';
import MovieItem from '../../Components/MovieItem/MovieItem';
import './MoviesList.less';

const MoviesList = ({fetchMovies, moviesList, moviesAreLoading, moviesAreFailed}) => {
  useEffect(() => {
    moviesList.length < 6 ? fetchMovies() : null;
  }, []);

  if (moviesAreLoading) {
    return <Spinner />
  } else if (moviesAreFailed) {
    return <div>Sorry, there was an error. Please reload page to try again.</div>
  } else if (!moviesAreFailed) {
    return <>
      {moviesList.map( ({ episode_id, title }) => {
        return <MovieItem key={episode_id} id={episode_id} title={title} />
      })}
    </>
  }
};

export default MoviesList;