"use strict"; // keep this
const xDelta = 20;
const yDelta = 20;

// ******************************* V intro
const s = Snap("#id_svg");
s.attr({
    viewBox: "0 0 600 300",
});
// ******************************* A intro

// score board
const scoreA = document.querySelector("#idScoreA");
const scoreB = document.querySelector("#idScoreB");

function setText(elText, value) {
  scoreA.innerHTML = "" + value;
}
function incrementText(elText) {
  let intScoreA = parseInt(scoreA.innerHTML);
  intScoreA++;
}
// init score
setText(scoreA,0);a
setText(scoreB,0);


// event handler
this.addEventListener("keypress", (event) => {
    let keyPressed = event.key;
    console.log("key pressed:" + keyPressed);
    if (keyPressed === "a" || keyPressed === "A") {
      keyA();
      up(circleA);
    } else if (keyPressed === "b" || keyPressed === "B") {
      keyB();
      up(circleB);
    }
  });

//  circle
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
    incrementText(scoreA);
}

function moveRight() {
    let sOld = circleMoving.attr("cx");
    let xOld = parseInt(sOld);
    let xNew = xOld + xDelta;
    circleMoving.attr({
        cx: xNew,
    });
}

function moveDown() {
    let sOld = circleMoving.attr("cy");
    let yOld = parseInt(sOld);
    let yNew = yOld + yDelta;
    circleMoving.attr({
        cy: yNew,
    });
}

function moveUp() {
    let sOld = circleMoving.attr("cy");
    let yOld = parseInt(sOld);
    let yNew = yOld - yDelta;
    circleMoving.attr({
        cy: yNew,
    });
}

// setInterval(blink, 3000);
// function blink() {}
