# Linear algebra assignment

Create a **fire-escape map** with exit instructions in the form of a sequence of **transformation matrices**.

This doesn't have to be a fire-escape, it can be instructions for how to get from any one place to another in ITP. The instructions should at least consist of *turning* and *walking* (rotate, translate). Present your instructions in two forms:

1. as a sequence of transformation matrices, laid out side by side.
2. one composition matrix to represent the total transform (multiply all of 1 together).

Translation units can be in *"number of human-steps"*, or if you prefer to measure it out use something like *feet* or *meters*.

## Setup

You have to make two assumptions: decide where to put the origin, and which direction are your X and Y-axes. These are entirely up to you. If I can make a suggestion:

One sensible approach is to place the origin to be where the reader is standing when they are looking at the sign, and the X-axis is the direction you are facing looking into the sign. When it comes to the Y-axis, I would suggest making it positive in your left-direction. This fits with the [right hand rule](https://en.wikipedia.org/wiki/Right-hand_rule) making "looking up" a positive in the Z-axis (if we consider 3D).

This means a translation forward five steps would be (5, 0). This would take you into the wall, which makes sense, the first transform you'll need is to "turn around".

> This is what phones do when you boot up the orientation sensors without the compass, the X-axis is the forward direction on boot. When it does include the compass it aligns the axes to the North Pole.

This makes a translation along the Y-axis a "slide left or right", or a [strafe](https://en.wikipedia.org/wiki/Strafing_(video_games)) in videogames. This is a totally valid direction to give! (even if people tend to prefer to turn then walk forward)

## Matrix Multiplication

The matrix-representation of 2D transforms we learned about was **column-major 2×3 matrices**. They are used by CSS and SVG, you can [read about them here](https://www.w3.org/TR/css-transforms-1/#interpolation-of-2d-matrices).

> Remember the first two columns are the î and ĵ basis vectors, the third doesn't describe a basis vector at all, it's simply the translation vector, sort of *tacked-on*. It's a computer-graphics standard but calculators don't know what to do with this extra column, [wolfram alpha](https://www.wolframalpha.com/input/?i={{0%2C-1%2C0}%2C{1%2C0%2C0}}++*+{{1%2C0%2C20}%2C{0%2C1%2C20}}) will complain: *matrices have incompatible dimensions*.

We have to use our own calculators. Graphics libraries know how to handle this matrix multiplication. I threw together a quick html file which will multiply 2 matrices.

### [matrix.html](matrix.html)

if you are interested this is the matrix multiply function this file uses:

```javascript
var multiply = function multiply(m1, m2) {
  return [
    m1[0] * m2[0] + m1[2] * m2[1],
    m1[1] * m2[0] + m1[3] * m2[1],
    m1[0] * m2[2] + m1[2] * m2[3],
    m1[1] * m2[2] + m1[3] * m2[3],
    m1[0] * m2[4] + m1[2] * m2[5] + m1[4],
    m1[1] * m2[4] + m1[3] * m2[5] + m1[5]
  ];
};
```

