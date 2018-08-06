var app = (function() {
    "use strict";

    var addProductToArray, Product, btn, products = [], start;

    Product = function () {
        this.name = prompt("saisir nom produit");
        this.price = prompt("saisir prix produit");
    };

    addProductToArray = function() {
        products.push(new Product());
        console.log(products);
    };

    start = function () {
        btn = document.getElementById("ajout_obj");
        btn.onclick = addProductToArray;
    };

    window.addEventListener("DOMContentLoaded", start);

}());
