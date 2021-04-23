import React, { useEffect } from 'react';
import Spinner from '../../Components/Spinner/Spinner';

const MoviesList = ({fetchMovies, moviesList, moviesAreLoading, moviesAreFailed}) => {
  useEffect(() => {
    fetchMovies();
    }, []);

  if (moviesAreLoading) {
    return <Spinner />
  } else if (moviesAreFailed) {
    return <div>Sorry, there was an error. Please reload page to try again.</div>
  } else if (!moviesAreFailed) {
    console.log(moviesList);
    return <>
      {moviesList.map( movie => {
        return <div key={movie.episode_id} className="movie-item">
          {movie.title}
        </div>
      })}
    </>
  }
};

export default MoviesList;