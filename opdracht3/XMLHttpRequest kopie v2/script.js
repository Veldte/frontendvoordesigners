//script.js
//console.log(this);
//var uri = "https://api.data.amsterdam.nl/panorama/recente_opnames/2018/?format=json";
//var uri = "https://open.data.amsterdam.nl/Attracties.json";
//var uri = "https://open.data.amsterdam.nl/Activiteiten.json";
//var uri = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
//var uri = "http://dennistel.nl/movies"; //online, geen https
var uri = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json'; //json file op github
var button = document.querySelector('button');
var loaderElement = document.querySelector("span");
var section = document.querySelector('section');
//console.log("loaderElement",loaderElement);

////https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON

function showMovies(jsonObj) {
    var films = jsonObj;
    console.log("showMovies films", films);

    for (var i = 0; i < films.length; i++) {
        console.log("film " + i);
        var filmpiekijken = document.createElement('article');

        //TITEL, COVER EN BESCHRIJVING

        var filmtitel = document.createElement('h2');
        filmtitel.textContent = films[i].title + ' - ' + ' Genre: ' + films[i].genres;
        var filmplot = document.createElement('p');
        filmplot.textContent = films[i].simple_plot;

        var release = document.createElement('p');
        release.textContent = films[i].release_date;

        //var genres = document.createElement('p');
        //genres.textContent = films[i].genres;
        var filmcover = document.createElement('img');
        filmcover.src = films[i].cover;
        //myImg.textContent = films[i].cover;
        //console.log(filmcover.src);
        //var filmtrailer = document.createElement('a');
        //filmtrailer.src = films[i].trailer;



        //GENRES

        var genres = films[i].genres;
        for (var n = 0; n < genres.length; n++) {
            console.log("genre: ", genres[n]);
        } //end for genres


        //REVIEWS
        var reviewslezen = document.createElement('details');
        reviewslezen.innerHTML = '<summary>Lees Reviews</summary>';
        //reviewslezen.appendChild(reviewsheader);
        var reviews = films[i].reviews;
        for (var j = 0; j < reviews.length; j++) {
            var listItem = document.createElement('li');
            listItem.textContent = 'Film cijfer ' + reviews[j].score + ' Datum van review - ' + reviews[j].created_at; //zelf toegevoegd
            reviewslezen.appendChild(listItem);
        } //end: for reviews


        
        // Actors
        
        var actorzien = document.createElement('details');
        actorzien.innerHTML = '<summary>Rollen</summary>';
        //reviewslezen.appendChild(reviewsheader);
        var actor = films[i].actors;
        for (var j = 0; j < actor.length; j++) {
            var cast = document.createElement('li');
            cast.textContent = 'Speler: ' + actor[j].actor_name+ ' , Personage: ' + actor[j].character; //zelf toegevoegd
            actorzien.appendChild(cast);
        } //end: for reviews

        //ALLE DATA KOPPELEN
        filmpiekijken.appendChild(filmtitel);
        filmpiekijken.appendChild(filmplot);
        filmpiekijken.appendChild(filmcover);
        filmpiekijken.appendChild(release);
        filmpiekijken.appendChild(reviewslezen);
        filmpiekijken.appendChild(actorzien);




        //HTML INJECTION IN BESTAANDE SECTION
        section.appendChild(filmpiekijken);





    } //end: for films
} //end: function showData


window.addEventListener("keydown", checkKeyPress, false);

function checkKeyPress(key) {

    if (key.keyCode == "13") {

        loadimagesmetXHR();
    }


};


//https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
//https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest

function loadimagesmetXHR() {
    var request = new XMLHttpRequest();
    request.open('get', uri);
    request.responseType = 'json';
    //request.responseType = 'text'; // now we're getting a string!
    request.send();

    request.addEventListener("load", function () {
        //console.log("request load: ",request.response);
        loaderElement.classList.remove('show');
        console.log("XHR data", request.response);
        console.table(request.response);
        showMovies(request.response);
    });
    //  request.onload = function() {
    //      console.log("request.onload: ",request.response);
    //    }
    /*request.timeout = 10000; // time in milliseconds
      request.ontimeout = function(e) {
        // XMLHttpRequest timed out. Do something here.
        console.log("ontimeout: " +request.timeout+", het laden duurt te lang !",e);
      };
      */
    request.onerror = function () {
        console.log('Fetch Error', request.status);
    };
}
//loadimagesmetXHR();


//actie


button.onclick = function () {
    loaderElement.classList.add('show');
    //this.classList.add('hide');
    //hier iets doen met de button die laadt, dan weer gewoon een button wordt ...

    section.innerHTML = ""; //main leeghalen. just in case
    loadimagesmetXHR();
};
