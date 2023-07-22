"use strict"; // keep this

// ******************************* V intro
let s = Snap("#id_svg");
s.attr({
    viewBox: "0 0 600 300"
});
// ******************************* A


// ******************************* V
// borders
s.rect(0, 0, 600, 300)
    .attr({
        stroke: "red",
        strokeWidth: 1,
        fill: "none"
    });
