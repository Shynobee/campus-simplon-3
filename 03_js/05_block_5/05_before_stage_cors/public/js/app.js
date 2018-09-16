const app = (function() {
    "use strict";
    const url = "http://localhost:9999/";

    const prepareSend = function prepareSend(evt) {
        evt.preventDefault();
        let error = 0;
        let title, body;

        title = document.getElementById("note_title").value;
        if (!title) error++;
        body = document.getElementById("note_body").value;
        if (!body) error++;

        if (error === 0) sendNoteViaAjax({ title, body }); // ES6 shortcut !!!

        else alert("meh, pas de titre ou de corps de note");
    };

    const sendNoteViaAjax = function sendNoteViaAjax(note) {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", url + "note");
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.onload = function getResult(evt) {
            console.log(this.result);
        };
        xhr.send(JSON.stringify(note));
    };

    const start = function start() {
        const btn = document.getElementById("send_note");
        btn.onclick = prepareSend;
    };

    window.addEventListener("DOMContentLoaded", start);
}());