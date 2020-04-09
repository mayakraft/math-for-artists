svg.size(-6, -6, 10, 10);
svg.strokeWidth(0.02);

const dft = function (x) {
  const X = [];
  const N = x.length;
  for (let k = 0; k < N; k += 1) {
    let re = 0;
    let im = 0;
    for (let n = 0; n < N; n += 1) {
      const theta = (Math.PI*2 * k * n) / N;
      re += x[n] * Math.cos(theta);
      im -= x[n] * Math.sin(theta);
    }
    re = re / N;
    im = im / N;
    const freq = k;
    const amp = Math.sqrt(re * re + im * im);
    const phase = Math.atan2(im, re);
    X[k] = { re, im, freq, amp, phase };
  }
  return X;
};

const epicycles = function (x, y, fourier, rot = 0) {
  for (let i = 0; i < fourier.length; i += 1) {
    let prevx = x;
    let prevy = y;
    const freq = fourier[i].freq;
    const radius = fourier[i].amp;
    const phase = fourier[i].phase;
    x += radius * Math.cos(freq * time + phase + rot);
    y += radius * Math.sin(freq * time + phase + rot);
    svg.circle(prevx, prevy, radius)
      .fill("none")
      .stroke("black");
    svg.line(prevx, prevy, x, y).stroke("red");
  }
  return [x, y];
};

let time = 0;
let x = [];
let y = [];
let path = [];

for (let i = 0; i < 100; i += 1) {
  const a = i/100 * Math.PI * 2;
  x.push(Math.cos(3*a));
  y.push(Math.sin(5*a));
  // y.push(Math.sin(5*a) + 0.2*Math.sin(2*a) + Math.cos(3*a));
}
const fourierX = dft(x);
const fourierY = dft(y);

fourierX.sort((a,b) => b.amp - a.amp);
fourierY.sort((a,b) => b.amp - a.amp);

svg.play = function (e) {
  svg.removeChildren();
  svg.background('white');
  svg.line(-2,0,2,0).stroke("#ccc");
  svg.line(0,-2,0,2).stroke("#ccc");

  const vx = epicycles(0, -4, fourierX, 0);
  const vy = epicycles(-4, 0, fourierY, Math.PI/2);
  const v = [vx[0], vy[1]];
  path.unshift(v);
  svg.line(vx[0], vx[1], v[0], v[1]).stroke("#ccc");
  svg.line(vy[0], vy[1], v[0], v[1]).stroke("#ccc");
  svg.polyline(path)
    .stroke("black")
    .fill("none");

  const dt = Math.PI*2 / fourierX.length;
  time += dt;
  
  if (time > Math.PI*2) {
    time = 0;
    path = [];
  }
};
