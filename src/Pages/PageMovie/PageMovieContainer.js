import { connect } from 'react-redux';
import { fetchMovie } from '../../actions/moviesActions';
import PageMovie from './PageMovie';

const mapStateToProps = ({movies}) => ({
  moviesList: movies.moviesList,
  movieIsFailed: movies.moviesAreFailed,
  movieIsLoading: movies.moviesAreLoading
});

const mapDispatchToProps = (dispatch) => ({
  fetchMovie: (id) => dispatch(fetchMovie(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PageMovie);
