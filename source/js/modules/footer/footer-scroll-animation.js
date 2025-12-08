import {scrollTrigger} from '../scroll-trigger/scroll-trigger';
import {debounce} from '../../utils/debounce';

const footerTitle = document.querySelector('.footer__title');

const footerTitleArray = Array.from(footerTitle.children);

const ANIMATION_VIEWPORT_HEIGHT = 95;
const ANIMATION_DELAY = 100;

const footerAnimation = (delay) => {

  footerTitleArray.forEach((titleWord, i) => {
    setTimeout(()=>{

      titleWord.style.transform = 'translateY(0)';
      titleWord.style.opacity = '1';

    }, i * delay);
  });
};


const initFooterAnimation = () => {
  const checkTrigger = scrollTrigger(footerTitle, ANIMATION_VIEWPORT_HEIGHT);
  let animationFrame = null;

  const handleScroll = () => {

    if (checkTrigger()) {
      footerAnimation(ANIMATION_DELAY);

    } else {
      footerTitleArray.forEach((titleWord) => {
        titleWord.style.transform = 'translateY(40px)';
        titleWord.style.opacity = '0';
      });
    }
  };

  const HandleScroll = () => {
    if (animationFrame) {

      cancelAnimationFrame(animationFrame);
    }
    animationFrame = requestAnimationFrame(handleScroll);
  };

  const debouncedHandleScroll = debounce(HandleScroll, 10);
  debouncedHandleScroll();

  window.addEventListener('scroll', debouncedHandleScroll);

};

export {initFooterAnimation};
