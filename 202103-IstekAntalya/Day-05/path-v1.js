"use strict"; // keep this

/**
 * Draw a square
 * @param x {number} x of upper left corner
 * @param y {number} y of upper left corner
 * @param a {number} side length
 */
let drawSquare = function (x, y, a) {
    s.line(x, y, x + a, y)
        .attr({
            stroke: "#cccccc",
            strokeWidth: 3
        });
    s.line(x + a, y, x + a, y + a)
        .attr({
            stroke: "#cccccc",
            strokeWidth: 3
        });
    s.line(x + a, y + a, x, y + a)
        .attr({
            stroke: "#cccccc",
            strokeWidth: 3
        });
    s.line(x, y + a, x, y)
        .attr({
            stroke: "#cccccc",
            strokeWidth: 3
        });

}
