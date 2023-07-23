function area(a, b) {
    let c = a * b;
    return c;
}

function funcA(a) {
    return 2 * a;
}

function funcB(a) {
    let b;
    b = funcA(a);
    b = b + 10;
    return b;
}

let a;
let b;
let c;
let d;

// testing
a = 9;
b = 11;
c = 3;

console.log({ a }, { b }, { c });
console.log("area(3, 8):" + area(3, 8));
console.log("area(a, b):" + area(a, b));
console.log("area(b, c):" + area(b, c));
//
console.log("funcA(b):" + funcA(b));
//
console.log("funcB(b):" + funcB(b));
