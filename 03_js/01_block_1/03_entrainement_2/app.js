//####### LES FUNCTIONS !!!
//// Comprendre les fonctions, leur paramètres et leur valeur de retour est fondamental !
console.log("---- on éxécute nos fonctions ----");
function testDay2() {
    console.log("hello today !!!");
    return true;
}

function donneMoiAManger(miam) {
    return typeof miam;
}
console.log("---- toute fonction possède une valeur de retour ----");
var tmp, resultat = donneMoiAManger(2 * 2);
console.log(resultat);
resultat = donneMoiAManger({});
console.log(resultat);
resultat = donneMoiAManger("chose");
console.log(resultat);
resultat = donneMoiAManger(true || false);
tmp = resultat;
console.log(resultat);
resultat = donneMoiAManger(null);
console.log(resultat);
resultat = donneMoiAManger();
console.log(resultat);

function rameneMoiUnChat(n) {
    return {
        type: "chat",
        nom: n
    };
}

function rameneMoiUnChien(n) {
    return {
        type: "chien",
        nom: n
    };
}

var chien1 = rameneMoiUnChien("wako");
var chien2 = rameneMoiUnChien("bill");
var chat1 = rameneMoiUnChat("kitty");
var chat2 = rameneMoiUnChat("felix");
console.log("---- on utilise les paramètres pour passer des valeurs à nos fonctions et agir sur leur comportement ----");
console.log(chat2.type + " " + chat2.nom);
console.log(chien2);
console.log(chat1);
console.log(chien1);

var add = function(a, b) {
    return a + b;
};

console.log("---- Voici les résultats de notre fonction add (addition)  ----");
console.log(add(1, 1));
console.log(add(10, 1));
console.log(add(1, add(1, 1)));

// rédiger une fonction estPair
// prenant un paramètre p
// et retournant true si p est pair
// OU false si p est impair

// une solution viable
function estPair(p) {
    if (p % 2 === 0){
        return true;
    }
    return false;
}
// même logique avec une var et un seul return
function estPair2(p) {
    var res;
    if (p % 2 === 0) {
        res = true;
    } else {
        res = false;
    }
    return res;
}
// retourne une condition ternaire
function estPair3(p) {
    return p % 2 === 0 ? true : false;
}
// retourne une simple expression booléene
function estPair4(p) {
    return p % 2 === 0;
}

console.log("---- On peut utiliser modulo pour déterminer si un nombre est pair ou impair ----");
console.log(estPair(9));
console.log(estPair(2));
console.log(estPair4(29));
console.log(estPair4(28));

//####### LES OBJETS (OBJECTS) !!!
//// Continuons sur le type object !!!
// Super important, super utile !

var user1 = {name: "Jack", age: 40};
var user2 = {name: "Jill", age: 30};
var user3 = {name: "bill", age: 20};
console.log("---- On créé des objets représentant des utilisateurs ----");
console.log(user1);
console.log(user2);
console.log("---- On peut lire les propriétés d'un objet  ----");
console.log(user1.name);
console.log(user1.age);
// le temps passe ..... Jack et Jill vieillissent
user1.age = 41;
user2.age = 31;
// le temps passe encore !!! : (
user1.age += 1;
user2.age = user2.age + 1;
console.log("----- UPDATE => nos utilisateurs ont pris de l'âge ! ------");
console.log(user1.name + " : " + user1.age + "ans");
console.log(user2.name + " : " + user2.age + "ans");

// Nos users décident d'adopter un animal de comapgnie (pet)

user1.pet = {
    type: "canari",
    color: "yellow",
    name: "titi"
};

user2.pet = rameneMoiUnChien("wako");
console.log("------ nos users ont de la compagnie ------");
console.log(user1);
console.log(user2);

console.log(user1.pet.name);
console.log(pet); // undefined ici !!!

var pet = rameneMoiUnChat("Sochi");
// console.log(pet);

user3.pet = pet;

// on en apprend plus sur l'user 3
user3.cityOfBirth = "Brisbane";
console.log(user3);
console.log(user3.choubidou);

//####### LES TABLEAUX !!!
//// Un array (tableaux) est une structure de données séquentielle. On peut stocker des valeurs dans ses "cases".

function getDerniereValeurTableau(t) {
    var res;
    if (t.length >= 1) {
        /* le numéro (indice, index) de la dernière case d'un array est toujours égale à sa longueur - 1 */
        res = t[t.length - 1];
    } else {
        res = "sorry, ton tableau est vide !";
    }
    return res;
    // à partir d'ici, on parle de dead-code
}
var t1 = []; // on créé un tableau vide
var t2 = [1, 2, 55, null, 123]; // et là un tableau avec des valeurs dedans !!!
console.log(getDerniereValeurTableau(t2));
console.log(t1);
console.log(t2);
console.log(t2[0]);
console.log(t2[1]);
console.log(t2[2]);
console.log(t2[3]);
console.log(t2[4]);
console.log(t2[5]); // undefined
t2.push(42);
console.log(t2[5]); // 42
t2[t2.length] = 88888;
console.log(t2[6]); // 123
console.log(getDerniereValeurTableau(t1));

// je peux changer une valeur du tableau !
t2[0] = 666666666;
t2.push(44);
console.log(t2);
console.log(getDerniereValeurTableau(t2));


function connaitreLongueurMot(mot) {
    return mot.length;
}

var res = connaitreLongueurMot("guillaume");
console.log(res); // ?
