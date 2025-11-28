
import {initMenuToggle} from './modules/burger-menu/burger-menu';

window.addEventListener('DOMContentLoaded', () => {
  initMenuToggle();
  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {

  });
});
