const portfolioContainer = document.querySelector('.portfolio');
const portfolioSwiperList = portfolioContainer.querySelector('[data-list="portfolio-swiper-list"]');


const mobileBreakpoint = window.matchMedia('(max-width: 767px)');
const tabletBreakpoint = window.matchMedia('(min-width: 768px) and (max-width: 1279px)');
// const desktopBreakpoint = window.matchMedia('(min-width: 1440px)');

const breakPointChecker = () => {
  if (mobileBreakpoint.matches) {
    portfolioSwiperList.classList.add('portfolio__swiper-list');
    portfolioSwiperList.classList.remove('portfolio__list');
  }
  if (tabletBreakpoint.matches) {
    portfolioSwiperList.classList.add('portfolio__list');
    portfolioSwiperList.classList.remove('portfolio__swiper-list');
  }

};


const initPortfolioSwiper = () => {


  mobileBreakpoint.addEventListener('change', breakPointChecker);
  breakPointChecker();

};

export {initPortfolioSwiper};
