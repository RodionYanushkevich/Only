
import {initMenuToggle} from './modules/burger-menu/burger-menu';
import {initProjectsSwiper} from './modules/projects/projects-swiper';
import {initPortfolioSwiper} from './modules/portfolio/portfolio-swiper';
import {initAwardsSwiper} from './modules/awards/awards-swiper';

window.addEventListener('DOMContentLoaded', () => {
  initMenuToggle();
  // initSwiper();
  initPortfolioSwiper();
  initProjectsSwiper();
  initAwardsSwiper();
  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {

  });
});
