import movieCard from './movieCard';

const carousel = (movies, title) => {
  const view = `
  <section class="carousel">
    <h2 class="carousel__title">${title}</h2>
    <div class="carousel__container" id="carousel-container">
      <div class="prev-button" id="prev-button"  ><</div>
        ${movies.results.map((movie) => `
          ${movieCard(movie)}
        `).join('')}
        <div class="next-button" id="next-button">></div>
      </div> 
    </div>
  </section>
  `;
  return view;
};

export default carousel;
