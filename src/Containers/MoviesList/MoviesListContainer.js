import { connect } from 'react-redux';
import { fetchMovies } from '../../actions/moviesActions';
import MoviesList from './MoviesList';

const mapStateToProps = ({movies}) => ({
  moviesList: movies.moviesList,
  moviesAreFailed: movies.moviesAreFailed,
  moviesAreLoading: movies.moviesAreLoading
});

const mapDispatchToProps = (dispatch) => ({
  fetchMovies: () => dispatch(fetchMovies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
