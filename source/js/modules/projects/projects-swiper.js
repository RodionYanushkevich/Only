import {initSwiper} from '../swiper/swiper';

const mobileBreakpoint = window.matchMedia('(max-width: 767px)');
const tabletBreakpoint = window.matchMedia('(min-width: 768px) and (max-width: 1279px)');
const projectsSwiperContainer = document.querySelector('.projects__slider-wrapper');

let currentSwiper = null;

const breakPointChecker = () => {
  if (mobileBreakpoint.matches) {

    currentSwiper = initSwiper(projectsSwiperContainer);
  }
  if (tabletBreakpoint.matches) {
    currentSwiper.destroy();

  }
};

const initProjectsSwiper = () => {
  breakPointChecker();

  mobileBreakpoint.addEventListener('change', breakPointChecker);
  tabletBreakpoint.addEventListener('change', breakPointChecker);
};

export {initProjectsSwiper};
