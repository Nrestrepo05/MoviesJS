const API_URL = 'https://api.themoviedb.org/3/trending/movie/day';
const API_KEY = '28b7982e5ad32440d68f17373ec7874d';

const getTrendingMovies = async () => {
  try {
    const response = await fetch(`${API_URL}?api_key=${API_KEY}`);
    const movies = await response.json();
    return movies;
  } catch {
    return null;
  }
};

export default getTrendingMovies;
