
const btnContainer = document.querySelector('.header__star-container');
const [favoriteCount, favoriteBtn] = btnContainer.children;


const initFavoriteButton = () => {
  let currentCount = parseInt(favoriteCount.textContent, 10);

  favoriteBtn.addEventListener('click', () => {
    const isActive = favoriteBtn.classList.contains('is-active');

    favoriteBtn.classList.toggle('is-active');

    if (isActive) {
      currentCount -= 1;
    } else {
      currentCount += 1;
    }

    favoriteCount.textContent = currentCount;
  });
};

export {initFavoriteButton};


