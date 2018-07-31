// afficher des valeurs dans la console
// ------------------------------------
console.log("welcome to the blair witch project !!!");
console.log("hello world !!!");
// console.log(hello);
console.log(68 + 55);
console.log({ name: "gui", age: 37});
console.log(typeof true && false);

var titi = "toto";
var toto = "titi";
console.log(titi === toto);
console.log(titi == toto);
console.log(titi.length === toto.length);
console.log(typeof titi === typeof toto);

// en JS, nous utilisons le style camelCase
// première lettre en minuscule, chaque première lettre d'un nouveau mot en Majuscule
// ex => maVariableAuTop
// ex => maFonctionQuiDepote

function heyPeople(nom, msg) {
    var isValidString =  typeof nom === "string" &&
    typeof msg === "string";
    if (isValidString && nom && msg) {
        console.log("hey " + nom + "!!!\n");
        console.log(msg);
    }
}

heyPeople("Seral", "ça roule ?");
heyPeople("Seral", " ");


function bonjour(user) {
    if (!user) return "please donne moi un nom";
    else return "Bonjour " + user;
}

function getType(valeur){
    return typeof valeur;
}

console.log(getType(true));
console.log(getType({}));

console.log(bonjour());
console.log(bonjour("bernard"));

heyPeople("Farida", "comment ça roule ?");
heyPeople("Othman", 23);
