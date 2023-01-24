const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close'),
    overlay = document.querySelector('.menu__overlay'),
    list = document.querySelector('.menu__list');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
}); 

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
}); 

list.addEventListener('click', () => {
    menu.classList.remove('active');
}); 

overlay.addEventListener('click', () => {
    menu.classList.remove('active');
}); 


const counters = document.querySelectorAll('.skills__rating-counter'), 
    lines = document.querySelectorAll('.skills__rating-line span');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
})

$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 1000) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });
});

