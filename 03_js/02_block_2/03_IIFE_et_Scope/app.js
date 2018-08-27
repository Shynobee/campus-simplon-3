var monModule = (function() {
    "use strict";

    var choubidou = "waaaah";
    var maVarPrivee = "dont touch please";

    return {
        slogan: choubidou
    };
}());

console.log(monModule);
console.log(monModule.slogan);
console.log(monModule.maVarPrivee);

/* ci-dessous, la variable est déclarée dans le scope global (this === window). Elle est donc accessible partout, ça n'est pas une bonne pratique !!! */
var jeSuisGlobale = "et c'est VRAIMENT pas top ...";

(function () {
    /* ci-dessous, la variable est contenue dans le scope de l'IIFE => pas de risque de fuite ! */
    var jeSuisLocale = "et c'est beaucoup mieux !";
    /* ci-dessous : on a oublié le mot clé var => la variable est donc globale, accessible par window.jeSuisEgalementGlobale */
    jeSuisEgalementGlobale = "et c'est la loose";
    /* la ligne ci-dessous lève une erreur. dans la console, on aura pour indiquation de la provenance de l'erreur : anonymous function */
    //=>// console.log(choubidou);
}());

(function jeNeSuisPasAnonyme() {
    // cette IIFE est nommée =>
    /* la ligne ci-dessous lève une erreur. on saura dans la console du nom de la fonction ayant généré cette erreur (jeNeSuisPasAnonyme) */
    console.log(choubidou);
}());

// ---------------------------------------------------------------

(function truc() {
    var x = "yo";
    log(x); // yo


    function insiderrrrr() {
        log(x); // "yo"
        var y = "yeaaah";
        log(y); // "yeaaah"
    }

    log(y); // undefined

}());

log(x); // undefined
log(y); // undefined
