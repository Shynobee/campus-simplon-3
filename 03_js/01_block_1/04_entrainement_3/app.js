/*jshint esversion: 6*/
console.log("JS - Entrainement 3");
var str, nb, bool, maybeLater, unset, instrument, arr;

str = "string !";
nb = 2;
bool = nb < 100;
maybeLater = null;
arr = [1, 3, 4, 7]; // arr.length === 4 (true)

instrument = {
    nom: "guitare",
    couleur: "orange",
    utilisateur: "Lenny Kravitz",
    type: "Fender Stratocaster",
    prix: 10000000
};

console.log(arr[1]); // affiche le contenu de la 2ème case
console.log(instrument.utilisateur); // le point est l'accesseur
// l'accesseur permet d'accéder aux propriétés d'objet
console.log(str + " est un type de données"); // concaténation

console.log("---concaténation des propriétés d'un objet ---");
console.log("La " + instrument.nom + " de " + instrument.utilisateur + " est une " + instrument.type + " " + instrument.couleur + ". Elle coûte "+ instrument.prix);
console.log("****************");

console.log("---concaténation avec les litéraux de gabarit---");
console.log("(template literals (voir mdn))");
console.log(`La ${instrument.nom} de ${instrument.utilisateur} est une ${instrument.type}) ${instrument.couleur}. Elle coûte ${instrument.prix}`);
console.log("****************");
// créer une fonction ajouterAuTableau, prennant un paramètre p, et ajoutant la valeur de ce param au tableau arr. (pour simplifier p ne sera pas un objet). exécuter la fonction quelques fois et log le résultat dans la console

var ajouterAuTableau = function (p){
    arr.push(p);
    return arr;
};

var res = ajouterAuTableau(2);
console.log(arr === res);

var creerProduit = function (n, p, r, s) {
    return {
        name: n,
        price: p,
        ref: r,
        stock: s
    };
};

var prod1 = creerProduit("synthé", 1299, "synth1233RR2", 10);
var prod2 = creerProduit("sneakers", 60, "Nikesb66H", 1);
// var prod3 = creerProduit(30, "chapeau", "CPPDG", 100);
// ATTENTION : ci-dessus on a fait une erreur volontaire : l'ordre des paramètres n'est pas le bon !!!
// console.log(prod1);
// console.log(prod2);
//


/*************** LES CONDITIONS */
// if
// else if
// else

function comprendreLesConditions() {
    var a = 100, b = 10, c = 1;

    if (typeof a !== "number") {
        console.log("cas 1");

    } else if (!isNaN(typeof b)) {
        console.log("cas 2");

    } else {
        console.log("cas 3");
    }
}

function comprendreScope() {
    var a = "une valeur";
    console.log(a);
    console.log(arr);

    function scopeInterne() {
        var b = "une autre valeur";
        console.log(a);
        console.log(b);
        console.log(arr);
    }
    // console.log(b); // undefined ici !!!!
    // scopeInterne();
}
comprendreScope();
// console.log(a); // undefined ici !!!!

// on y reviendra ... mais c'est SUPER IMPORTANT
