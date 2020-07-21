const API_URL = 'https://api.themoviedb.org/3/movie/';
const API_KEY = '28b7982e5ad32440d68f17373ec7874d';

const getRecommendedMovies = async (id) => {
  try {
    const response = await fetch(`${API_URL}${id}/recommendations?api_key=${API_KEY}`);
    const similarMovies = await response.json();
    return similarMovies;
  } catch {
    return null;
  }
};

export default getRecommendedMovies;
