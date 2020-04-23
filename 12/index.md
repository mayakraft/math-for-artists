# 12: Shaders

### Review: Linear Algebra in WebGL

>  open on your mobile device. make sure the link is using **https**!

01: https://mobile-sensors.glitch.me/ or [code editor](https://glitch.com/edit/#!/mobile-sensors?path=public/client.js:1:0)

02: https://lookaround.glitch.me/ or [code editor](https://glitch.com/edit/#!/lookaround?path=public/client.js:1:0)

### dot and cross products in 3D

before checking out the second sketch, or while you are checking it out, review this sketch from weeks ago: https://editor.p5js.org/robbykraft/sketches/EcVSRM9l

what do you use to discover if you are looking at one of the objects in the distance? dot product. 

> drawing of two dots in space, each with a direction vector. 

you have to shift everything to the origin (unless the camera is already at the origin).

# Shaders

see the wonderful world of shaders at [shadertoy.com](https://shadertoy.com)

the kind of sketches that are easy to do in shaders have a **heavy** relationship to math. the tools we are using are math operations. doing math with shaders is the most math way of doing math on a computer.

### History: Demoscene

[Memories](https://www.jwz.org/blog/2020/04/memories/) by Jamie Zawinski

demonstrate it on Dosbox (remember to set `cycles=30000`)

[demoscene in the news recently](http://demoscene-the-art-of-coding.net/2020/04/15/breakthrough-finland-accepts-demoscene-on-their-national-list-of-intangible-cultural-heritage-of-humanity/)

[Synchrony](https://synchrony.nyc/), NYC based demoscene

## Shader introduction

the paradigm shift of shaders is two parts:

1. each pixels has its own processor (basically), and runs a program to determine its color. *this is happening for every pixel*.
2. all pixels are running the same program. (but somehow, manage to appear differently)

actually additionally, there's another metaphor for when you are actually coding, it's like you're coding in [NURBS](https://en.wikipedia.org/wiki/Non-uniform_rational_B-spline) instead of mesh. (like the modeling version of vector vs. raster)

### shader example: circle

```glsl
void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
    float d = length(fragCoord) - 100.0;
    float t = clamp(d, 0.0, 1.0);
    fragColor = vec4(vec3(t), 1.0);
}
```

also:

```glsl
void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
    float t = step(100.0, length(fragCoord));
    fragColor = vec4(vec3(t), 1.0);
}
```

move the circle to the center:

```glsl
void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
    vec2 center = iResolution.xy * 0.5;
    vec2 origin = fragCoord - center;
    float t = step(80.0, length(origin));
    fragColor = vec4(vec3(t), 1.0);
}
```

### Repeating shapes, the old way: p5.js

quick demo on how to make repeating shapes, using modulus % operator:

```javascript
// p5.js
function setup() {
  createCanvas(400, 400);
  pixelDensity(1);
  loadPixels();
  for(var x = 0; x < width; x++) {
    for(var y = 0; y < height; y++){
      var px = (x + y*width) * 4;
      
      // triangles
      var color = map((x % 50) + (y % 50), 0, 100, 0, 255);
      color = color > 200 ? 255 : 0;
			
      // squares
      // var color = map(max(x % 50, y % 50), 0, 50, 0, 255);
      // color = color < 40 ? 255: 0;

      pixels[px + 0] = color;
      pixels[px + 1] = color;
      pixels[px + 2] = color;
      pixels[px + 3] = 255;
    }
  }
  updatePixels();
}
```

now, do the same in shadertoy

### Shader shaping functions

1. we need a quick learn about shaping functions

Book of Shaders: https://thebookofshaders.com/05/ scroll down to this section:

```
y = mod(x,0.5); // return x modulo of 0.5
//y = fract(x); // return only the fraction part of a number
//y = ceil(x);  // nearest integer that is greater than or equal to x
//y = floor(x); // nearest integer less than or equal to x
//y = sign(x);  // extract the sign of x
//y = abs(x);   // return the absolute value of x
//y = clamp(x,0.0,1.0); // constrain x to lie between 0.0 and 1.0
//y = min(0.0,x);   // return the lesser of x and 0.0
//y = max(0.0,x);   // return the greater of x and 0.0 
```

for further reading, more advanced shaping, follow the links through to Golan's stuff. copied here

- [www.flong.com/texts/code/shapers_poly](http://www.flong.com/texts/code/shapers_poly/)
- [www.flong.com/texts/code/shapers_exp](http://www.flong.com/texts/code/shapers_exp/)
- [www.flong.com/texts/code/shapers_circ](http://www.flong.com/texts/code/shapers_circ/)
- [www.flong.com/texts/code/shapers_bez](http://www.flong.com/texts/code/shapers_bez/)

## Ray marching

Jamie Wong, [intro to ray marching](http://jamie-wong.com/2016/07/15/ray-marching-signed-distance-functions/)

Inigo Quilez, [on ray marching](https://www.iquilezles.org/www/articles/raymarchingdf/raymarchingdf.htm)

[Inigo Quilez's collection of primitives](https://www.iquilezles.org/www/articles/distfunctions/distfunctions.htm)

[distance functions from the book of shaders](https://thebookofshaders.com/07/)

new tool: [shader doodle](https://twitter.com/halvves/status/1116749547131346944)

modified (simplified) version of Jamie's first introduction sketch:

```glsl
const int MAX_MARCHING_STEPS = 255;
const float MIN_DIST = 0.0;
const float MAX_DIST = 100.0;
const float EPSILON = 0.0001;

float SDF(vec3 samplePoint) {
    return length(samplePoint) - 1.0;
}

float shortestDistanceToSurface(vec3 eye, vec3 marchingDirection, float start, float end) {
    float depth = start;
    for (int i = 0; i < MAX_MARCHING_STEPS; i++) {
        float dist = SDF(eye + depth * marchingDirection);
        if (dist < EPSILON) {
			return depth;
        }
        depth += dist;
        if (depth >= end) {
            return end;
        }
    }
    return end;
}
            

void mainImage(out vec4 fragColor, in vec2 fragCoord)
{
    vec2 centered = fragCoord - (iResolution.xy / 2.0);
	vec3 dir = normalize(vec3(centered, -500));
    vec3 eye = vec3(0.0, 0.0, 5.0);
    float dist = shortestDistanceToSurface(eye, dir, MIN_DIST, MAX_DIST);
    
    if (dist > MAX_DIST - EPSILON) {
        // Didn't hit anything
        fragColor = vec4(0.0, 0.0, 0.0, 0.0);
		return;
    }
    
    fragColor = vec4(1.0, 0.0, 0.0, 1.0);
}
```

# Homework

at your own pace, dive into shaders and/or ray marching.

one challenge: obtain infinite repitition using mod()

alternate assignment: re-code the classic starfield screen saver. *the dots should move away from the center with what function?*