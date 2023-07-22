"use strict"; // keep this

/**
 * Draw turtle
 * @param x {number} x of center
 * @param y {number} y of center
 * @param a {number} side length
 * @param direction {"N", "E", "S", "W"}
 */
let turtleDraw = function (x, y, a, direction) {
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


/**
 * turn to the right
 * @param direction {"N", "E", "S", "W"}
 * @returns {string} new direction
 */
let turtleRight = function (direction) {
    if (direction === "N") {
        direction = "E";
    } else if (direction === "E") {
        direction = "S";
    } else if (direction === "S") {
        direction = "W";
    } else if (direction === "W") {
        direction = "N";
    }
    return direction;
}


/**
 * Turn to the left
 * @param direction {"N", "E", "S", "W"}
 * @returns {string} new direction
 */
let turtleLeft = function (direction) {
    direction = turtleRight(direction);
    direction = turtleRight(direction);
    direction = turtleRight(direction);
    return direction;
}

/**
 * returns `true` if the turtle is in the square, `false` other wise.
 * @param x {number} x of upper-left corner of the square
 * @param y {number} y of upper-left corner of the square
 * @param a {number} side length
 * @param x_t {number} x of the turtle
 * @param y_t {number} x of the turtle
 */
let turtleIsIn = function (x, y, a, x_t, y_t) {
    if (x_t < x || x + a < x_t) {
        return false;
    } else if (y_t < y || y + a < y_t) {
        return false;
    } else {
        return true;
    }
}


function forward() {
    console.log("I will go forward.");
    if (turtle_direction === "N") {
        turtle_y = turtle_y - turtle_step_size;
        turtleDraw(turtle_x, turtle_y, turtle_step_size, turtle_direction);
    } else if (turtle_direction === "W") {
        turtle_x = turtle_x - turtle_step_size;
        turtleDraw(turtle_x, turtle_y, turtle_step_size, turtle_direction);
    } else if (turtle_direction === "S") {
        turtle_y = turtle_y + turtle_step_size;
        turtleDraw(turtle_x, turtle_y, turtle_step_size, turtle_direction);
    } else if (turtle_direction === "E") {
        turtle_x = turtle_x + turtle_step_size;
        turtleDraw(turtle_x, turtle_y, turtle_step_size, turtle_direction);
    }
}