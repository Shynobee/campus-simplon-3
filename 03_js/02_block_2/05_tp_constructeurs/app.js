/*jshint esversion : 6 */
var tpConstructeurs = (function () {
    "use strict";

    /********** Préambule - TD Constructeurs **********/

    var Synthetiseur = function(s) {
        this.anneeSortie = s.anneeSortie;
        this.imgUrl = s.imgUrl;
        this.marque = s.marque;
        this.modele = s.modele;
        this.prix = s.prix;
    };

    // on définit notre propre version de toString()
    // nos objets utiliseront cette version au mieu de celle héritée de Object.prototype ...
    Synthetiseur.prototype.toString = function() {
        return `ce synthé ${this.modele} de marque ${this.marque} est sorti en ${this.anneeSortie} et coûte actuellement ${this.prix} sur le marché de l'occasion`;
    };

    Synthetiseur.prototype.setPrix = function(p) {
        this.prix = p;
        return p;
    };

    var moog = new Synthetiseur({
        marque: "Moog",
        modele: "Mini-Moog",
        prix: 3500,
        anneeSortie: 1975,
        imgUrl: "http://www.vintagesynth.com/sites/default/files/2017-05/moog_voyager_old_school_lg.jpg"
    });

    var nova = new Synthetiseur({
        marque: "Novation",
        modele: "Supernova",
        prix: 800,
        anneeSortie: 2000,
        imgUrl: "https://medias.audiofanzine.com/images/normal/novation-supernova-iir-8472.jpg"
    });

    (function afficherInfosSynthe() {
        console.log(moog);
        console.log(moog.toString());
        console.log("-----------");
        console.log(nova);
        console.log(nova.toString());
        console.log("-----modification du prix de supernova ------");
        console.log(nova.setPrix(200));
        console.log(nova.toString());
    }());

}());
