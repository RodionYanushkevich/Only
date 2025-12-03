
import {initMenuToggle} from './modules/burger-menu/burger-menu';
import {initPortfolioSwiper} from './modules/portfolio/portfolio-swiper';

window.addEventListener('DOMContentLoaded', () => {
  initMenuToggle();
  initPortfolioSwiper();
  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {

  });
});
