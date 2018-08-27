/*jshint esversion : 6*/
function a(clbk) {
    console.log("je suis a \n");
    if (clbk) clbk();
}

function b(clbk) {
    console.log("je suis b \n");
    if (clbk) clbk();
}
a(b);
b(a);

function getDataViaAjax(clbk) {
    const xhr = new XMLHttpRequest();
    const url = "./data.json";
    xhr.open("GET", url);
    xhr.addEventListener("load", function() {
        // return JSON.parse(this.response); NON !!!!!!!!!
        clbk(JSON.parse(this.response));
    });
    xhr.send();
}

function afficherData(res) {
    console.log(res); // yata !!!
}

function start() {
    // getDataViaAjax effectue une opération asynchrone ...
    // je ne peux donc pas attendre une valeur de retour instantanée
    // il faut attendre le load de XHR ...
    getDataViaAjax(afficherData);
    // soluce => passer une fonction en callback qui sera exec une fois le load de XHR ok ; )
}

window.addEventListener("load", start);
