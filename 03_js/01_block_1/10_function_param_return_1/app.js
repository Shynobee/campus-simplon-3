/*jshint esversion: 6*/
/*global window, document, console*/

/**
 * Une fonction pipeau pour tester la documentation automatique
 * @author Guillaume AMANGOUA <guillaume@owlab.io>
 * @param  {number} n un nombre à tester
 * @return {boolean}  un booléen valant false si n est supérieur à 10, true sinon.
 */
function testDoc(n) {
    return n < 10;
}
var res = testDoc(10);


/** @namespace */
const fonctionParamReturn1 = (function () {
    "use strict";

    /**
     * une alert() affiche le message "hello Simplon !"
     * @author Guillaume AMANGOUA <guillaume@owlab.io>
     * @alias fonctionParamReturn1.one
     * @return {undefined}
     */
    const one = function one() {
        alert("hello Simplon !");
    };

    /**
     * Retourne la chaîne de caractères "hello"
     * @author Guillaume AMANGOUA <guillaume@owlab.io>
     * @alias fonctionParamReturn1.hello
     * @param fonctionParamReturn1.hello
     * @return {string} la chaîne "hello"
     */
    const hello = function hello() {
        console.log("hello !");
    };

    /**
     * Une fonction stupide qui retourne le paramètre reçu sans aucune autre action.
     * @author Guillaume AMANGOUA <guillaume@owlab.io>
     * @alias fonctionParamReturn1.dummyReturn
     * @param {(number|string|boolean|Object|null|undefined)} p
     * @return {(number|string|boolean|Object|null|undefined)} le paramètre inchangé
     */
    const dummyReturn = function dummyReturn(p) {
        return p;
    };


    window.addEventListener("DOMContentLoaded", function init() {
        let res;
        // res = one();
        res = hello();
        console.log(hello());
        console.log("-- hello() que vaut res ? --");
        res = dummyReturn();
        console.log(dummyReturn());
        console.log("-- dummyReturn() que vaut res ? --");
    });
}());
