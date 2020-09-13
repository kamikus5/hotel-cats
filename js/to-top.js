$(document).ready(function(){
  let navMenu = $('.menu-nav');
        let navMenuTop = navMenu.offset().top;
        let toTop   = $('.to-top');
        let body    = $('html, body');
        
        
        $(window).scroll(function(){
            let winScrollTopValue = $(window).scrollTop();

            if (winScrollTopValue > navMenuTop){
                navMenu.addClass('fixed');
            } else {
                navMenu.removeClass('fixed');
            }
            
            if(winScrollTopValue > 1000){
                toTop.fadeIn(800);
            } else if (winScrollTopValue < 1000){
                toTop.hide();
            }
        });
        
        toTop.on('click', toTopClicked);

        function toTopClicked(event) {
            event.preventDefault();
            body.animate(
                {scrollTop: 0}, 1200
            );
        }
});