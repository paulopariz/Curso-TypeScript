"use strict";
window.UserData = {};
function handleInput({ target }) {
    if (target instanceof HTMLInputElement) {
        window.UserData[target.id] = target.value;
        localStorage.setItem('UserData', JSON.stringify(window.UserData));
    }
}
const form = document.querySelector('#form');
form?.addEventListener('keyup', handleInput);
