// define array
let a;
let max;
let i;

// ********** access with index
a = [3, 4, 7];
console.log("a[0]:" + a[0]);
console.log("a[1]:" + a[1]);
console.log("a[2]:" + a[2]);
console.log("a[3]:" + a[3]);
console.log("a[9]:" + a[9]);
// 
i = 2;
console.log("i:" + i + " a[i]:" + a[i]);
// 
console.log("a.length:" + a.length);
//
for (let i = 0; i < a.length; i++) {
    console.log("i:" + i + " a[i]:" + a[i]);
}

// ********** find max
let getMax = function (arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
};

// test 1
a = [2, 5, 7, 4, 4, 9];
console.log("max of [2, 5, 7, 4, 4, 9]: ")
console.log(getMax(a));

// test 2
a = [2, 9, 7, 4, 4, 3];
console.log("max of [2, 9, 7, 4, 4, 3]: ")
console.log(getMax(a));
