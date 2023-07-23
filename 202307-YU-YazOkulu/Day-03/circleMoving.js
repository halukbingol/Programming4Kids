"use strict"; // keep this
const xDelta = 20;

// ******************************* V intro
const s = Snap("#id_svg");
s.attr({
    viewBox: "0 0 600 300",
});
// ******************************* A intro

let circleMoving = s.circle(150, 150, 100);
circleMoving.attr({
    fill: "#bada55",
    stroke: "#000",
    strokeWidth: 5,
});

function moveLeft() {
    let sOld = circleMoving.attr("cx");
    let xOld = parseInt(sOld);
    let xNew = xOld - xDelta;
    circleMoving.attr({
        cx: xNew,
    });
}

function moveRight() {
    let sOld = circleMoving.attr("cx");
    let xOld = parseInt(sOld);
    let xNew = xOld + xDelta;
    circleMoving.attr({
        cx: xNew,
    });
}

// setInterval(blink, 3000);
// function blink() {}
