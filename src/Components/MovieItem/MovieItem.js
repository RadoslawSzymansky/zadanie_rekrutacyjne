import React from 'react';
import { Link } from 'react-router-dom';
const MovieItem = ({ id, title }) => {
  return (
    <div className="movie-item" key={id}>
      <Link to={`movies/${id}`} >
        <img src={`/img/movies/${id}.jpg`} />
      </Link>
      <h3>Star Wars: {title}</h3>
      <Link className="btn" to={`movies/${id}`} >
        See movie
      </Link>
    </div>
  );
};

export default MovieItem;