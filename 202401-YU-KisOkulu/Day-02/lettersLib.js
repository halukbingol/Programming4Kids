"use strict"; // keep this

// ******************************* V intro
const s = Snap("#id_svg");
s.attr({
    viewBox: "0 0 600 300",
});
// ******************************* A intro

// level 0: primitives

function lineNS(x0, y0, r, nCircles) {
    for (let i = 0; i < nCircles; i++) {
        s.circle(x0, y0 + 2 * r * i, r).attr({
            fill: "#bada55",
            stroke: "#000",
            strokeWidth: 5,
        });
    }
}

function lineEW(x0, y0, r, nCircles) {
    for (let i = 0; i < nCircles; i++) {
        s.circle(x0 + 2 * r * i, y0, r).attr({
            fill: "#bada55",
            stroke: "#000",
            strokeWidth: 5,
        });
    }
}

function lineNESW(x0, y0, r, nCircles) {
    for (let i = 0; i < nCircles; i++) {
        s.circle(x0 + 2 * r * i, y0 + 2 * r * nCircles - 2 * r * i, r).attr({
            fill: "#bada55",
            stroke: "#000",
            strokeWidth: 5,
        });
    }
}

function lineNWSE(x0, y0, r, nCircles) {
    for (let i = 0; i < nCircles; i++) {
        s.circle(x0 + 2 * r * i, y0 + 2 * r * i, r).attr({
            fill: "#bada55",
            stroke: "#000",
            strokeWidth: 5,
        });
    }
}

// global parameters
const height = 9; // odd number
// const interLetterSpace = 20;

// level 1: I, H, F
const width_I = 5; // odd number
const width_H = 5; // odd number

function letter_I(x0, y0, r) {
    const w = width_I;
    const h = height;
    lineEW(x0, y0, r, w);
    lineEW(x0, y0 + 2 * r * (h - 1), r, w);
    lineNS(x0 + 2 * r * ((w - 1) / 2), y0, r, h);
}

function letter_H(x0, y0, r) {
    const w = width_H;
    const h = height;
    lineNS(x0, y0, r, h);
    lineNS(x0 + 2 * r * (w - 1), y0, r, h);
    lineEW(x0, y0 + 2 * r * ((h - 1) / 2), r, w);
}

// level 2: V, N, A
const width_V = 5; // odd number

function letter_V(x0, y0, r) {
    const w = 2 * height;
    const h = height;
    lineNWSE(x0, y0, r, h);
}
