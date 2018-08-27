/*jshint esversion : 6 */
var Simplonien, creerHTMLSimplonien, start;

/**
 * Constructeur pour générer des objets simploniens
 * @constructor
 * @param  {string} f (firstname) prénom du simplonien
 * @param  {number} a (age) age du simplonien
 * @param  {string} p (phrase) catch phrase du simplonien
 * @return {object} Une nouvelle instance de Simplonien
 */
Simplonien = function(f, a, p) {
    this.firstname = f.charAt(0).toUpperCase() + f.substring(1).toLowerCase();
    this.age = a;
    this.gimmick = p;
};

/**
 * Affiche le gimmick d'un Simplonien
 * @this Simplonien
 * @return {undefined} RAS
 */
Simplonien.prototype.afficherGimmick = function () {
    console.log(`${this.firstname} says : ${this.gimmick} !!!`);
};

creerHTMLSimplonien = function(s) {
    var li, ul = document.getElementById("simploniens");
    li = document.createElement("li");
    li.classList.add("item");
    li.innerHTML = `<b>${s.firstname}</b> (${s.age} ans)`;
    li.onclick = s.afficherGimmick.bind(s);

    ul.appendChild(li);
};

start = function(e) {
    var simploniens = [
        new Simplonien("elsa", 28, "3 * 4"),
        new Simplonien("eliAs", 25, "php c'est cool"),
        new Simplonien("nico", 40, "raspberry === la vie"),
        new Simplonien("hassan", 21, "ils sont cousins !!!")
    ];
    simploniens.forEach(function(simplonien) {
        creerHTMLSimplonien(simplonien);
    });
};

window.addEventListener("DOMContentLoaded", start);
