const averageColors = function(colors) {
  const l = colors.length;
  return colors
    .map(el => Array.from(el.levels).map(n => n/l))
    .reduce((c1, c2) => [
      c1[0]+c2[0], c1[1]+c2[1], c1[2]+c2[2]
    ], [0, 0, 0]);
};

const colorDistance = function(a, b) {
  return Math.sqrt(
      Math.pow(a.levels[0] - b.levels[0], 2)
    + Math.pow(a.levels[1] - b.levels[1], 2)
    + Math.pow(a.levels[2] - b.levels[2], 2)
  );
};

var data = [];
// index-match data. which center is it nearest?
var piles = []; 
var centers = [];

function preload() {
  data = [
    color("#e53"),
    color("#5e3"),
    color("#35e"),
    color("#158"),
    color("#29c"),
    color("#19c"),
    color("#1d2"),
    color("#6c8"),
    color("#3e0"),
  ];
  centers = [
    color(128, 127, 127),
    color(127, 128, 127),
    color(127, 127, 127)
  ];
}

var kmeans = function() {
  piles = data.map(el => {
    const d0 = colorDistance(el, centers[0]);
    const d1 = colorDistance(el, centers[1]);
    const d2 = colorDistance(el, centers[2]);
    if (d0 < d1 && d0 < d2) { return 0; }
    if (d1 < d0 && d1 < d2) { return 1; }
    if (d2 < d0 && d2 < d1) { return 2; }
  });
  const sorted = [
    data.filter((el, i) => piles[i] === 0),
    data.filter((el, i) => piles[i] === 1),
    data.filter((el, i) => piles[i] === 2),
  ];
  return [
    averageColors(sorted[0]),
    averageColors(sorted[1]),
    averageColors(sorted[2]),
  ];
};

function setup() {
  createCanvas(512, 512);
}

function draw() {
  scale(2, 2);
  background(0);
  strokeWeight(2);
  data.forEach((p,i) => {
    stroke(
      piles[i] === 0 ? 255 : 0,
      piles[i] === 1 ? 255 : 0,
      piles[i] === 2 ? 255 : 0
    );
    fill(p);
    circle(p.levels[0], p.levels[1], 2 + p.levels[2] * 0.05);
  });

  stroke(255);
  centers.forEach((p,i) => {
    fill(i===0?255:0, i===1?255:0, i===2?255:0);
    circle(p.levels[0], p.levels[1], 20);
  });
}

function mousePressed() {
  centers = kmeans().map(r => color(...r));
  console.log(piles);
}
