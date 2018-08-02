

var inverserCouleurs = function(src) {
    var next = src.nextElementSibling || src.previousElementSibling,
    nextBg = src.style.background;
    src.style.background = next.style.background;
    next.style.background = nextBg;
};

var start = function(p, evt) {
    console.log("DOM READY");
    var btn = document.getElementById("btn");
};

window.addEventListener("DOMContentLoaded", function(evt) {
    start("chose", evt);
});
