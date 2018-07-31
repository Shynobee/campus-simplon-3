var clickHandler = function (evt) {
    console.log("btn clicked : voici l'event =>");
    console.log(evt);
    var src = evt.srcElement || evt.target;
    console.log(this); // ici, this représente le btn cliqué
    console.log(src); // src aussi !!!
    console.log(src === this);
};

var applyCSS = function () {
    var cible = document.getElementById("cible");
    cible.classList.toggle("rounded");
    console.log("this ->");
    console.log(this);
};

var setActiveOnHover = function () {
    var cibleHover = document.getElementById("cible2");

    var setHoverStyle = function(evt) {
        if (evt.type === "mouseenter") cibleHover.classList.add("is-active");
        else cibleHover.classList.remove("is-active");
    };

    cibleHover.onmouseenter = setHoverStyle;
    cibleHover.onmouseleave = setHoverStyle;
};

var setActiveOnHoverAlexandre = function () {
    var div2 = document.getElementById("cible2");
    div2.addEventListener("mouseenter", function(){
        this.classList.toggle("is-active");
    });

    div2.addEventListener("mouseleave", function(){
        this.classList.toggle("is-active");
    });
};

var start = function () {
    var btn = document.getElementById("mon_btn");

    setActiveOnHover();
    // setActiveOnHoverAlexandre();

    btn.addEventListener("click", function(e) {
        console.log("this ->");
        console.log(this);
        clickHandler(e);
        applyCSS();
    });
    //domElement.onclick = clickHandler; // syntaxe alternative
};

window.addEventListener("DOMContentLoaded", start);
