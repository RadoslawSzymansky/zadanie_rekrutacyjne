import React, { useEffect } from 'react';
import {
  useParams
} from "react-router-dom";
import Spinner from '../../Components/Spinner/Spinner';

import './PageMovie.less';

const PageMovie = ({ fetchMovies, moviesList, moviesAreLoading, moviesAreFailed }) => {
  let { movieId } = useParams();
  
  useEffect(() => {
    moviesList.length < 6 ? fetchMovies() : null;
  }, [moviesList])
  
  if (moviesAreLoading) {
    return <Spinner />
  } else if (moviesAreFailed) {
    return <div>Sorry, there was an error. Please reload page to try again.</div>
  } else if (!moviesAreFailed) {
    const movie = moviesList[movieId];

    return !movie ? (
      <div>Sorry, we have'nt found movie with this id..</div>
    ) : (
      <div className="movie-single container">
       <div className="movie-single__left">
         <img src={`/img/movies/${movieId}.jpg`} />
       </div>
       <div className="movie-single__right">
         <h1>{movie.title}</h1>  
         <p>{movie.opening_crawl}</p>
         <p>
           Director: {movie.director}
           <br></br>
           Producer: {movie.producer}
           <br></br>
           Release date: {movie.release_date}
           <br></br>
         </p>
       </div>
     </div>
    ) 
  }
};

export default PageMovie;