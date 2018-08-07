/*jshint esversion :  6 */
const app = (function() {
    "use strict";

    var s1, s2;

    function Simplonien(p) {
        this.age = p.age;
        this.name = p.name;
        this.promo = p.promo;
    }

    Simplonien.prototype.sePresenter = function () {
        return console.log(`hey je m'appelle ${this.name}, j'ai ${this.age} ans et je suis de la promo ${this.promo} !`);
        // SANS bind l'appel ligne 41 this vaut #mon_btn (la source de l'event)
        // AVEC bind l'appel ligne 42 this vaut l'objet instance de Simplonien
    };

    function start() {
        const btn1 = document.getElementById("btn1");
        const btn2 = document.getElementById("btn2");
        // btn1.onclick = s1.sePresenter;
        // btn2.onclick = s2.sePresenter;
        btn1.onclick = s1.sePresenter.bind(s1);
        btn2.onclick = s2.sePresenter.bind(s2);
    }

    s1 = new Simplonien({
        name: "Jules",
        age: 40,
        promo: "SARCELLES 2"
    });

    s2 = new Simplonien({
        name: "Jill",
        age: 30,
        promo: "AULNAY 1"
    });

    window.addEventListener("DOMContentLoaded", start);

    return {
        simploniens: [s1, s2]
    };

}());
