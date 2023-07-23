let a = Math.round(Math.random() * 53);
console.log("a'nın ilk değeri:", a);
let b = Math.round(Math.random() * 53);
console.log("b'nin ilk değeri:", b);
let tmp = a;
a = b;
b = tmp;
console.log("a'nın yeni değeri:", a);
console.log("b'nin yeni değeri:", b);
