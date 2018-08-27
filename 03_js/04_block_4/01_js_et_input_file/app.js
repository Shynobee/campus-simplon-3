/* jshint esversion :  6 */
const app = (function app() {
    "use strict";

    var html = {}, galery;

    const handleFormSubmit = function handleFormSubmit(evt) {
        console.log(evt);
        evt.preventDefault();
    };

    const makeFileReader = function makeFileReader(file, clbk) {
        const reader = new FileReader();
        reader.onload = function getDataURL(evt) {
            const src = evt.srcElement || evt.target;
            clbk(src.result);
        };
        reader.onerror = function getError(evt) {
            console.error("erreur de lecture du fichier");
        };
        reader.readAsDataURL(file);
    };

    const displayImageList = function displayImageList(file, i) {
        function createImage(url) {
            const img = document.createElement("img");
            img.src = url;
            img.className = "img";
            return img;
        }

        function appendImage(img) {
            const li = document.createElement("li");
            img.className = "item";
            li.appendChild(img);
            return html.imgList.appendChild(li);
        }

        makeFileReader(file, function getAsyncResult(res) {
            appendImage(createImage(res));
        });
    };

    const checkMediaType = function checkMediaType(file, mime) {
        return Boolean(file.type.match(mime));
    };

    const changeBodyImage = function changeBodyImage(file) {
        makeFileReader(file, function getAsyncResult(res) {
            html.body.style.background = `url(${res})`;
        });
    };

    const handleFiles = function handleFiles(evt) {
        const src = evt.srcElement || evt.target;
        const tmp = [];
        var filesOk = src.files.length;

        Array.from(src.files).forEach(file => {
            if (!checkMediaType(file, "image")) filesOk -= 1;
            else {
                makeFileReader(file, function getAsyncRes(res) {
                    tmp.push(res);
                    if (tmp.length === filesOk) galery.start(tmp);
                });
            }
        });

        if (src.files.length === 1) {
            // changeBodyImage(src.files[0]);

        } else if (src.files.length > 1) {
            // Array.from(src.files).forEach(displayImageList);
        }

    };

    const handleEvents = function handleEvents() {
        html.input.onchange = handleFiles;
        html.btn.onclick = handleFormSubmit;
        html.inputBtn.onclick = function() {
            html.input.click();
        };
    };

    const getDOMRefs = function getDOMRefs() {
        return {
            body: document.querySelector("body"),
            form: document.getElementById("form_file"),
            input: document.getElementById("file_upload"),
            inputBtn: document.getElementById("file_upload_btn"),
            btn: document.getElementById("submit"),
            imgList: document.getElementById("exo1")
        };
    };

    const start = function start() {
        html = getDOMRefs();
        galery = myGalery();
        handleEvents();
    };

    window.addEventListener("DOMContentLoaded", start);
}());
