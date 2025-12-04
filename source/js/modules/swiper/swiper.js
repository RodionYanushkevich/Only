const MIN_SWIPE_DISTANCE = 50;

const initSwiper = (container) => {
  const wrapper = container.querySelector('ul');
  const slides = wrapper.querySelectorAll(':scope > li');

  let startX = 0;
  let currentIndex = 0;
  const totalSlides = slides.length;

  wrapper.classList.add('swiper-wrapper');
  slides.forEach((slide) => slide.classList.add('swiper-slide'));

  const updateView = () => {
    const move = -currentIndex * 100;
    wrapper.style.transform = `translateX(${move}%)`;
  };

  const nextSlide = () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateView();
  };

  const prevSlide = () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateView();
  };

  const handleTouchStart = (e) => {
    startX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;

    if (Math.abs(diff) > MIN_SWIPE_DISTANCE) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };


  updateView();
  container.addEventListener('touchstart', handleTouchStart);
  container.addEventListener('touchend', handleTouchEnd);

  return {
    destroy: () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchend', handleTouchEnd);
      wrapper.classList.remove('swiper-wrapper');

      slides.forEach((slide) => {
        slide.classList.remove('swiper-slide');
      });

      wrapper.style.transform = '';
    },
  };
};


export {initSwiper};
