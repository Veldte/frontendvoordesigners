/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

const prevbutton = document.querySelector('#prevbutton');
const nextbutton = document.querySelector('#nextbutton');

let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//button listener

nextbutton.addEventListener('click', () => {

    if (counter >= carouselImages.length - 1) return;

    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;

    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

prevbutton.addEventListener('click', () => {

    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;

    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

});


carouselSlide.addEventListener('transitionend', () => {
    if (carouselImages[counter].id === 'lastClone') {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    if (carouselImages[counter].id === 'firstClone') {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});

var kc = e.keyCode;
if (kc == 37) nslider.prev();
if (kc == 39) nslider.next();

//if(counter <= 0) return;
