setTimeout(() => {
    alert("mavi kazandı");
}, "20000");

const xDelta = 30;
const yDelta = 30;
const x1Delta = 30;
const y1Delta = 30;
let rect_A = s.rect(-900, 0, 3000, 1500).attr({
    stroke: "#000",
    strokeWidth: 3,
    fill: "none",
});
let circleMoving = s.circle(1300, 500, 100);
circleMoving.attr({
    fill: "#4073FF",
    stroke: "#000",
    strokeWidth: 5,
});

function moveLeft() {
    let sOld = circleMoving.attr("cx");
    let xOld = parseInt(sOld);
    let xNew = xOld - x1Delta;
    if (xNew < -800) {
        return;
    }
    isCollision("kırmızı");
    circleMoving.attr({
        cx: xNew,
    });
}

function moveRight() {
    let sOld = circleMoving.attr("cx");
    let xOld = parseInt(sOld);
    let xNew = xOld + x1Delta;
    if (xNew > 2000) {
        return;
    }
    isCollision("kırmızı");
    circleMoving.attr({
        cx: xNew,
    });
}
function moveDown() {
    let sOld = circleMoving.attr("cy");
    let yOld = parseInt(sOld);
    let yNew = yOld + y1Delta;
    if (yNew > 1400) {
        return;
    }
    isCollision("kırmızı");
    circleMoving.attr({
        cy: yNew,
    });
}
function moveUp() {
    let sOld = circleMoving.attr("cy");
    let yOld = parseInt(sOld);
    let yNew = yOld - y1Delta;
    if (yNew < 100) {
        return;
    }
    isCollision("kırmızı");
    circleMoving.attr({
        cy: yNew,
    });
}
window.addEventListener(
    "keydown",
    function (event) {
        if (event.defaultPrevented) {
            return;
        }
        if (event.code === "ArrowDown") {
            // Handle "down"
            moveDown();
        } else if (event.code === "ArrowUp") {
            // Handle "up"
            moveUp();
        } else if (event.code === "ArrowLeft") {
            // Handle "left"
            moveLeft();
        } else if (event.code === "ArrowRight") {
            // Handle "right"
            moveRight();
        } else if (event.code === "KeyS") {
            // Handle "down"
            KeyS();
        } else if (event.code === "KeyW") {
            // Handle "up"
            KeyW();
        } else if (event.code === "KeyA") {
            // Handle "left"
            KeyA();
        } else if (event.code === "KeyD") {
            // Handle "right"
            KeyD();
        }

        event.preventDefault();
    },
    true
);
let smallCircle = s.circle(-100, 500, 100);
smallCircle.attr({
    fill: "#FF4040",
    stroke: "#000",
    strokeWidth: 5,
});

function KeyA() {
    let sOld = smallCircle.attr("cx");
    let xOld = parseInt(sOld);
    let xNew = xOld - xDelta;
    if (xNew < -800) {
        return;
    }
    isCollision("kırmızı");
    smallCircle.attr({
        cx: xNew,
    });
}

function KeyD() {
    let sOld = smallCircle.attr("cx");
    let xOld = parseInt(sOld);
    let xNew = xOld + xDelta;
    if (xNew > 2000) {
        return;
    }
    isCollision("kırmızı");
    smallCircle.attr({
        cx: xNew,
    });
}
function KeyS() {
    let sOld = smallCircle.attr("cy");
    let yOld = parseInt(sOld);
    let yNew = yOld + yDelta;
    if (yNew > 1400) {
        return;
    }
    isCollision("kırmızı");
    smallCircle.attr({
        cy: yNew,
    });
}
function KeyW() {
    let sOld = smallCircle.attr("cy");
    let yOld = parseInt(sOld);
    let yNew = yOld - yDelta;
    if (yNew < 100) {
        return;
    }
    isCollision("kırmızı");
    smallCircle.attr({
        cy: yNew,
    });
}
function isCollision(who) {
    let d = getDistance();
    if (d < 200) {
        alert(who + " kazandı");
    } else {
    }
}
function getDistance() {
    let x1 = circleMoving.attr("cx");
    let x2 = smallCircle.attr("cx");
    let y1 = circleMoving.attr("cy");
    let y2 = smallCircle.attr("cy");
    let d2 =
        Math.abs(x1 - x2) * Math.abs(x1 - x2) +
        Math.abs(y1 - y2) * Math.abs(y1 - y2);
    let d = Math.sqrt(d2);
    console.log(d);
    return d;
}

let i = 0;
function move() {
    if (i == 0) {
        i = 1;
        let elem = document.getElementById("myBar");
        let width = 1;
        let id = setInterval(frame, 200);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.width = width + "%";
            }
        }
    }
}
move();
