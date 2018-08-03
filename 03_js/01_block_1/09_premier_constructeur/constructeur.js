var PersonnageMatrix = function(n, g, s) {
    this.name = n;
    this.genre = g;
    // console.log(this);
};

PersonnageMatrix.prototype.sortirArme = function () {
    console.log(this.name + ": don't move a muscle !!!");
};

PersonnageMatrix.prototype.faireFeu = function () {
    console.log(this.name + ": BLAM BLAM BLAM !!!");
};

PersonnageMatrix.prototype.faireUneBlague = function () {
    console.log(this.name + ": j'aurais dû choisir la pillule bleue !!! ><");
};

// var badInstance = MonConstruct();
// badInstance ci-dessus est undefined car oubli du mot-clé new !
var instance1 = new PersonnageMatrix("Neo", "homme"); // {}
var instance2 = new PersonnageMatrix("Trinity", "femme"); // {}
var instance3 = new PersonnageMatrix("Smith", "machine"); // {}

instance2.faireUneBlague();
instance3.sortirArme();
instance1.faireFeu();

// console.log(instance1);
// console.log(instance2);
// console.log(instance2 === instance1);
