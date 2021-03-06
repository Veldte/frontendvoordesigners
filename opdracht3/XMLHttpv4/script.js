//script.js
//console.log(this);
//var uri = "https://api.data.amsterdam.nl/panorama/recente_opnames/2018/?format=json";
//var uri = "https://open.data.amsterdam.nl/Attracties.json";
//var uri = "https://open.data.amsterdam.nl/Activiteiten.json";
//var uri = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
//var uri = "http://dennistel.nl/movies"; //online, geen https
var requesturl = 'https://veldte.github.io/frontendvoordesigners/opdracht3/json/movies.json'; //json file op github
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
        filmtitel.textContent = films[i].title;
        var genre = document.createElement('h3');
        genre.textContent = 'Genre: ' + films[i].genres;
        var filmplot = document.createElement('p');
        filmplot.textContent = films[i].simple_plot;
        var release = document.createElement('p');
        release.textContent = films[i].release_date;
        var filmcover = document.createElement('img');
        filmcover.src = films[i].cover;
        //myImg.textContent = films[i].cover;
        //console.log(filmcover.src);
        //var filmtrailer = document.createElement('a');
        //filmtrailer.src = films[i].trailer;


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



        // Actors toevoegen

        var actorzien = document.createElement('details');
        actorzien.innerHTML = '<summary>Rollen</summary>';
        //reviewslezen.appendChild(reviewsheader);
        var actor = films[i].actors;
        for (var j = 0; j < actor.length; j++) {
            var cast = document.createElement('li');
            cast.textContent = 'Speler: ' + actor[j].actor_name + ' , Personage: ' + actor[j].character; //zelf toegevoegd
            actorzien.appendChild(cast);
        } //end: for reviews


        // Directors toevoegen

        var Directorzien = document.createElement('details');
        Directorzien.innerHTML = '<summary>Director</summary>';
        //reviewslezen.appendChild(reviewsheader);
        var director = films[i].directors;
        for (var j = 0; j < director.length; j++) {
            var regie = document.createElement('li');
            regie.textContent = 'Director of this movie: ' + director[j].name; //zelf toegevoegd
            Directorzien.appendChild(regie);
        } //end: for reviews


        //         // Trailer toevoegen
        //
        //        var Trailerzien = document.createElement('details');
        //        Trailerzien.innerHTML = '<summary>Bekijk trailer</summary>';
        //        var clips = films[i].trailer;
        //        for (var j = 0; j < clips.length; j++) {
        //            var video = document.createElement('li');
        //            video.textContent = 'Click for video: ' + clips[j].trailer; //zelf toegevoegd
        //            Trailerzien.appendChild(video);
        //        } //end: for reviews


        //ALLE DATA KOPPELEN
        filmpiekijken.appendChild(filmtitel);
        filmpiekijken.appendChild(genre);
        filmpiekijken.appendChild(filmcover);
        filmpiekijken.appendChild(filmplot);
        filmpiekijken.appendChild(release);
        filmpiekijken.appendChild(reviewslezen);
        filmpiekijken.appendChild(actorzien);
        filmpiekijken.appendChild(Directorzien);
        //        filmpiekijken.appendChild(Trailerzien);



        //HTML INJECTION IN BESTAANDE SECTION
        section.appendChild(filmpiekijken);





    } //end: for films
} //end: function showData


window.addEventListener("keydown", checkKeyPress, false);
function checkKeyPress(key) {

    if (key.keyCode == "13") {
        loaderElement.classList.add('show');
        loadimagesmetXHR();
    }

};

window.addEventListener("keydown", BodyKeyPress, false);
var body = document.querySelector('body');

function BodyKeyPress(key){
    
if (key.keyCode == "73") {

    body.classList.add("bodychange");

} 

else {
    body.classList.remove("bodychange");
}

};


function loadimagesmetXHR() {
    var request = new XMLHttpRequest();
    request.open('get', requesturl);
    request.responseType = 'json';
    request.send();

    request.addEventListener("load", function () {
        loaderElement.classList.remove('show');
        console.log("XHR data", request.response);
        console.table(request.response);
        showMovies(request.response);
    });

    request.onerror = function () {
        console.log('Fetch Error', request.status);
    };
}


//actie

button.onclick = function () {
    loaderElement.classList.add('show');
    //this.classList.add('hide');
    //hier iets doen met de button die laadt, dan weer gewoon een button wordt ...

    section.innerHTML = ""; //main leeghalen. just in case
    loadimagesmetXHR();
};







//// POGING ALLEEN GENRE
//
//var HorrorButton = document.getElementById('Horror');
//
//HorrorButton.addEventListener("click", function ()) {
//
//    if (json.genres[0] == "Horror" || json.genres[1] == " Horror") {
//
//        return this ;
//
//    }
//}









//var actiebutton = document.getElementById("actiefilm");
//
//actiebutton.onclick = function{
//    if(films[i].genres == "Adventure"){
//        loadimagesmetXHR(this); 
//    }
//}
