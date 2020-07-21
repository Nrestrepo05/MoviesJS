const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const movieCard = (movie) => {
  const view = `
    <a href="/MoviesJS/movies/${movie.id}">
      <div class="movie-card">
        <div class="movie-card__info">
          <h3 class="movie-card__">${movie.title}</h3>
          <span class="movie-card__rating">⭐${movie.vote_average}</span>
        </div>
      <img class="movie-card__image" src="${IMG_URL}${movie.poster_path}" alt="${movie.title}"/>
      </div>
    </a>
  `;
  return view;
};

export default movieCard;
