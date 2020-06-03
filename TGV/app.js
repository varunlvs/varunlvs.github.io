var looper = true;
var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 20,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true,
    },
    loop: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: true,
    },
    pagination: {
        el: '.swiper-pagination',
    },
});

function searchFunction() {
    var input, wrapper, games, a, i;
    var menu = document.getElementById('gamebox');
    input = document.getElementById('myinput').value.toUpperCase();
    wrapper = document.getElementById('game-list');
    games = wrapper.getElementsByClassName('game-item');

    if(input.length == 0) {
        wrapper.style.display = 'none'
        menu.style.display = ''
    }
    else {
        wrapper.style.display = 'block'
        menu.style.display = 'none'
    }
    
    for(i=0 ; i< games.length; i++){
        a = games[i].getElementsByTagName('a')[0];
        if(a.innerHTML.toUpperCase().indexOf(input) > -1) {
            games[i].style.display = "";

        }
        else games[i].style.display = 'none';
    }
}