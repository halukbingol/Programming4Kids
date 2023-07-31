"use strict"; // keep this

// ******************************* V intro
const s = Snap("#id_svg");
s.attr({
  viewBox: "0 0 600 300",
});
// ******************************* A intro



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
let ballA = s.circle(150, 150, 100).attr({
  fill: "#bada55",
  stroke: "#000",
  strokeWidth: 5,
});

// Motion control
const xDelta = 20;
const yDelta = 20;

function moveLeft(ball) {
  let str = ball.attr("cx");
  let int = parseInt(str);
  let xNew = int - xDelta;
  ball.attr({
    cx: xNew,
  });
}

function moveRight(ball) {
  let str = ball.attr("cx");
  let int = parseInt(str);
  let xNew = int + xDelta;
  ball.attr({
    cx: xNew,
  });
}

function moveDown(ball) {
  let str = ball.attr("cy");
  let int = parseInt(str);
  let yNew = int + yDelta;
  ball.attr({
    cy: yNew,
  });
}

function moveUp(ball) {
  let str = ball.attr("cy");
  let int = parseInt(str);
  let yNew = int - yDelta;
  ball.attr({
    cy: yNew,
  });
}

// setInterval(blink, 3000);
// function blink() {}
