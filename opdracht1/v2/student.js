/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/


var info = document.querySelectorAll("main div.info");
var button = document.querySelectorAll("main button");

function toon() {
    this.nextElementSibling.classList.toggle("active");
    console.log("123");

    
}

var i;
    for ( i = 0; i < button.length; i++) {
        button[i].addEventListener('click', toon);
    }

for ( i = 0; i < info.length; i++) {
     //   info[i].addEventListener('click', toon);
    }



//button.addEventListener('click', toon);