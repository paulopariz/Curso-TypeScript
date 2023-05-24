"use strict";
const returnValue = (value) => value;
const message = returnValue("Hello World");
const count = returnValue(5);
function getFirstValueArray(array) {
    return array[0];
}
const firstValueStringArray = getFirstValueArray(["1", "2"]);
const firstValueNumberArray = getFirstValueArray([10, 20]);
//Promises
const returnPromise = async () => {
    return 5;
};
// Classes
class GenericNumber {
    zeroValue;
    sum;
    constructor(zeroValue, sum) {
        this.zeroValue = zeroValue;
        this.sum = sum;
    }
}
const myGenericNumber = new GenericNumber(0, (x, y) => {
    return x + y;
});
