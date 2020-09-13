let slider = document.querySelector('.slider');
let sliderList = slider.querySelector('.slider__list');
let sliderItem = sliderList.querySelectorAll('.slider__item');
let buttonLeft = slider.querySelector('.slider__button_prev');
let buttonRight = slider.querySelector('.slider__button_next');
let widthArray = [0];
let pagination = slider.querySelectorAll('.slider__pagination-link');
let step = 0;
let offset = 0;

for(let i = 0; i < sliderItem.length; i++) {
  widthArray.push(sliderItem[i].offsetWidth);
}

console.log(widthArray);

function slideShowLeft(event) {
  event.preventDefault();
  step+= -33.33;
  if(step <= -66.66) {
    sliderList.style.transform = 'translateX(' + step + '%)';
    step+= -1;
    step++;
  }
  
 
  console.log(step, offset);
}

function slideShowRight(event) {
  event.preventDefault();
  step+= 719;
  sliderList.style.transform = 'translateX(' + step + 'px)';
}

buttonLeft.addEventListener('click', slideShowLeft);
buttonRight.addEventListener('click', slideShowRight);
console.log(buttonLeft);

for(let k = 0; k < pagination.length; k++) {
  pagination[k].addEventListener('click', function(event) {
    event.preventDefault();
    console.log('work');
  });
}
