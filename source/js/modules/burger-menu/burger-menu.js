
const breakpoint = window.matchMedia('(min-width: 1279px)');
// const wrapper = document.querySelector('.wrapper');

const initMenuToggle = () => {
  const navigation = document.querySelector('.main-nav__list');
  const navigationButton = document.querySelector('.main-nav__toggle');
  const headerLogo = document.querySelector('.header__logo');

  let isOpen = false;

  const openNavigationMenu = () => {
    navigationButton.classList.add('is-active');
    navigation.classList.add('is-active');
    headerLogo.classList.add('is-active');
    // document.body.classList.add('scroll-lock');
    // wrapper.classList.add('wrapper--modal-is-open');
    isOpen = true;

  };

  const closeNavigationMenu = () => {
    navigationButton.classList.remove('is-active');
    navigation.classList.remove('is-active');
    headerLogo.classList.remove('is-active');
    // document.body.classList.remove('scroll-lock');
    // wrapper.classList.remove('wrapper--modal-is-open');
    isOpen = false;
  };


  navigationButton.addEventListener('click', ()=>{
    if (!isOpen) {
      openNavigationMenu();
      return;
    }
    closeNavigationMenu();
  });

  // const handleOutsideClick = (e) => {
  //   if (e.target === wrapper) {
  //     closeNavigationMenu();
  //   }
  // };

  const breakpointChecker = () => {
    let resizeTimer;
    navigation.classList.add('no-transition');

    clearTimeout(resizeTimer);
    closeNavigationMenu();

    resizeTimer = setTimeout(() => {
      navigation.classList.remove('no-transition');
    }, 100);
  };


  // document.addEventListener('click', handleOutsideClick);
  breakpoint.addEventListener('change', breakpointChecker);
};

export {initMenuToggle};


