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