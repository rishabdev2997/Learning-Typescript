"use strict";
// function sum(a : number, b : number): number {
//     return a + b;
// }
function isLegal1(user) {
    if (user.age > 18) {
        return true;
    }
    else {
        return false;
    }
}
function greet2(user) {
    return ("hi There " + user.firstName);
}
let y = isLegal1({
    firstName: "John",
    lastName: "tudu",
    age: 20
});
let z = greet2({
    firstName: "John",
    lastName: "tudu",
    age: 20
});
console.log(y);
console.log(z);
