const scrollTrigger = (el, animationVieportHeight) => {

  const checkTrigger = () => {
    const percent = 100 - animationVieportHeight;
    const elTop = el.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;

    const appearancePercent = ((viewportHeight - elTop) / viewportHeight) * 100;

    return appearancePercent >= percent;
  };

  return checkTrigger;
};
export {scrollTrigger};
