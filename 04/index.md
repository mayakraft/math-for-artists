# 04: Trigonometry

Today we continue our dive into geometry with a focus on 2D, triangles, and trig functions.

> materials: (for each student: 1 compass, 1 straightedge, 1 pen, 1 large piece of paper)
>
> one square cut out of cardboard for example, as a cookie cutter.
>
> scissors: we need to cut a triangle (for folding)

## Compass and Straightedge Constructions

on Plato's realm of forms.

As we carve out 2-dimensional space on our paper, we're grasping at another dimension just out of reach. Underneath our circle is a perfect circle, *the form of a circle*, nearly captured on our paper between the fibers and bits of ink. Even if our incantation is imperfect, we get better each time. We're after something pure and ultimately un-capturable. But if we get close enough, we trick our senses, and for a second we believe that we're looking at something out of this world.

[Sesame Street's Geometry of Circles](https://muppet.fandom.com/wiki/Geometry_of_Circles)

possible constructions:

- line (line segment)
- circle

possible operations:

- you can extend a line to the edge of the page.
- you can match the radius of your compass to a line segment, effectively copying the length.

some assumptions:

- each time we draw a circle, we are also marking it's center
- our compasses are [non-collapsing compasses](https://en.wikipedia.org/wiki/Compass_(drawing_tool)#Compasses_and_straightedge) (most modern ones are)

### Equillateral triangle

Given no starting elements, create an equillateral triangle.

### Perpendicular

given 1 line, construct a perpendicular to the line (2 circles, 1 line)

*can the two circles used be different radii?*

### Parallel

given 1 line and 1 non-collinear point, construct a parallel line passing through the point (3 circles, 1 line)

## Challenges

### Bisect an angle

### Double an angle

given an angle, create a new line that increases the angle by a factor of 2.

### √2

given 1 line (length: 1) extend it so the new length is the square root of two.

*recap- we can now draw a 45 degree angle. what are the angles we can draw? equillateral triangle 60 deg, 30 and 120 by halving/doubling. 90 degrees from a perpendicular line.*

### √3

given 1 line (length: 1) extend it so the new length is the square root of three. if helpful give the hint that the square root of three is the vertical length of an equillateral triangle.

## Triangle Centers

[Journey to the Center of a Triangle, Bruce & Katharine Cornwell](https://www.youtube.com/watch?v=v_oZ9Pe0yRg)

### Incenter

cut out a triangle out of paper. fold the angle bisectors. origami rabbit ear fold.

draw an incircle with a compass

### Centroid

the balancing point - fold midpoints on the edges, fold the opposite to the midpoint. balance the triangle on your pen

### Circumcenter

Fold a Voronoi, then complete the delaunay triangulation. 

**the right triangle game**: cut out a triangle that is VERY close to a right triangle (but eyeball it so it should be off by a tiny fraction) fold the angle bisectors to get the circumcenter. circumcenter tells you if a triangle is acute / right / obtuse

### wrap up

Show that the Euler line passes through all 3 points. what are the centers for an Equillateral triangle?

## More Puzzles (outside of class)

- cut a rectangle into two equal areas with a line that passes through a point. (chop two rectangles in two piece each, with equal areas)

- Draw a tangent circle, given a line and the circle's center.

- draw a tangent to a circle, given a point on a circle.

- given a square:
  - inscribe a circle in a square
  - inscribe a square in another square, with a vertex at a point

## History

[Hipparchus](https://en.wikipedia.org/wiki/Hipparchus)


[Pythagorean Triples](https://en.wikipedia.org/wiki/Pythagorean_triple) are whole numbers that satisfy Pythagorean's theorem: 3x4x5, 5x12x13

The [Plimpton 322](https://en.wikipedia.org/wiki/Plimpton_322) is the oldest arithmetical work, it lists Pythagorean Triples

Is it possible to "square the circle"?

Can you trisect an angle? (Can you construct an angle of 20°?) (you can with origami!)

## Derive Sine and Cosine

first draw the cords. these are the secants

```javascript
size(-2, -2, 4, 4);
background("white", true);

for (var i = 0; i <= 100; i++) {
  var a = i / 100 * Math.PI * 2;
  var x = Math.cos(a)
  var y = Math.sin(a);
  circle(x, y, 0.01)

  line(1, 0, x, y)
    .stroke("black")
    .strokeWidth(0.01);
}
```

then you can take the lengths of the cords and stack them next to one another

```javascript
size(-2.5, -1.5, 5, 6);
background("white");

for (var i = 0; i <= 100; i++) {
  var a = i / 100 * Math.PI * 2;
  var x = Math.cos(a)
  var y = Math.sin(a);
  circle(x, y, 0.01)

  line(1, 0, x, y)
    .stroke("black")
    .strokeWidth(0.01);

  var d = Math.sqrt((x-1) ** 2 + (y-0) ** 2) / 2;
  line(-2+i/50, 3, -2+i/50, 3-d)
    .stroke("black")
    .strokeWidth(0.01);
  line(i/50, 3, i/50, 3+d)
    .stroke("black")
    .strokeWidth(0.01);
}
```

## Coordinate systems

Cartesian and polar coordinates, and conversion between the two.

### sine, cosine

sine and cosine are *ratios*. ratios between two lengths.

### atan2

why atan2 works. what is tangent anyway? (is it related to drawing a circle?)

### distance formula

how do you draw a circle in code?

### common trig problems encoutered by media artists

bisect 2 angles in code

calculate the clockwise (or counter clockwise) interior angle from one to the next.

```javascript
// my solution to the problem
function clockwise_angle (a, b) {
  while (a < 0) { a += Math.PI * 2; }
  while (b < 0) { b += Math.PI * 2; }
  var a_b = a - b;
  return (a_b >= 0)
    ? a_b
    : Math.PI * 2 - (b - a);
};
```

### Classwork

Find a circle that goes through three points

Hipparchus Calculations

Calculate the diameter of the Earth

code a math rose. (polar coords)

### Code a circle

without sine/cosine

```javascript
background("white", true);
size(-2, -2, 4, 4);

for (var i = -100; i <= 100; i++) {
  var x = i / 100;
  var y = Math.sqrt(1 - (x ** 2));
  circle(x, y, 0.01)
  circle(x, -y, 0.01)
}
```

with sine and cosine

```javascript
for (var i = 0; i < 100; i++) {
	var a = i / 100 * Math.PI * 2;
  circle(Math.cos(a), Math.sin(a), 0.01);
}
```

## Tilings

### Reference

Adam Williamson and [Richard Henry](https://www.richardhenry.art/)

- [Arabesques / biomorphs](https://www.adamwilliamson.com/biomorphs/)
- [Longer introduction to Arabesques](https://artofislamicpattern.com/resources/introduction-to-islimi/)
- [Islamic Geometry](https://artofislamicpattern.com/resources/educational-posters/)

### Videos

- [Sesame Street's Geometry of Circles](https://muppet.fandom.com/wiki/Geometry_of_Circles)
- [Journey to the Center of a Triangle, Bruce & Katharine Cornwell](https://www.youtube.com/watch?v=v_oZ9Pe0yRg)
- [Paul Bourke, Geometry](http://paulbourke.net/geometry/)
