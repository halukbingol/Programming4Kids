const xDelta = 10;
var r1 = 30;
var r2 = 30;
let c = randomInt(0, 1000);
let d = randomInt1(0, 500);
let circleMoving = s.circle(140, 200, r1);
circleMoving.attr({
  fill: "#bada55",
  stroke: "#000",
  strokeWidth: 5,
});

let circleGoal = s.circle(randomInt(0, 1000), randomInt1(0, 500), r2);
circleGoal.attr({
  fill: "#FF0000",
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
  collosion(p1);
}
function moveLeft1() {
  let sOld = circleGoal.attr("cx");
  let xOld = parseInt(sOld);
  let xNew = xOld - xDelta;
  circleGoal.attr({
    cx: xNew,
  });
  collosion1();
}

function moveRight() {
  let sOld = circleMoving.attr("cx");
  let xOld = parseInt(sOld);
  let xNew = xOld + xDelta;
  circleMoving.attr({
    cx: xNew,
  });
  collosion();
}
function moveRight1() {
  let sOld = circleGoal.attr("cx");
  let xOld = parseInt(sOld);
  let xNew = xOld + xDelta;
  circleGoal.attr({
    cx: xNew,
  });
  collosion1();
}
function moveUp() {
  let sOld = circleMoving.attr("cy");
  let yOld = parseInt(sOld);
  let yNew = yOld - xDelta;
  circleMoving.attr({
    cy: yNew,
  });
  collosion();
}
function moveUp1() {
  let sOld = circleGoal.attr("cy");
  let yOld = parseInt(sOld);
  let yNew = yOld - xDelta;
  circleGoal.attr({
    cy: yNew,
  });
  collosion1();
}
function moveDown() {
  let sOld = circleMoving.attr("cy");
  let yOld = parseInt(sOld);
  let yNew = yOld + xDelta;
  circleMoving.attr({
    cy: yNew,
  });
  collosion();
}
function moveDown1() {
  let sOld = circleGoal.attr("cy");
  let yOld = parseInt(sOld);
  let yNew = yOld + xDelta;
  circleGoal.attr({
    cy: yNew,
  });
  collosion1();
}
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomInt1(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function eksenX() {
  let unuse_player1X = circleMoving.attr("cx");
  let unuse_npc1X = circleGoal.attr("cx");
  let player1X = parseInt(unuse_player1X);
  let npc1X = parseInt(unuse_npc1X);
  let A = player1X - npc1X;
  let eksenX = Math.abs(A);
  return eksenX;
}

function eksenY() {
  let unuse_player1Y = circleMoving.attr("cy");
  let unuse_npc1Y = circleGoal.attr("cy");
  let Player1Y = parseInt(unuse_player1Y);
  let npc1Y = parseInt(unuse_npc1Y);
  let a = Player1Y - npc1Y;
  var eksenY = Math.abs(a);
  return eksenY;
}

function getDistance() {
  let hipnotenus = Math.sqrt(eksenY() * eksenY() + eksenX() * eksenX());
  console.log("hipotenüs=", hipnotenus);
  return hipnotenus;
}

function collosion() {
  if (r1 + r2 >= getDistance()) {
    alert("Yeşil Kazandı!");
    location.reload();
  } else {
    getDistance();
  }
}
function collosion1() {
  if (r1 + r2 >= getDistance()) {
    alert("Kırmızı Kazandı!");
    location.reload();
  } else {
    getDistance();
  }
}



window.addEventListener("keydown", function(event) {
  if (event.defaultPrevented) {
    return;
  }
  if (event.code === "ArrowDown"){
      // Handle "down"
      moveDown(-xDelta);
  } else if (event.code === "ArrowUp"){
      // Handle "up"
      moveUp(xDelta);
  } else if (event.code === "ArrowLeft"){
      // Handle "left"
      moveLeft(-xDelta);
  } else if (event.code === "ArrowRight"){
      // Handle "right"
      moveRight(xDelta);
  }
  refreshPosition();
  event.preventDefault();
}, true);
window.addEventListener("keydown", function(event) {
  if (event.defaultPrevented) {
    return;
  }
  if (event.code === "KeyS"){
      // Handle "down"
      moveDown1(-xDelta);
  } else if (event.code === "KeyW"){
      // Handle "up"
      moveUp1(xDelta);
  } else if (event.code === "KeyA"){
      // Handle "left"
      moveLeft1(-xDelta);
  } else if (event.code === "KeyD"){
      // Handle "right"
      moveRight1(xDelta);
  }
  refreshPosition();
  event.preventDefault();
}, true);

// setInterval(blink, 3000);
// function blink() {}
