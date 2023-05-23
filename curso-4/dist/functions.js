"use strict";
const sum = (x, y) => {
    return x + y;
};
console.log(sum(5, 10));
const sum2 = (a, b) => {
    return (a + b).toString();
};
const value = sum2(2, 3);
//VOID: não retorna nada
const log = (message) => {
    console.log(message);
    // return message
};
