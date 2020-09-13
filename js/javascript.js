
let menuBurger = document.querySelector('.hamburger-toggle');
let menuBurgerItem = menuBurger.querySelectorAll('.hamburger-toggle__item');
let menuBg = document.querySelector('.header__wrapper');
let menuNav = menuBg.querySelector('.menu-nav__list');

menuBurger.addEventListener('click', function() {
  for(let i = 0; i < menuBurgerItem.length; i++) {
    menuBurgerItem[i].classList.toggle('hamburger-toggle__item_open');
  }
  menuBg.classList.toggle('header__wrapper_bg-color');
  menuNav.classList.toggle('menu-nav__list_open');
});

// ------------------- П О П А П --------------------------

let popap = document.querySelector('.popap');
let openPopap = document.querySelectorAll('.link-popap');
let popapClose = popap.querySelector('.form-popap__button-close');
let formPopap = popap.querySelector('.form-popap'); 

  for(let i = 0; i < openPopap.length; i++) {
    openPopap[i].addEventListener('click', function(event) {
      event.preventDefault();
      popap.classList.toggle('popap_open');
    });
  }

  popapClose.addEventListener('click', function() {
    popap.classList.toggle('popap_open');
  });

  // -------------------- К А Т А Л О Г -------------------------

  // let catalog = document.querySelector('.catalog');
  // console.log(catalog);
  // let image = catalog.querySelectorAll('img');
  // console.log(image);
  // let catalogButton = catalog.querySelectorAll('.catalog__link');
  // console.log(catalogButton);

  // for(let i = 0; i < catalogButton.length; i++) {
  //   catalogButton[i].addEventListener('mouseover', function() {
  //       image.forEach(element => {
  //         element.style.transform = 'scale(1.1)';
  //       // console.log(element);

  //       });
  //   });
  // }

  // ----------------------- Ф И Л Ь Т Р -----------------------
  
  let filterButton = document.querySelector('.filter__link');
  let filter = document.querySelector('.filter');
  let form = document.querySelector('.form');
  let formButton = document.querySelector('.form__button-close');
  console.log(formButton);

  filterButton.addEventListener('click', function() {
    filter.classList.toggle('filter_open');
  });

  formButton.addEventListener('click', function() {
    filter.classList.toggle('filter_open');
  });



  


