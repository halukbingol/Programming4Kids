"use strict"; // keep this

// ******************************* V testing
let x;
let y;
let a;
let x_t;
let y_t;

// testing: turtleDraw
console.log("*** testing: turtleDraw");
x = 50;
y = 100;
a = 50;
//
x = x + a;
drawSquare(x, y, a);
turtleDraw(x + a / 2, y + a / 2, a, "N");
//
x = x + a;
drawSquare(x, y, a);
turtleDraw(x + a / 2, y + a / 2, a, "E");
//
x = x + a;
drawSquare(x, y, a);
turtleDraw(x + a / 2, y + a / 2, a, "S");
//
x = x + a;
drawSquare(x, y, a);
turtleDraw(x + a / 2, y + a / 2, a, "W");
//
x = x + a;
drawSquare(x, y, a);
turtleDraw(x + a / 2, y + a / 2, a, "?");

// testing: turtleRight
console.log("*** testing: turnRight");
turtleDirection = "N";
console.log("direction:", turtleDirection, "new:", turtleRight(turtleDirection));
turtleDirection = "E";
console.log("direction:", turtleDirection, "new:", turtleRight(turtleDirection));
turtleDirection = "S";
console.log("direction:", turtleDirection, "new:", turtleRight(turtleDirection));
turtleDirection = "W";
console.log("direction:", turtleDirection, "new:", turtleRight(turtleDirection));
turtleDirection = "N";
console.log("direction:", turtleDirection, "new:", turtleRight(turtleDirection));


// testing: turtleLeft
console.log("*** testing: turnLeft");
turtleDirection = "N";
console.log("direction:", turtleDirection, "new:", turtleLeft(turtleDirection));
turtleDirection = "E";
console.log("direction:", turtleDirection, "new:", turtleLeft(turtleDirection));
turtleDirection = "S";
console.log("direction:", turtleDirection, "new:", turtleLeft(turtleDirection));
turtleDirection = "W";
console.log("direction:", turtleDirection, "new:", turtleLeft(turtleDirection));
turtleDirection = "N";
console.log("direction:", turtleDirection, "new:", turtleLeft(turtleDirection));


// testing: turtleIsIn
console.log("*** testing: turtleIsIn");
x = 250;
y = 200;
a = 50;
drawSquare(x, y, a);
console.log("square:", " x:", x, " y:", y, " a:", a);
// row 0
// region 0,0
x_t = x - 10;
y_t = y - 20;
console.log("x_t:", x_t, " y_t:", y_t, " turtleIsIn:", turtleIsIn(x, y, a, x_t, y_t))
// region 0,1
x_t = x + 10;
y_t = y - 20;
console.log("x_t:", x_t, " y_t:", y_t, " turtleIsIn:", turtleIsIn(x, y, a, x_t, y_t))
// region 0,2
x_t = x + a + 10;
y_t = y - 20;
console.log("x_t:", x_t, " y_t:", y_t, " turtleIsIn:", turtleIsIn(x, y, a, x_t, y_t))
// row 1
// region 1,0
x_t = x - 10;
y_t = y + 20;
console.log("x_t:", x_t, " y_t:", y_t, " turtleIsIn:", turtleIsIn(x, y, a, x_t, y_t))
// region 1,1
x_t = x + 10;
y_t = y + 20;
console.log("x_t:", x_t, " y_t:", y_t, " turtleIsIn:", turtleIsIn(x, y, a, x_t, y_t))
// region 1,2
x_t = x + a + 10;
y_t = y + 20;
console.log("x_t:", x_t, " y_t:", y_t, " turtleIsIn:", turtleIsIn(x, y, a, x_t, y_t))
// row 2
// region 2,0
x_t = x - 10;
y_t = y + a + 20;
console.log("x_t:", x_t, " y_t:", y_t, " turtleIsIn:", turtleIsIn(x, y, a, x_t, y_t))
// region 2,1
x_t = x + 10;
y_t = y + a + 20;
console.log("x_t:", x_t, " y_t:", y_t, " turtleIsIn:", turtleIsIn(x, y, a, x_t, y_t))
// region 2,2
x_t = x + a + 10;
y_t = y + a + 20;
console.log("x_t:", x_t, " y_t:", y_t, " turtleIsIn:", turtleIsIn(x, y, a, x_t, y_t))

// ******************************* A