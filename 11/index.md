# 11: Number Shaping

### Review: Number Shaping

the importance of the UNIT interval. between 0...1.

The whole point is to be effortlessly alternate between addition-type operations and multiplication/scaling-type operations. The reason this works so well is that you know for certain where the top and bottom bounds will end up. the 1 goes to 1 and 0 goes to 0.

and one general application is animation curves. Lerp is just one kind of interpolation. cosine, cubic, catmull-rom.

Show them the graphs of sqrt, pow2, and y=x. change the pow2 to pow3 and 4, see how it exaggerates the curve. what about logarithmic? Sine? things that don't normally fit in between these spaces.

![](images/number-shaping.png)

**SHAPING CHALLENGE**: random int between (13, 128) but, anything past 50 is unrecognizably similar, we need to front-load these numbers. more up front less in the back (this is the limits of map function ability)

## Recap: signal processing

"smoothing a sound file", running a LOP block in puredata. [link to pd file](low-pass.pd)

![](images/lop.png)

### Exercise: Audacity

create 2 tones: 200hz and 48,000hz, so that they are both in the same file.

![](images/two-waves-1.png)

mix down and export the file and open up the result:

![](images/two-waves-2.png)

now apply the low pass filter and watch it revert back to the low frequency. do the same with the high pass filter.

Think back to our epicycles sketch. this is the same as removing all the high frequencies, the small circles. 

**Photoshop curves**: have you noticed that photoshop curves doesn't like when there are hard-jumps. the smoother the function the better.

![](images/filters.png)

### Applications of Fourier in graphics: JPEG compression

color spaces

Discrete cosine transform: how JPEG compression works

