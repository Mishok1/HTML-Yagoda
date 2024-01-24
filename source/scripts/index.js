const nav = document.querySelector('.navigation');
const button = document.querySelector('.header__button');

button.classList.remove('header__button--no-js');

button.addEventListener('click', () => {
  if (nav.classList.contains('navigation--closed')) {
    nav.classList.remove('navigation--closed');
    nav.classList.add('navigation--opened');
    button.classList.remove('header__button--closed');
    button.classList.add('header__button--opened');
  } else {
    nav.classList.add('navigation--closed');
    nav.classList.remove('navigation--opened');
    button.classList.add('header__button--closed');
    button.classList.remove('header__button--opened');
  }
});

// Map

const map = document.querySelector('.contacts__image');

map.classList.remove('contacts__image--no-js');
