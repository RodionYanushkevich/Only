import {swiper} from '../swiper/swiper';

const mobileBreakpoint = window.matchMedia('(max-width: 767px)');
const tabletBreakpoint = window.matchMedia('(min-width: 768px) and (max-width: 1279px)');
// const desktopBreakpoint = window.matchMedia('(min-width: 1280px)');

const awardsList = document.querySelector('.awards__cards-list');

let currentSwiper = null;

const breakPointChecker = () => {
  if (currentSwiper) {
    currentSwiper.destroy();
    currentSwiper = null;
  }

  if (mobileBreakpoint.matches) {
    currentSwiper = swiper(awardsList);
    currentSwiper.initSwiper();
  }

};

const initAwardsSwiper = () => {
  breakPointChecker();

  mobileBreakpoint.addEventListener('change', breakPointChecker);
  tabletBreakpoint.addEventListener('change', breakPointChecker);
};

export {initAwardsSwiper};
