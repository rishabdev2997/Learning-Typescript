function sum(a : number, b : number): number {
    return a + b;
}

const value = sum(1,2);

console.log(value);

function isLegal(age: number):boolean{
    if(age > 18 ){
        return true;
    } else {
        return false
    }
}

let x = isLegal(19);
console.log(x);