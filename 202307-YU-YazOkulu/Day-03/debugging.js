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

a = 7;
a = 9;
b = 11;
c = 3;

d = area(3, 8);

d = area(a, b);

d = area(b, c);

d = funcA(b);

d = funcB(b);

// function a(b){
//     console.log({b});
//     return 5*b;
// }

// a(8);