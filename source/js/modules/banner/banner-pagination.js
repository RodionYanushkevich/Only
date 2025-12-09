
const bannersList = document.querySelector('.banner__cards-list');
const bannersListItem = document.querySelectorAll('.banner__cards-list-item');


const bullets = document.querySelectorAll('.banner__pagination-bullet');
const TRANSITION_DURATION = 300;

let currentIndex = 0;

const bannersClones = [];

const cloneBanners = () =>{
  for (let i = 0; i < 2; i++) {
    const bannerClone = bannersListItem[1].cloneNode(true);
    bannersClones.push(bannerClone);
  }

  for (let i = 0; i < bannersClones.length; i++) {
    bannersList.appendChild(bannersClones[i]);
  }

};


const initBannerBulletPagination = () => {
  cloneBanners();
  const banners = document.querySelectorAll('.banner-card');

  banners.forEach((el)=>{
    el.style.display = 'none';
    el.style.opacity = '0';
  });

  banners[0].style.display = 'block';
  banners[0].style.opacity = '1';


  const switchBanner = (newIndex) => {

    const currentBanner = banners[currentIndex];
    const newBanner = banners[newIndex];

    currentBanner.style.opacity = '0';

    setTimeout(() => {
      currentBanner.style.display = 'none';


      newBanner.style.display = 'block';

      setTimeout(() => {
        newBanner.style.opacity = '1';
      }, TRANSITION_DURATION);

      bullets[currentIndex].classList.remove('is-active');
      bullets[newIndex].classList.add('is-active');

      currentIndex = newIndex;

    }, TRANSITION_DURATION);
  };

  bullets[0].classList.add('is-active');


  bullets.forEach((bullet, index) => {
    bullet.addEventListener('click', () => {
      switchBanner(index);
    });
  });
};

export {initBannerBulletPagination};
