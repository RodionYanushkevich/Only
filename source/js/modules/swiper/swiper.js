const MIN_SWIPE_DISTANCE = 50;
const BOUNCE_DISTANCE = 100;

const swiper = (container, paginationContainer = null) => {
  const wrapper = container;
  let startX = 0;
  let currentIndex = 0;

  let slides = Array.from(wrapper.children);
  let totalSlides = slides.length;

  let containerWidth = container.clientWidth;
  let gapValue = window.getComputedStyle(wrapper).columnGap;
  let gapPixels = parseFloat(gapValue);

  let prevButton = null;
  let nextButton = null;


  const updateButtons = () => {

    if (currentIndex === 0) {
      prevButton.disabled = true;
    } else {
      prevButton.disabled = false;
    }

    if (currentIndex === totalSlides - 1) {
      nextButton.disabled = true;
    } else {
      nextButton.disabled = false;
    }
  };

  const initSwiper = () => {
    wrapper.classList.add('swiper-wrapper');
    slides.forEach((slide) => {
      slide.classList.add('swiper-slide');
    });
  };

  const initPagination = () => {
    const buttons = Array.from(paginationContainer.children);
    [prevButton, nextButton] = buttons;

    updateButtons();

    prevButton.addEventListener('click', () => {
      prevSlide();

    });
    nextButton.addEventListener('click', () => {
      nextSlide();

    });
  };

  const updateView = () => {
    const move = -currentIndex * (containerWidth + gapPixels);
    wrapper.style.transform = `translateX(${move}px)`;
    if (paginationContainer) {
      updateButtons();
    }
  };

  const updateSizes = () => {
    containerWidth = container.clientWidth;
    gapValue = window.getComputedStyle(wrapper).columnGap;
    gapPixels = parseFloat(gapValue);

    updateView();
  };

  if (paginationContainer) {
    initPagination();
  }

  const nextSlide = () => {
    if (currentIndex === totalSlides - 1) {
      const move = -currentIndex * (containerWidth + gapPixels);
      wrapper.style.transform = `translateX(${move - BOUNCE_DISTANCE}px)`;

      setTimeout(() => {
        wrapper.style.transform = `translateX(${move}px)`;
      }, 200);
      return currentIndex;
    }

    currentIndex = (currentIndex + 1) % totalSlides;
    updateView();
    return currentIndex;
  };

  const prevSlide = () => {
    if (currentIndex === 0) {
      const move = -currentIndex * (containerWidth + gapPixels);
      wrapper.style.transform = `translateX(${move + BOUNCE_DISTANCE}px)`;
      setTimeout(() => {
        wrapper.style.transform = `translateX(${move}px)`;
      }, 200);
      return currentIndex;
    }

    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateView();
    return currentIndex;
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
  container.addEventListener('touchstart', handleTouchStart, {passive: true});
  container.addEventListener('touchend', handleTouchEnd, {passive: true});

  return {
    initSwiper,
    nextSlide,
    prevSlide,
    update: updateSizes,
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

export {swiper};
