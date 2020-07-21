// Lib
import page from 'page';
// Pages
import Home from '../pages/Home';
import MovieDetail from '../pages/MovieDetail';
import Error404 from '../pages/Error404';
// Utils
import carouselScroll from '../utils/carouselScroll';

const router = async () => {
  const main = null || document.getElementById('main');

  page('/MoviesJS/', async () => {
    main.innerHTML = await Home();
    carouselScroll();
  });

  page('/MoviesJS/movies/:id', async (context) => {
    const movieId = context.params.id;
    main.innerHTML = await MovieDetail(movieId);
    carouselScroll();
  });

  page('*', () => {
    main.innerHTML = Error404();
  });

  page();
};

export default router;
