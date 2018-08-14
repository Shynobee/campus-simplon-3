
console.log("exemple 1 (hors de toute fonction, scope global)");
console.log(this);
console.log("-----------------------");

var ex1 = (function() {
    console.log("exemple 1 bis (dans une fonction en mode souple)");
    console.log(this); // affiche window
    console.log("-----------------------");
}());

var ex2 = (function() {
    "use strict";
    console.log("exemple 2 (dans une fonction en mode strict)");
    console.log(this); // affiche undefined
    console.log("-----------------------");
}());

var ex3 = (function() {
    "use strict";

    console.log("exemple 3");

    function gererClick() {
        console.log("le bouton a déclenché le click donc this =>");
        console.log(this);
        // affiche #btn car il a déclenché l'évènement
        console.log("-----------------------");
    }

    function maFunction() {
        console.log("window a déclenché le load donc this =>");
        console.log(this);
        document.getElementById("btn").onclick = gererClick;
        // affiche window car window a déclenché l'évènement
        console.log("-----------------------");
    }

    window.onload = maFunction;
}());


var ex4 = (function() {
    "use strict";

    var MatrixConstruct = function(pil) {
        console.log("exemple 4 (dans un constructeur)");
        console.log(this);
        // this affiche l'instance de MatrixConstruct
        console.log("-----------------------");
        this.pilColor = pil;
    };

    MatrixConstruct.prototype.chargerVetements = function() {
        console.log("exemple 4 (dans le prototype d'un constructeur)");
        // this affiche l'instance de MatrixConstruct
        console.log(this);
        console.log("-----------------------");
    };

    MatrixConstruct.prototype.gererClick = function gererClick() {
        console.log("exemple 4 (dans le prototype d'un constructeur, avec un gestionnaire d'évènement)");
        console.log(this); // affiche btn
        console.log("-----------------------");
    };

    var m1 = new MatrixConstruct("rouge");
    m1.chargerVetements();

    window.onload = function() {
        document.getElementById("btn").onclick = m1.gererClick;
    };


}());
