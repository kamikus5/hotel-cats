let filterButton = document.querySelector('.filter__link');
let filter = document.querySelector('.filter');
let form = document.querySelector('.form');
let formButton = document.querySelector('.form__button-close');

filterButton.addEventListener('click', function() {
  filter.classList.toggle('filter_open');
});

formButton.addEventListener('click', function() {
  filter.classList.toggle('filter_open');
});

// ------------ К А Т А Л О Г  К Н О П К И ---------------

let catalogButtons = document.querySelectorAll('.catalog__link');
console.log(catalogButtons);
let images = document.querySelectorAll('.catalog__image');
console.log(images);

for(let i = 0; i < catalogButtons.length; i++) {
  catalogButtons[i].addEventListener('mouseenter', function() { 
    images[i].classList.add('catalog__image_scale');
  });
}

for(let i = 0; i < catalogButtons.length; i++) {
  catalogButtons[i].addEventListener('mouseleave', function() { 
    images[i].classList.remove('catalog__image_scale');
  });
}