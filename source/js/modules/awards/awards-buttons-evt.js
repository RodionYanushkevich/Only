const buttons = document.querySelectorAll('.awards__tournaments-button');

const inintAwardsBtnEvents = () => {
  buttons.forEach((button)=>{
    button.addEventListener('click', ()=>{
      buttons.forEach((btn)=>{
        btn.classList.remove('is-active');
      });

      button.classList.add('is-active');
    });
  });
};

export {inintAwardsBtnEvents};
