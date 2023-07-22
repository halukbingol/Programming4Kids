"use strict"; // keep this


let turtle_x = 40;
let turtle_y = 50;
let turtle_step_size = 60;
let turtle_direction = "E";


let turtleDraw = function () {
    let d = turtle_step_size / 10;
    let d3 = 3 * d;
    let x_f, y_f; // face
    let x_r, y_r; // right
    let x_l, y_l; // left

    if (turtle_direction === "N") {
        x_f = turtle_x;
        y_f = turtle_y - d3;
        x_r = turtle_x + d;
        y_r = turtle_y;
        x_l = turtle_x - d;
        y_l = turtle_y;
    } else if (turtle_direction === "E") {
        x_f = turtle_x + d3;
        y_f = turtle_y;
        x_r = turtle_x;
        y_r = turtle_y + d;
        x_l = turtle_x;
        y_l = turtle_y - d;
    } else if (turtle_direction === "S") {
        x_f = turtle_x;
        y_f = turtle_y + d3;
        x_r = turtle_x - d;
        y_r = turtle_y;
        x_l = turtle_x + d;
        y_l = turtle_y;
    } else if (turtle_direction === "W") {
        x_f = turtle_x - d3;
        y_f = turtle_y;
        x_r = turtle_x;
        y_r = turtle_y - d;
        x_l = turtle_x;
        y_l = turtle_y + d;
    } else {
        console.log("***ERROR***", " unexpected direction:", turtle_direction)
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
    if (turtle_direction === "N") {
        turtle_direction = "E";
    } else if (turtle_direction === "E") {
        turtle_direction = "S";
    } else if (turtle_direction === "S") {
        turtle_direction = "W";
    } else if (turtle_direction === "W") {
        turtle_direction = "N";
    }
    turtleDraw();
    // return direction;
}


let turtleLeft = function () {
    turtle_direction = turtleRight();
    turtle_direction = turtleRight();
    turtle_direction = turtleRight();
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
    if (turtle_direction === "N") {
        turtle_y = turtle_y - turtle_step_size;
    } else if (turtle_direction === "W") {
        turtle_x = turtle_x - turtle_step_size;
    } else if (turtle_direction === "S") {
        turtle_y = turtle_y + turtle_step_size;
    } else if (turtle_direction === "E") {
        turtle_x = turtle_x + turtle_step_size;
    }
    turtleDraw();
}