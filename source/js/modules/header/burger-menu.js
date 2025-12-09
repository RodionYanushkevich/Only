
const breakpoint = window.matchMedia('(max-width: 1279px)');

const initMenuToggle = () => {
  const navigation = document.querySelector('.main-nav');
  const navigationButton = document.querySelector('.main-nav__toggle');

  const header = document.querySelector('.header');
  const headerLogo = document.querySelector('.header__logo');

  let isOpen = false;

  const openNavigationMenu = () => {
    navigationButton.classList.add('is-active');
    navigationButton.classList.add('is-active');
    navigation.classList.add('is-active');
    headerLogo.classList.add('is-active');
    header.classList.add('is-active');
    document.body.classList.add('scroll-lock');
    document.body.classList.add('body--modal-is-open');
    isOpen = true;

  };

  const closeNavigationMenu = () => {
    navigationButton.classList.remove('is-active');
    navigation.classList.remove('is-active');
    headerLogo.classList.remove('is-active');
    header.classList.remove('is-active');
    document.body.classList.remove('scroll-lock');
    document.body.classList.remove('body--modal-is-open');
    isOpen = false;
  };


  navigationButton.addEventListener('click', ()=>{
    if (!isOpen) {
      openNavigationMenu();
      return;
    }
    closeNavigationMenu();
  });

  const handleOutsideClick = (e) => {
    if (e.target === document.body) {
      closeNavigationMenu();
    }
  };

  const breakpointChecker = () => {
    let resizeTimer;
    navigation.children[0].classList.add('no-transition');

    clearTimeout(resizeTimer);
    closeNavigationMenu();

    setTimeout(() => {
      navigation.children[0].classList.remove('no-transition');
    }, 100);
  };


  document.addEventListener('click', handleOutsideClick);
  breakpoint.addEventListener('change', breakpointChecker);
};

export {initMenuToggle};


