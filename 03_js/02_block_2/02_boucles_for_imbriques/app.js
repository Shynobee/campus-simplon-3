var app = (function() {
    "use strict";

    var parseSimple, parseImbriquee, parseImbriqueeTD, start;

    parseSimple = function () {
        var i, arr = ["a", "b", "c", "d", "e", "f", "g"];
        //              0    1    2    3    4    5    6
        for (i = 0; i < arr.length; i += 1) {
            console.log(arr[i]);
        }
    };

    parseImbriquee = function () {
        var i, j, arr = [
            ["a1", "b1", "c1"], // 0
            ["a2","b2","c2", "d2"], // 1
            ["a3","b3","c3", "d3", "e3"] // 2
        ];
        // console.log(arr);

        for (i = 0; i < arr.length; i += 1) {
            // console.log(arr[i]);
            for (j = 0; j < arr[i].length; j +=1) {
                console.log(arr[i][j]);
            }
        }
        console.log("fin de boucle");
    };

    parseImbriqueeTD = function () {
        var etudiants = [
            [
                {nom: "jim", age: 20},
                {nom: "joe", age: 33},
                {nom: "jill", age: 19},
                {nom: "bill", age: 10}
            ],
            [
                {nom: "akan", age: 20},
                {nom: "mael", age: 44},
                {nom: "fred", age: 46}
            ],
            [
                {nom: "périne", age: 20},
                {nom: "naïma", age: 99},
                {nom: "kim", age: 17},
                {nom: "haroon", age: 8},
                {nom: "jeff", age: 54}
            ]
        ];
        // créer des tableaux dans un tableau
        // parcourir avec deux boucles imbriquée
        // bonus => aller plus loin en plaçant des objets dans le tableau imbriqué et en afficher les propriétés
        //
        // La boucle externe parse le tableau etudiants
        for () {
            // la boucle interne parse chacun des tableaux contenus dans les cases d'étudiants
            for () {
                
            }
        }
     };

    start = function () {
        parseSimple();
        parseImbriquee();
    };

    window.addEventListener("DOMContentLoaded", start);
}());
