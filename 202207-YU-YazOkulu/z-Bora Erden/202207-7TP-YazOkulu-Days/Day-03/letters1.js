function circleN(n) {
  for (let a = 2; a < n; a++) {
    let b = (a - 2) * 20 + 40;
    let c = (a - 2) * 20 + 100;
    let bigCircle = s.circle((n * 20) / 2 + 70, b, 10); //dikey
    console.log(bigCircle.outerSVG());

    bigCircle.attr({
      fill: "#bada55",
      stroke: "#000",
      strokeWidth: 5,
    });
    let bigCircle1 = s.circle(c, 20, 10); //üst yatay
    console.log(bigCircle1.outerSVG());

    bigCircle1.attr({
      fill: "#bada55",
      stroke: "#000",
      strokeWidth: 5,
    });
    let bigCircle2 = s.circle(c, n * 20, 10); //anen yatay
    console.log(bigCircle2.outerSVG());

    bigCircle2.attr({
      fill: "#bada55",
      stroke: "#000",
      strokeWidth: 5,
    });
  }
}

circleN(6);

// ******************************* A intro

("use strict");

function oyunoyunda(z) {
  for (let h = 0; h < 7; h++) {
    let o = 20;
    let bigCircle4 = s.circle(220 + o * h, 20, 10);
    console.log(bigCircle4.outerSVG());

    bigCircle4.attr({
      fill: "#bada55",
      stroke: "#000",
      strokeWidth: 5,
    });
    let bigCircle3 = s.circle(200, 20 + o * h, 10);
    console.log(bigCircle3.outerSVG());

    bigCircle3.attr({
      fill: "#bada55",
      stroke: "#000",
      strokeWidth: 5,
    });
    let bigCircle5 = s.circle(200 + o * h, 80, 10); //dikey
    console.log(bigCircle5.outerSVG());

    bigCircle5.attr({
      fill: "#bada55",
      stroke: "#000",
      strokeWidth: 5,
    });
  }
}
oyunoyunda(6);

("use strict"); //keep this

for (let i = 0; i < 20; i++) {
  console.log(i);
}

function alan(a, b) {
  console.log("kısa kenar:", a);
  console.log("uzun kenar:", b);
  console.log("alan:", a * b);
}
alan(1, 6);

("use strict");
function oyunoyundas(q) {
  for (let p = -1; p < q; p++) {
    for (let t = 0; t < 4; t++) {
      let u = 20;
      let bigCircle6 = s.circle(400 + (p * u) / 2, 40 + (u * p) / 1.1, 10); //sağ
      console.log(bigCircle6.outerSVG());

      bigCircle6.attr({
        fill: "#bada55",
        stroke: "#000",
        strokeWidth: 5,
      });
      let bigCircle7 = s.circle(380 - (p * u) / 2, 40 + (u * p) / 1.1, 10); //sol
      console.log(bigCircle7.outerSVG());

      bigCircle7.attr({
        fill: "#bada55",
        stroke: "#000",
        strokeWidth: 5,
      });

      let bigCircle8 = s.circle(350 + u * t, 94.5455, 10);
      console.log(bigCircle8.outerSVG());

      bigCircle8.attr({
        fill: "#bada55",
        stroke: "#000",
        strokeWidth: 5,
      });
    }
  }
}
oyunoyundas(8);

function ananoyunda(x) {
  for (let w = 0; w < x; w++) {
    let y = 10;

    let bigCircle10 = s.circle(450 + w * y, 20 + w * y, 10); //sağ
    console.log(bigCircle10.outerSVG());

    bigCircle10.attr({
      fill: "#bada55",
      stroke: "#000",
      strokeWidth: 5,
    });
  }
}
ananoyunda(6);
