import {scrollTrigger} from '../scroll-trigger/scroll-trigger';
import {debounce} from '../../utils/debounce';

const ANIMATION_VIEWPORT_HEIGHT = 70;

const ANIMATION_PARAMS = {
  imagesSequenceDelay: 200,
  subtitleDelay: 500,
  descriptionDelay: 300,
  linkDelay: 200,
  titleStartDelay: 300,
};

const bannerList = document.querySelector('.banner__cards-list');
const firstBanner = bannerList.querySelector('.banner-card--card-1');
const imagesList = firstBanner.querySelector('.banner-card__images-list');
const titleEl = firstBanner.querySelector('.banner-card__title-container');

const [subtitle, title, description, link] = Array.from(titleEl.children);
const [img1, img2, img3, img4] = Array.from(imagesList.children);


const imagesAnimation = () => {
  const orderAnimation = [img2, img1, img4, img3];

  orderAnimation.forEach((image, index) => {
    setTimeout(() => {
      image.style.transform = 'translateY(0) scale(1)';
      image.style.opacity = '1';
    }, index * ANIMATION_PARAMS.imagesSequenceDelay);
  });
};

const titleAnimation = () => {
  setTimeout(() => {
    subtitle.style.opacity = '1';
  }, ANIMATION_PARAMS.subtitleDelay);
  title.style.opacity = '1';
  setTimeout(() => {
    description.style.opacity = '1';
  }, ANIMATION_PARAMS.descriptionDelay);
  setTimeout(() => {
    link.style.opacity = '1';
    link.style.transform = 'translateY(0)';
  }, ANIMATION_PARAMS.linkDelay);
};

const initBannerScrollAnimation = () => {
  const checkTrigger = scrollTrigger(bannerList, ANIMATION_VIEWPORT_HEIGHT);


  const handleScroll = () => {
    if (checkTrigger()) {
      imagesAnimation();
      setTimeout(() => {
        titleAnimation();
      }, ANIMATION_PARAMS.titleStartDelay);
      window.removeEventListener('scroll', debouncedHandleScroll);
    }
  };
  const debouncedHandleScroll = debounce(handleScroll, 10);


  window.addEventListener('scroll', debouncedHandleScroll);
};

export {initBannerScrollAnimation};
