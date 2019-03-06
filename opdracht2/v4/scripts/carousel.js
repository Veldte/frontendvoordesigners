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

// ----------------------



function next() {
    if (counter >= carouselImages.length - 1) return;

    carouselSlide.style.transition = "transform 0.7s ease-in-out";
    counter++;

    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'; // Ga opzij op de x-as
};

function previous() {

    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.7s ease-in-out";
    counter--;

    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';



};

window.addEventListener("keydown", checkKeyPress, false);

function checkKeyPress(key) {
    if (key.keyCode == "37") {
        next();
    }

    if (key.keyCode == "39") {
        previous();
    }
};



nextbutton.addEventListener('click', next);
prevbutton.addEventListener('click', previous);


//--------------------------

//Hoe de carousel slide

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


