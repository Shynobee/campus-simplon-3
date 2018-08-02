

var PersonnageMatrix = function(n, g) {
    this.name = n;
    this.genre = g;
    console.log(this);
};

PersonnageMatrix.faireUneBlague = function () {
    console.log("j'aurais dû choisir la pillule bleue !!! ><");
};

// var badInstance = MonConstruct(); // undefined car on a oublié le mot-clé new ... > <'
var instance1 = new PersonnageMatrix("neo", "homme"); // {}
var instance2 = new PersonnageMatrix("Trinity", "femme"); // {}
var instance3 = new PersonnageMatrix("Agent Smith", "machine"); // {}

// console.log(instance1);
// console.log(instance2);
// console.log(instance2 === instance1);
// console.log(instance1.faireUneBlague());
