// Components
import carousel from '../components/carousel';
// Utils
import getMovieById from '../utils/movies/getMovieById';
import getRecommendedMovies from '../utils/movies/getRecommendedMovies';
// Error
import Error404 from './Error404';
// Assets
import netflixIcon from '../assets/images/netflix_logo.png';

const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const MovieDetail = async (movieId) => {
  const movie = await getMovieById(movieId);
  if (movie.status_code === 34) return Error404();
  const recommendedMovies = await getRecommendedMovies(movieId);
  const view = `
  <section class="movie-detail">
    <div class="movie-detail__main">
    <img class="movie__image" src="${IMG_URL}${movie.poster_path}" alt=""/>
    <div class="movie__info">
      <h1 class="movie__info--title">${movie.original_title}</h1>
      ${movie.tagline ? `<span class="movie__info--tagline">${movie.tagline}</span>` : ''}
      <p class="movie__info--description">${movie.overview}</p>
      ${movie.homepage ? `<a class="movie__info--homepage" href="${movie.homepage}" target="_blank" rel="noopener"><img class="movie__info--homepage-image" src="${netflixIcon}"></img></a>` : ''}
      </div>
    </div>
      <div class="recommended-movies">
        ${carousel(recommendedMovies, 'Recommended Movies')}
      </div>
  </section>
  `;
  return view;
};

export default MovieDetail;