![](https://upload.wikimedia.org/wikipedia/commons/2/24/DCT-8x8.png)

play with DCT in grapher (it can do 3D easily), run the equation

```
z = cos(x) * sin(y)
```

![](images/dct.png)

### Epicycles vs. random

Randomness was big in the 1970’s, algorists employing randomness especially in visual art. Aleatoric music. Fluxus.

computer’s pseudo random generator, testing random number generators

can we pull up a sketch of random dots. compare against the random dots of a night sky.

the crashing of the ocean waves on the shore is not random. there is a regularity to the cycle within the randomness feeling.

There is a strange correlation between randomness and sine curves when we use Fourier to approximate a random sequence. especially if we smooth it out by removing the high ends.

Link: [Shepherding Random Numbers, by Anders Hoff](https://inconvergent.net/2016/shepherding-random-numbers/)

### xxx Recap: Logarithms

geometric progression vs. arithmetic progression

## Applications of complex numbers

did anybody explore complex numbers further?

How is the complex plane different from just using x and y axes?

for me it comes down to this:

### (a + b)²

```
(a + b) * (a + b)
```

in normal math, this expands into this form:

### (a+b)(a+b) = a² + 2ab + b²

but with complex numbers, you get the same thing except the b² is negative.

### (a+bi)(a+b𝒊) = a² + 2ab𝒊 + (b𝒊)²

and remember 𝑖² is -1, so it reduces into

### a² + 2ab𝒊 - b²

## Mandelbrot fractal

first, review the summary notation. iterations. how does a for-loop look in math notation

### ∑ aᵢ = a₁ + a₂ + a𝑛

a good way to understand it is looking at [arithmetic and geometric means](https://en.wikipedia.org/wiki/Average#Pythagorean_means)

many of the [approximations of pi]([https://en.wikipedia.org/wiki/List_of_formulae_involving_%CF%80#Formulae_yielding_%CF%80](https://en.wikipedia.org/wiki/List_of_formulae_involving_π#Formulae_yielding_π)) are made with the sum operator 

code the mandelbrot fractal in p5.js.

```javascript
// Mandelbrot fractal by Dan Shiffman, https://www.youtube.com/watch?v=6z7GQewK-Ks
function setup() {
  createCanvas(400, 400);
  pixelDensity(1);
  loadPixels();
  for (var x = 0; x < width; x++) {
    for (var y = 0; y < height; y++) {
      
      var real = map(x, 0, width, -1.5, 0.5);
      var imag = map(y, 0, height, -1, 1);
      var startReal = real;
      var startImag = imag;
      
      var i;
      for(i = 0; i < 100; i++) {
        var newReal = real**2 - imag**2;
        var newImag = 2 * real * imag;
        
        real = newReal + startReal;
        imag = newImag + startImag;
        
        if (abs(real + imag) > 16) {
          break;
        }
      }
      
      var color = map(i, 0, 100, 0, 1);
      color = Math.sqrt(color) * 255;
      if (i === 100) {
        color = 0;
      }
      
      var px = (x + y*width) * 4;
      pixels[px + 0] = color;
      pixels[px + 1] = color;
      pixels[px + 2] = color;
      pixels[px + 3] = 255;
    }
  }
  updatePixels();
}
```



## Recap: Linear algebra

Project: Create a 3D world that rotates around with your device gyroscope/accelerometer orientation, served via. ngrok, and uses dot and cross products to highlight or activate certain geometry in the world that is related to the user's viewpoint.

See: [Bounden](https://www.youtube.com/watch?v=Gete61IxkPo) the dance app

This is picking up where we left off from day 7 with the three.js introduction

```javascript
var mesh; // make this a global variable
window.onload = function () {
	var camera = new THREE.PerspectiveCamera(
		70,
		window.innerWidth / window.innerHeight,
		0.01,
		1000
	);
	camera.position.z = 10;

	var scene = new THREE.Scene();

	// add geometry here
	var box = new THREE.BoxBufferGeometry(4, 4, 4,2, 2, 2);
	var material = new THREE.MeshBasicMaterial({
		color: 0xffffff,
		wireframe: true
	});
	mesh = new THREE.Mesh(box, material);
	scene.add(mesh);

	var renderer = new THREE.WebGLRenderer({ antialias: true });
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);

	function animate() {
		renderer.render(scene, camera);
		requestAnimationFrame(animate);
	}
	animate();
};
```

join this with the orientation-sensor to matrix code

```javascript
var degtorad = Math.PI / 180;

function makeRotationMatrix(alpha, beta, gamma) {
  var _x = beta  ? beta  * degtorad : 0;
  var _y = gamma ? gamma * degtorad : 0;
  var _z = alpha ? alpha * degtorad : 0;

  var cX = Math.cos( _x );
  var cY = Math.cos( _y );
  var cZ = Math.cos( _z );
  var sX = Math.sin( _x );
  var sY = Math.sin( _y );
  var sZ = Math.sin( _z );

  //
  // ZXY-ordered rotation matrix construction.
  //

  var m11 = cZ * cY - sZ * sX * sY;
  var m12 = - cX * sZ;
  var m13 = cY * sZ * sX + cZ * sY;

  var m21 = cY * sZ + cZ * sX * sY;
  var m22 = cZ * cX;
  var m23 = sZ * sY - cZ * cY * sX;

  var m31 = - cX * sY;
  var m32 = sX;
  var m33 = cX * cY;

  return [
    m11, m12, m13, 0,
    m21, m22, m23, 0,
    m31, m32, m33, 0,
    0, 0, 0, 1
  ];
  // you will notice that the axes don't behave properly
  // the row column order is flipped. this is a common problem.
  // the fix is below:
  // return [
  //   m11, m21, m31, 0,
  //   m12, m22, m32, 0,
  //   m13, m23, m33, 0,
  //   0, 0, 0, 1
  // ];
};

function handleOrientation(e) {
  let matrix = makeRotationMatrix(e.alpha, e.beta, e.gamma);
  if (matrix) {
  	window.mesh.matrix.set(...matrix);
  }
}

function getPermission() {
  if (typeof DeviceOrientationEvent.requestPermission === "function") {
    DeviceOrientationEvent.requestPermission()
      .then(permissionState => {
        if (permissionState === "granted") {
          window.addEventListener("deviceorientation", handleOrientation);
        }
      }).catch(console.error);
  }
}
```

### Conics

[extraoridnary conics](https://www.youtube.com/watch?v=X83vac2uTUs) can this relate to fourier transforms?

### History

History of Fractals and self-similarity. L-systems. some early ideas: Julia set, Cantor set.

### References

- The Book of Shaders- [Random](https://thebookofshaders.com/10/) + [Noise](https://thebookofshaders.com/11/)
- John D. Cook, "Testing a Random Number Generator”
