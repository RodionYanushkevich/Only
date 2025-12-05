import {swiper} from '../swiper/swiper';

const mobileBreakpoint = window.matchMedia('(max-width: 767px)');
const tabletBreakpoint = window.matchMedia('(min-width: 768px) and (max-width: 1279px)');
const desktopBreakpoint = window.matchMedia('(min-width: 1280px)');

const projectsSwiperContainer = document.querySelector('.projects__slides');
const projectsbuttonsContainer = document.querySelector('.projects__pagination-buttons-container');

let currentSwiper = null;

const breakPointChecker = () => {
  if (!currentSwiper) {
    currentSwiper = swiper(projectsSwiperContainer, projectsbuttonsContainer);
    currentSwiper.initSwiper();
  } else {
    currentSwiper.update();
  }
};

const initProjectsSwiper = () => {
  mobileBreakpoint.addEventListener('change', breakPointChecker);
  tabletBreakpoint.addEventListener('change', breakPointChecker);
  desktopBreakpoint.addEventListener('change', breakPointChecker);

  breakPointChecker();
};

export {initProjectsSwiper};
