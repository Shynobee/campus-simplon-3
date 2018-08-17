/* jshint esversion :  6 */
var usaStates = (function usaStates() {
    "use strict";

    const dom = {};

    var states;

    const start = function start() {
        dom.heart = document.getElementById("heart");
        dom.input = document.getElementById("filter_states");
        dom.list = document.getElementById("states");

        getStatesAjax(function getRes(result) {
            states = result;
            window.setTimeout(function wait() {
                dom.heart.classList.add("fadeout");
                displayStates(states);
                listenUserInput();
            }, 1000);
        });
    };

    const getStatesAjax = function getStatesAjax(clbk) {
        const url = "https://gist.githubusercontent.com/mshafrir/2646763/raw/8b0dbb93521f5d6889502305335104218454c2bf/states_hash.json";
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onload = function getData(evt) {
            const src = evt.target || evt.srcElement;
            console.log(src.response);
            clbk(convertToArray(JSON.parse(src.response)));
        };
        xhr.send();
    };

    const createDOMElement = function createDOMElement(str) {
        const li = document.createElement("li");
        li.className = "item state";
        li.textContent = str;
        return li;
    };

    const convertToArray = function convertToArray(obj) {
        const tmp = [];
        for(let prop in obj) {
            tmp.push(obj[prop]);
        }
        return tmp;
    };

    const displayStates = function displayStates(currentStates) {
        dom.list.innerHTML = "";
        currentStates.forEach(state => {
            dom.list.appendChild(createDOMElement(state));
        });
    };

    const filterStates = function filterStates() {
        displayStates(states.filter(findInputMatch));
    };

    const findInputMatch = function findInputMatch(state) {
        const val = dom.input.value.toLowerCase();
        const str = state.toLowerCase();
        return !!str.match(val);
    };

    const listenUserInput = function listenUserInput(e) {
        dom.input.onkeyup = filterStates;
    };

    window.addEventListener("DOMContentLoaded", start);

}());
