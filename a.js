"use strict";
function sum(a, b) {
    return a + b;
}
const value = sum(1, 2);
console.log(value);
function isLegal(age) {
    if (age > 18) {
        return true;
    }
    else {
        return false;
    }
}
let x = isLegal(19);
console.log(x);
function runAfter1S(fn) {
    setTimeout(fn, 1000);
}
runAfter1S(function () {
    console.log("hi there");
});
