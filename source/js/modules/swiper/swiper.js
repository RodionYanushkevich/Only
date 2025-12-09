const MIN_SWIPE_DISTANCE = 50;
const BOUNCE_DISTANCE = 100;
const TRANS_DEFAULT = 200;

const sizeInRem = (sizeInPx, baseFontSize = 16) => {
  return `${sizeInPx / baseFontSize}rem`;
};

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
    if (!prevButton || !nextButton) {
      return;
    }

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
    if (!paginationContainer) {
      return;
    }

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
    const moveValue = -currentIndex * (containerWidth + gapPixels);
    const moveRem = sizeInRem(moveValue);
    wrapper.style.transform = `translateX(${moveRem})`;

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
      const moveValue = -currentIndex * (containerWidth + gapPixels);
      const moveRem = sizeInRem(moveValue);
      const bounceRem = sizeInRem(BOUNCE_DISTANCE);
      wrapper.style.transform = `translateX(calc(${moveRem} - ${bounceRem}))`;

      setTimeout(() => {
        wrapper.style.transform = `translateX(${moveRem})`;
      }, TRANS_DEFAULT);
      return currentIndex;
    }

    currentIndex = (currentIndex + 1) % totalSlides;
    updateView();
    return currentIndex;
  };

  const prevSlide = () => {
    if (currentIndex === 0) {
      const moveValue = -currentIndex * (containerWidth + gapPixels);
      const moveRem = sizeInRem(moveValue);
      const bounceRem = sizeInRem(BOUNCE_DISTANCE);
      wrapper.style.transform = `translateX(calc(${moveRem} + ${bounceRem}))`;

      setTimeout(() => {
        wrapper.style.transform = `translateX(${moveRem})`;
      }, TRANS_DEFAULT);
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
      window.removeEventListener('resize', updateSizes);

      if (prevButton && nextButton) {
        prevButton.removeEventListener('click', prevSlide);
        nextButton.removeEventListener('click', nextSlide);
      }

      wrapper.classList.remove('swiper-wrapper');
      wrapper.style.transform = '';

      slides.forEach((slide) => {
        slide.classList.remove('swiper-slide');
      });
    },
  };
};

export {swiper};
