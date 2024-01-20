"use strict"; // keep this
const xDelta = 10;
const yDelta = 10;
const xDelta1 = 15;
const yDelta1 = 15;

let crashNumber = 0;
let gemNumber = 0;

let twoColliding = false;

const s = Snap("#id_svg");
s.attr({
  viewBox: "0 0 600 300",
});

let r1 = 10;
let r2 = 35;
let r3 = 5;

let coin = s.circle(Math.random() * 600, Math.random() * 300, r3);
coin.attr({
  fill: "yellow",
  stroke: "#e3ba68",
  strokeWidth: 3,
});

let coin2 = s.circle(Math.random() * 600, Math.random() * 300, r3);
coin2.attr({
  fill: "yellow",
  stroke: "#e3ba68",
  strokeWidth: 3,
});

let circleMoving = s.circle(150, 150, r2);
circleMoving.attr({
  fill: "pink",
  stroke: "#bf6d86",
  strokeWidth: 5,
});

let circleConstant = s.circle(400, 100, r1);
circleConstant.attr({
  fill: "#5f95a0",
  stroke: "#265f64",
  strokeWidth: 3,
});

function collDetection() {
  let X1 = parseInt(circleMoving.attr("cx"));
  let Y1 = parseInt(circleMoving.attr("cy"));
  let X2 = parseInt(circleConstant.attr("cx"));
  let Y2 = parseInt(circleConstant.attr("cy"));

  let H = (X1 - X2) * (X1 - X2) + (Y1 - Y2) * (Y1 - Y2);

  let h = Math.sqrt(H);

  let d = r1 + r2;

  console.log("h:" + h);
  console.log("d:" + d);

  if (h == d || h < d) {
    if (twoColliding == false) {
      let mySound = new Audio("roblox.mp3");
      mySound.play();

      crashNumber += 1;

      console.log(crashNumber);
      twoColliding = true;
    }
  } else {
    twoColliding = false;
  }
  updateCrashNumGui();
}

function updateCrashNumGui() {
  let doc = document.getElementById("crash_num");
  doc.innerHTML = crashNumber;
}

function collDetection2() {
  let X1 = parseInt(circleConstant.attr("cx"));
  let Y1 = parseInt(circleConstant.attr("cy"));
  let X2 = parseInt(coin.attr("cx"));
  let Y2 = parseInt(coin.attr("cy"));

  let H = (X1 - X2) * (X1 - X2) + (Y1 - Y2) * (Y1 - Y2);
  let h = Math.sqrt(H);
  let d = r1 + r3;

  console.log("h:" + h);
  console.log("d:" + d);

  if (h == d || h < d) {
    let mySound = new Audio("gem sound.mp3");
    mySound.play();

    let a = Math.random() * 600;
    let b = Math.random() * 300;

    coin.attr({ cx: a });
    coin.attr({ cy: b });
    gemNumber = gemNumber + 2;
  }
  updateCoinNumGui();
}

function collDetection3() {
  let X3 = parseInt(coin2.attr("cx"));
  let Y3 = parseInt(coin2.attr("cy"));
  let X1 = parseInt(circleConstant.attr("cx"));
  let Y1 = parseInt(circleConstant.attr("cy"));

  let P = (X1 - X3) * (X1 - X3) + (Y1 - Y3) * (Y1 - Y3);
  let p = Math.sqrt(P);
  let d = r1 + r3;

  if (p == d || p < d) {
    let mySound = new Audio("gem sound.mp3");
    mySound.play();

    let k = Math.random() * 600;
    let l = Math.random() * 300;

    coin2.attr({ cx: k });
    coin2.attr({ cy: l });

    gemNumber = gemNumber + 2;
  }
  updateCoinNumGui();
}

function updateCoinNumGui() {
  let doc = document.getElementById("gem_num");
  doc.innerHTML = gemNumber;
}

function moveLeft(circle, Delta) {
  let sOld = circle.attr("cx");
  let xOld = parseInt(sOld);
  let xNew = xOld - Delta;
  circle.attr({
    cx: xNew,
  });

  collDetection();
  collDetection2();
  collDetection3();
}

function moveRight(circle, Delta) {
  let sOld = circle.attr("cx");
  let xOld = parseInt(sOld);
  let xNew = xOld + Delta;
  circle.attr({
    cx: xNew,
  });
  collDetection();
  collDetection2();
  collDetection3();
}

function moveUp(circle, Delta) {
  let sOld = circle.attr("cy");
  let yOld = parseInt(sOld);
  let yNew = yOld - Delta;
  circle.attr({
    cy: yNew,
  });
  collDetection();
  collDetection2();
  collDetection3();
}

function moveDown(circle, Delta) {
  let sOld = circle.attr("cy");
  let yOld = parseInt(sOld);
  let yNew = yOld + Delta;
  circle.attr({
    cy: yNew,
  });
  collDetection();
  collDetection2();
  collDetection3();
}

document.addEventListener("keydown", function (event) {
  event.preventDefault();
  const key = event.key;
  switch (key) {
    case "w":
      moveUp(circleMoving, yDelta);
      break;
    case "a":
      moveLeft(circleMoving, xDelta);
      break;
    case "s":
      moveDown(circleMoving, yDelta);
      break;
    case "d":
      moveRight(circleMoving, xDelta);
      break;
    case "W":
      moveUp(circleMoving, yDelta);
      break;
    case "A":
      moveLeft(circleMoving, xDelta);
      break;
    case "S":
      moveDown(circleMoving, yDelta);
      break;
    case "D":
      moveRight(circleMoving, xDelta);
      break;

    case "ArrowUp":
      moveUp(circleConstant, yDelta1);
      break;
    case "ArrowLeft":
      moveLeft(circleConstant, xDelta1);
      break;
    case "ArrowDown":
      moveDown(circleConstant, yDelta1);
      break;
    case "ArrowRight":
      moveRight(circleConstant, xDelta1);
      break;
  }
});
