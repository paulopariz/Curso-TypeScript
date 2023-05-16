"use strict";
//querySelector
//Quando selecionamos um elemento do DOM com o querySelector, o objeto retornado dependerá da string que passarmos no método.
const video = document.querySelector("#video");
if (video instanceof HTMLVideoElement) {
    console.log(video.volume);
}
