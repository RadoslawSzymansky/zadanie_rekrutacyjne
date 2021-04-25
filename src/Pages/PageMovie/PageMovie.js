import React from 'react';
import {
  useParams
} from "react-router-dom";

const PageMovie = ({ fetchMovie, moviesList, movieIsLoading, movieIsFailed }) => {
  let { movieId } = useParams();

  !moviesList.contains( movie => movie.episode_id == movieId ) ? fetchMovie(movieId) : null;

  if (movieIsLoading) {
    return <Spinner />
  } else if (movieIsFailed) {
    return <div>Sorry, there was an error. Please reload page to try again.</div>
  } else if (!movieIsFailed) {
    return <>
      Movie
    </>
  }
};

export default PageMovie;