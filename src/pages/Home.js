// Utils
import getTrendingMovies from '../utils/movies/getTrendingMovies';
import getPopularMovies from '../utils/movies/getPopularMovies';
// templates
import somethingWasWrong from './somethingWasWrong';
// Components
import carousel from '../components/carousel';

const Home = async () => {
  const trending = await getTrendingMovies();
  const popular = await getPopularMovies();
  if (trending == null || popular == null) return somethingWasWrong();
  const view = `
    ${carousel(trending, 'Trending Movies')}
    ${carousel(popular, 'Popular Movies')}
  `;
  return view;
};

export default Home;
