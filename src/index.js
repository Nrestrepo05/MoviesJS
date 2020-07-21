import router from './routes';
import './assets/sass/main.scss';

window.addEventListener('load', async () => {
  await router();
});
