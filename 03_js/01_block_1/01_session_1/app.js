/*jshint esversion: 6*/
/*global window*/

var displayTextBox = function (msg) {
    "use strict";
    window.alert(msg);
};

// coder une fonction pour sayHello à qui vous souhaitez : )
// PS : je peux dire bonjour à différentes personnes :D
// Cette fonction retourne le nombre de lettres du param
var sayHello = function (person) {
    "use strict";
    window.console.log("bonjour " + person);
    return person.length;
};

var concatWords = function (word1, word2) {
    "use strict";
    console.log (word1 + ' ' + word2);
};
var phrase1 = "C'est une belle journée";
var phrase2 = "pour s'exercer à JS";

concatWords(phrase1, phrase2);


var multiplier = function (a, b) {
    "use strict";
    var res;
};

// displayTextBox("hello");
var result1 = sayHello("Yann");
console.log(result1);
console.log(sayHello("Stéphanie"));
// afficher la longueur des prénoms

var creerUser = function (n, a) {
    return {
        name: n,
        age: a
    };
};
var getAge = function (u) {
    return u.age;
};

var getName = function (u) {
    return u.name;
};

var getInfosUsers = function (u) {
    return `Cet utilisateur se nomme ${getName(u)} et il est âgé de ${getAge(u)} ans <br><br>`;
};

var afficherObjets = function() {
    var user1 = creerUser("Billy", 34);
    var user2 = creerUser("Bobby", 87);
    var divCible = document.getElementById("res_users");
    divCible.innerHTML = getInfosUsers(user1);
    divCible.innerHTML += getInfosUsers(user2);
};

var easyDOM = function() {
    var cible = document.getElementById("easy_dom");
    var res = document.getElementById("result_easy_dom");
    // console.log(cible);
    // console.log(cible.children);
    for (i = 0; i < cible.children.length; i += 1) {
        // console.log(cible.children[i]); // chaque objet div
        // console.log(typeof cible.children[i]); // le type de chaque div
        // console.log(cible.children[i].id); // l'id de chaque div
        res.innerHTML += "l'id de la div n°" + (i + 1) + " : " + cible.children[i].id + "<br>";
    }
};

var colorDiv = function(cible) {
    cible.style.background = "dodgerblue";
    cible.style.color = "white";
    cible.style.fontWeight = "bold";
};

var start = function() {
    console.log("DOM LOADED !!!");
    afficherObjets();
    easyDOM();
};

window.addEventListener("DOMContentLoaded", start);
