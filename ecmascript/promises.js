"use strict";
//callback
function esperar3s(callback) {
    setTimeout(() => {
        callback("3s depois ...");
    }, 3000);
}
esperar3s(function (resultado) {
    console.log(resultado);
});
function esperar3sPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Depois de 3 segundos na Promise...");
        }, 3000);
    });
}
esperar3sPromise().then((dados) => console.log(dados));
fetch("https://swapi.co/api/people/1")
    .then((res) => res.json())
    .then((personagem) => personagem.films)
    .then((films) => fetch(films[0]))
    .then((resFilms) => resFilms.json())
    .then((filme) => console.log(filme));
