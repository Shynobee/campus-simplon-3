/* jshint esversion :  6 */
const myGalery = function myGalery() {
    "use strict";

    var img, imgs = [], position = 0;

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

    const start = function start(arr) {
        img = document.getElementById("img_galery");
        imgs = arr;
        console.log("imgs ----");
        console.log(imgs);
        setImageSrc(0);

        document.getElementById("move_next").onclick = function() {
            setImageSrc(getNextImgIndex("next"));
        };

        document.getElementById("move_prev").onclick = function() {
            setImageSrc(getNextImgIndex("prev"));
        };
    };

    return {
        start: start
    };
};
