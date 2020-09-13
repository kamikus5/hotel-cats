let fullPhoto = document.querySelector('.card__full-image');
let images = document.querySelectorAll('.card__foto-image');
let items = document.querySelectorAll('.card__foto-item');
let cardButton = document.querySelector('.card__button');

let pictures = ['img/card-image-desktop.jpg', 'img/card-foto-full-2.jpg', 'img/card-foto-full-3.jpg'];

for(let k = 0; k < images.length; k++) {
  images[k].addEventListener('click', function(event) {
    event.preventDefault();
    fullPhoto.src = pictures[k];
  });
}

let count = 0;

for(let i = 0; i < items.length; i++) {
  items[i].addEventListener('click', function() {
    
    if(items[i].classList.contains('card__foto-item_active')) {
      count = i;
    } else {
      items[count].classList.remove('card__foto-item_active');
      items[i].classList.add('card__foto-item_active');
      count = i;
    }
  });
}

cardButton.addEventListener('mouseenter', function(event) {
  event.preventDefault();
  fullPhoto.classList.add('card__full-image_scale');
});

cardButton.addEventListener('mouseleave', function() {
  fullPhoto.classList.remove('card__full-image_scale');
});