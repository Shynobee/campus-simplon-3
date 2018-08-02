var reviserWhile = function() {
    var count = 1;

    while (count <= 100) {
        console.log(count);
        count += 1;
    }
};

var reviserDoWhile = function() {
    var count = 0;
    do {
        console.log("loop do while");
        count += 1;
    }
    while(count < 10);
};

var parcourirTableauxAvecWhile = function() {
    var i = 0, arr = ["a", "b", "c", "d", "e"];

    while (i < arr.length) {
        console.log(arr[i]);
        i += 1;
    }

};

var reviserFor = function() {
    var i,
    arr = document.querySelectorAll("#list_1 .item");
    // console.log(arr);
    for (i = 0; i < arr.length; i += 1) {
        console.log(arr[i]);
    }
};

var reviserForEach = function() {
    var arr = ["a1", "a2", "a3", "a4"];

    arr.forEach(function(value, i) {
        console.log(value);
        console.log("case index " + i);
    });
};

var start = function() {
    reviserFor(); // a besoin du chargement du Document
};

// reviserWhile();
// reviserDoWhile();
// reviserForEach();
// parcourirTableauxAvecWhile();
// window.addEventListener("DOMContentLoaded", start);
