/*jshint esversion: 6*/
/*global window, document, console*/

/** @namespace */
const workinJSON = (function () {
    "use strict";

    var
        myArr = [1, 2, 3, 4, 5],
        myJSONArr = "[5, 4, 3, 2, 1]",
        myObj = { name: "choubi", last: "dooh!" },
        myJSONObj = '{ "name": "doobi", "last": "daah!" }';

    /**
     * Convertit une valeur JS en chaîne JSON
     * @return {Array} RAS
     * @alias workinJSON.stringifyToJSON
     */
    const stringifyToJSON = function() {
        const jsonArr = JSON.stringify(myArr);
        const jsonObj = JSON.stringify(myObj);

        return [
            jsonArr,
            jsonObj
        ];
    };

    /**
     * Convertit une chaîne JSON en valeur JS
     * @return {Array} RAS
     * @alias workinJSON.parseFromJSON
     */
    const parseFromJSON = function() {
        const jsArr = JSON.parse(myJSONArr);
        const jsObj = JSON.parse(myJSONObj);

        return [
            jsArr,
            jsObj
        ];
    };

    /**
     * Observe les actions de l'user sur les éléments DOM
     * @return {Array} RAS
     * @alias workinJSON.parseFromJSON
     */
    const convertToJSON = function(p) {
        return JSON.stringify(p);
    };

    let converted;
    console.log("----- CONVERSION EN JSON ----------");
    converted = convertToJSON("abcd");
    console.log(converted);
    converted = convertToJSON(123);
    console.log(converted);
    converted = convertToJSON(true);
    console.log(converted);
    converted = convertToJSON(false);
    console.log(converted);
    converted = convertToJSON({foo: "bar"});
    console.log(converted);
    converted = convertToJSON([1, 2, 3, 4]);
    console.log(converted);
    converted = convertToJSON(null);
    console.log(converted);
    converted = convertToJSON(undefined);
    console.log(converted);
    console.log("*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*");

    window.onload = function init() {
        document.getElementById("to_json").onclick = function() {
            console.log(stringifyToJSON());
        };
        document.getElementById("from_json").onclick = function() {
            console.log(parseFromJSON());
        };
    };

    return {
        stringifyToJSON: stringifyToJSON,
        parseFromJSON: parseFromJSON
    };

}());
