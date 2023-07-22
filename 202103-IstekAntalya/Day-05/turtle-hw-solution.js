"use strict"; // keep this

let turtleX; // x coordinate of the turtle
let turtleY; // y coordinate of the turtle
let turtleDirection; // direction of the turtle
let turtleStep; // step size of the turtle


let turtleInitialize = function (_turtleX,
                           _turtleY,
                           _turtleDirection,
                           _turtleStep) {
    turtleX = _turtleX;
    turtleY = _turtleY;
    turtleDirection = _turtleDirection;
    turtleStep = _turtleStep;
}


/**
 * Move forward by a single step
 */
let turtleForward = function () {
    if (turtleDirection === "N") {
        turtleY -= turtleStep;
    } else if (turtleDirection === "S") {
        turtleY += turtleStep;
    } else if (turtleDirection === "E") {
        turtleX += turtleStep;
    } else if (turtleDirection === "W") {
        turtleX -= turtleStep;
    }
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
 * Draw turtle
 * @param x {number} x of center
 * @param y {number} y of center
 * @param step {number} step size
 * @param direction {"N", "E", "S", "W"}
 */
let turtleDraw = function (x, y, step, direction) {
    let d = step / 10;
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
