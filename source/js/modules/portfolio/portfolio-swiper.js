import {swiper} from '../swiper/swiper';

const mobileBreakpoint = window.matchMedia('(max-width: 767px)');
const tabletBreakpoint = window.matchMedia('(min-width: 768px) and (max-width: 1279px)');

const portfolioContainer = document.querySelector('.portfolio');
const portfolioSwiperList = portfolioContainer.querySelector('[data-list="portfolio-swiper-list"]');
const swiperContainers = portfolioContainer.querySelectorAll('.swiper');

let swipers = [];

const breakPointChecker = () => {
  if (mobileBreakpoint.matches) {
    portfolioSwiperList.classList.add('portfolio__swiper-list');
    portfolioSwiperList.classList.remove('portfolio__list');

    swiperContainers.forEach((swiperContainer) => {
      const currentSwiper = swiper(swiperContainer);
      currentSwiper.initSwiper();
      swipers.push(currentSwiper);
    });
  }

  if (tabletBreakpoint.matches) {

    swipers.forEach((currentSwiper) => {
      currentSwiper.destroy();
    });
    swipers = [];

    portfolioSwiperList.classList.add('portfolio__list');
    portfolioSwiperList.classList.remove('portfolio__swiper-list');
  }
};

const initPortfolioSwiper = () => {
  if (window.innerWidth >= 768) {
    portfolioSwiperList.classList.add('portfolio__list');
    portfolioSwiperList.classList.remove('portfolio__swiper-list');
  }

  if (window.innerWidth <= 767) {
    swiperContainers.forEach((swiperContainer) => {
      const currentSwiper = swiper(swiperContainer);
      currentSwiper.initSwiper();
      swipers.push(currentSwiper);
    });
  }


  mobileBreakpoint.addEventListener('change', breakPointChecker);


  breakPointChecker();
};

export {initPortfolioSwiper};
