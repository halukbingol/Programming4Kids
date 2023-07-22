"use strict"; // keep this


let x = 40;
let y = 50;
let a = 60;
let direction = "E";


let turtleDraw = function () {
    let d = a / 10;
    let d3 = 3 * d;
    let x_f, y_f; // face
    let x_r, y_r; // right
    let x_l, y_l; // left

    if (direction === "N") {
        x_f = x;
        y_f = y - d3;
        x_r = x + d;
        y_r = y;
        x_l = x - d;
        y_l = y;
    } else if (direction === "E") {
        x_f = x + d3;
        y_f = y;
        x_r = x;
        y_r = y + d;
        x_l = x;
        y_l = y - d;
    } else if (direction === "S") {
        x_f = x;
        y_f = y + d3;
        x_r = x - d;
        y_r = y;
        x_l = x + d;
        y_l = y;
    } else if (direction === "W") {
        x_f = x - d3;
        y_f = y;
        x_r = x;
        y_r = y - d;
        x_l = x;
        y_l = y + d;
    } else {
        console.log("***ERROR***", " unexpected direction:", direction)
    }

    // draw
    let color = "#1e6bcd";
    s.line(x_f, y_f, x_r, y_r)
        .attr({
            stroke: color,
            strokeWidth: 3
        });
    s.line(x_r, y_r, x_l, y_l)
        .attr({
            stroke: color,
            strokeWidth: 3
        });
    s.line(x_l, y_l, x_f, y_f)
        .attr({
            stroke: color,
            strokeWidth: 3
        });
}


let turtleRight = function () {
    if (direction === "N") {
        direction = "E";
    } else if (direction === "E") {
        direction = "S";
    } else if (direction === "S") {
        direction = "W";
    } else if (direction === "W") {
        direction = "N";
    }
    turtleDraw();
    // return direction;
}


let turtleLeft = function () {
    direction = turtleRight();
    direction = turtleRight();
    direction = turtleRight();
    turtleDraw();
    // return direction;
}

let turtleIsIn = function (x, y, a, x_t, y_t) {
    if (x_t < x || x + a < x_t) {
        return false;
    } else if (y_t < y || y + a < y_t) {
        return false;
    } else {
        return true;
    }
}


function turtleForward() {
    console.log("I will go forward.");
    if (direction === "N") {
        y = y - a;
    } else if (direction === "W") {
        x = x - a;
    } else if (direction === "S") {
        y = y + a;
    } else if (direction === "E") {
        x = x + a;
    }
    turtleDraw();
}