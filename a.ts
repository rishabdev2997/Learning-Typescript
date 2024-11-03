function sum(a : number, b : number): number {
    return a + b;
}

const value = sum(1,2);

console.log(value);

function isLeagal(age: number):boolean{
    if(age > 18 ){
        return true;
    } else {
        return false
    }
}

let x = isLeagal(19);
console.log(x);