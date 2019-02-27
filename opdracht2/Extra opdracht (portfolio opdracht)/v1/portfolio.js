window.sr = ScrollReveal({
    distance: '30px',
    duration: 1000,
    scale:0 ,
});
sr.reveal('.__reveal');



window.addEventListener("keydown", checkKeyPress, false);

function checkKeyPress(key) {
    if (key.keyCode == "9") {
        sr.reveal('.__reveal');
    }
}



//bron: https://stackoverflow.com/questions/48162050/scrollreveal-js-and-flexbox


