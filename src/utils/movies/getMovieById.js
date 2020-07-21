const API_URL = 'https://api.themoviedb.org/3/movie/';
const API_KEY = '28b7982e5ad32440d68f17373ec7874d';

const getMovieById = async (id) => {
  try {
    const response = await fetch(`${API_URL}${id}?api_key=${API_KEY}`);
    const movie = await response.json();
    return movie;
  } catch {
    return null;
  }
};

export default getMovieById;
