const carouselScroll = () => {
  const carouselContainer = document.querySelectorAll('.carousel__container');

  const nextButton = document.querySelectorAll('.next-button');
  const prevButton = document.querySelectorAll('.prev-button');

  const containerScroll = (direction, n) => {
    if (direction !== 'next' && direction !== 'prev') return '';
    if (direction === 'next') {
      carouselContainer[n].scrollLeft += 300;
      return carouselContainer[n].scrollLeft;
    }
    carouselContainer[n].scrollLeft -= 300;
    return carouselContainer[n].scrollLeft;
  };

  for (let n = 0; n < nextButton.length; n += 1) {
    nextButton[n].addEventListener('click', () => {
      containerScroll('next', n);
    });
  }

  for (let n = 0; n < prevButton.length; n += 1) {
    prevButton[n].addEventListener('click', () => {
      containerScroll('prev', n);
    });
  }
};

export default carouselScroll;
