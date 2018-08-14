/* jshint esversion :  6 */
const app = (function app() {
    "use strict";

    var displayBlock;

    const start = function start() {
        displayBlock = document.getElementById("scroll_position");
        window.addEventListener("scroll", getScrollPos);
    };

    const getScrollPos = function getScrollPos() {
        // console.log(window.scrollY);
        const pos = window.scrollY + "px";
        displayBlock.innerText = pos;
        displayBlock.style.top = pos;
    };

    window.addEventListener("DOMContentLoaded", start);
}());
