"use strict"; // keep this
let a;
let b;

// ********************************
// absolute value v1
function abs_v1(x) {
    if (x < 0) {
        return -x;
    }
    if (0 <= x) {
        return x;
    }
}

// ********************************
// absolute value v2
function abs_v2(x) {
    if (x < 0) {
        return -x;
    } else {
        return x;
    }
}

// ********************************
// testing
console.log("--- testing abs_v1 abs_v2");
//
a = -1;
console.log("a:", a, " abs_v1:", abs_v1(a), " abs_v2:", abs_v2(a));
//
a = 0;
console.log("a:", a, " abs_v1:", abs_v1(a), " abs_v2:", abs_v2(a));
//
a = 1;
console.log("a:", a, " abs_v1:", abs_v1(a), " abs_v2:", abs_v2(a));
//
a = 11;
console.log("a:", a, " abs_v1:", abs_v1(a), " abs_v2:", abs_v2(a));

// ********************************
// define function
let compareXY = function (x, y) {
    if (x < y) {
        return "x is less than y";
    } else if (x === y) {
        return "x is equal to y";
    } else {
        return "x is larger than y";
    }
};

// ********************************
// testing
console.log("--- testing compareXY");
//
a = 3;
b = 4;
console.log("a:", a, " b:", b, " result:", compareXY(a, b));
//
a = 4;
b = 4;
console.log("a:", a, " b:", b, " result:", compareXY(a, b));
//
a = 5;
b = 4;
console.log("a:", a, " b:", b, " result:", compareXY(a, b));
