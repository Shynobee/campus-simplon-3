/*jshint esversion : 6 */
var app = (function() {
    "use strict";

    var root, rangeHeight, checkbox;

    function reveal(target) {
        return target.classList.add("is-revealed");
    }

    function hide(target) {
        return target.classList.remove("is-revealed");
    }

    function getHeight(target) {
        return rangeHeight.value;
    }

    function setDivHeight(divs) {
        var height = getHeight();
        divs.forEach(function(block) {
            block.style.height = height + "px";
        });
        return height;
    }

    function start() {
        root = document.getElementById("root");
        rangeHeight = document.getElementById("range_height");
        checkbox = document.getElementById("check_reveal");

        root.onmouseenter = function() {
            reveal(root);
        };

        root.onmouseleave = function() {
            if (!checkbox.checked) hide(root);
        };

        checkbox.oninput = function(evt) {
            var action = checkbox.checked ? reveal(root) : hide(root);
        };

        rangeHeight.oninput = function() {
            setDivHeight(document.querySelectorAll("#root .child"));
        };
    }

    window.addEventListener("DOMContentLoaded", start);

}());
