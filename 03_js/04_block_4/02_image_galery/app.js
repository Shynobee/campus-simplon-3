/* jshint esversion :  6 */
const simpleGalery = (function simpleGalery() {
    "use strict";

    var imgs = ["./assets/a.png", "./assets/b.png", "./assets/c.png"], img, position = 0;

    const getNextImgIndex = function getNextImgIndex(dir) {
        if (dir === "next") {
            position = (position += 1) <= imgs.length - 1 ? position : 0;
        } else  {
            position = (position -= 1) >= 0 ? position : imgs.length - 1;
        }
        return position;
    };

    const setImageSrc = function setImageSrc(index) {
        img.src = imgs[index];
    };

    const changeImageAuto = function changeImageAuto(interv) {
        var iID = window.setInterval(function() {
            setImageSrc(getNextImgIndex("next"));
        }, interv);
    
        // window.setTimeout(function() {
        //     console.log("finitooo");
        //     window.clearInterval(iID);
        // }, 2000);
    };

    const start = function start(autoPlay, interval = 1000) {
        const next = document.getElementById("move_next");
        const prev = document.getElementById("move_prev");
        img = document.getElementById("img_galery");
        setImageSrc(0);

        if (autoPlay) {
            changeImageAuto(interval);
        }

        next.onclick = function() {
            setImageSrc(getNextImgIndex("next"));
        };

        prev.onclick = function() {
            setImageSrc(getNextImgIndex("prev"));
        };
    };
    window.addEventListener("DOMContentLoaded", function() {
        start(true);
    });
}());
