let menuBurger = document.querySelector('.hamburger-toggle');
let menuBurgerItem = menuBurger.querySelectorAll('.hamburger-toggle__item');
let menuBg = document.querySelector('.header__wrapper');
let menuNav = menuBg.querySelector('.menu-nav__list');

function close() {
  for(let i = 0; i < menuBurgerItem.length; i++) {
    menuBurgerItem[i].classList.remove('hamburger-toggle__item_open');
  }
  menuBg.classList.remove('header__wrapper_bg-color');
  menuNav.classList.remove('menu-nav__list_open');
  menuNav.classList.add('menu-nav__list_close');
}
close();

menuBurger.addEventListener('click', function() {
  for(let i = 0; i < menuBurgerItem.length; i++) {
    menuBurgerItem[i].classList.toggle('hamburger-toggle__item_open');
  }
  menuBg.classList.toggle('header__wrapper_bg-color');
  menuNav.classList.toggle('menu-nav__list_open');
});