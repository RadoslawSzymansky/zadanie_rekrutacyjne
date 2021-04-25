import React, { useEffect } from 'react';
import {
  useParams
} from "react-router-dom";
import Spinner from '../../Components/Spinner/Spinner';

const PageMovie = ({ fetchMovie, moviesList, movieIsLoading, movieIsFailed }) => {
  let { movieId } = useParams();
  
  useEffect(() => {
    !moviesList.includes( movie => movie.episode_id == movieId ) ? fetchMovie(movieId) : null;
  }, [])
  
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