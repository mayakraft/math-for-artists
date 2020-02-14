# 03: Geometry

> files relating to this lecture:
>
> - Slides ([google slides](https://docs.google.com/presentation/d/1lrzIOAB_E7L0MyConUyJg1oFDXRQleZCd2mhDaO20VU/edit?usp=sharing))
> - assignment

## Review: Homework

### Polynomial exercise

*Q: What are **polynomials**, do they exist in the real world?*

Last week's homework was to create an application that will re-size a photo to aspect fit inside a rectangle of your specification; it solved one unknown (x).

A polynomial is any equation that has more than one variable, this could mean an x and a y. But now it's come to specifically represent the case when you have the same variable in more than one form (x² and x)

Last class we learned of Khwarizmi's proofs for degree-2 polynomials (ca. 820 AD), and how Khayyam discovered solutions to degree-3 (ca 1100 AD). Let's look at a degree-2 polynomial from a few different perspectives:

- a drawing of the physical problem
- the equation itself
- a graph of the equation

### The problem

You are building an installation, you need to fabricate a frame to be around your screen. Due to shipping, this frame can weigh **no more than 1kg**. Everyone split into groups and each group take a material: wood, aluminum, steel, plastic, glass. Everyone  will need to look up your substance's kg/cm³. Use a simple measurement of 1cm thickness for the final frame, this allows us to consider both kg/cm³ and kg/cm² as the same number. (right? because to convert from cm² to cm³, we multiply by the thickness, **which is 1**).

Your job is to calculate the maximum area around the screen your frame can be. Use centimeters for everything.

- *x* is the width of the frame (see below)
- the inner frame rectangle is 25cm x 18cm
- The maximum weight for shipping is 1kg

```
---------------------------
|            x            |
|     ---------------     |
|     |             |     |
|  x  |             |  x  |
|     |             |     |
|     ---------------     |
|            x            |
---------------------------
```

### Solution

the solution is to build an equation for the frame by subtracting the inner from the outer. The inner is 25∙18 and the outer is the same except each of those numbers is increased by 2x.

(2x + 25)(2x + 18) - 25∙18 which reduces to 4x² + 450x. What does that represent? What units are we talking about? It represents the **area** of the frame in cm².

The last step is to set this equation equal to the maximum possible area. To get the maximum possible area we take our material weight/cm³ or weight/cm² and divide it by the 1kg allowed weight. 1000g / 2.7kg/cm³ = 370.37cm³ or cm² in our case. Write the equation below and solve it two ways: (1) quadratic equation. (2) graph the two equations (the second being f(x)=370) and look for their intersections.

4x² + 450x = 370.37

## Polytopes

### Dimensions

Shapes by dimension: 0 (point), 1 (line), 2 (polygon), 3 (polyhedra), 4 (polychoron). All axes are orthogonal to each other, this is the best way to "visualize" the 4th dimension.

### 1D 

it's very simple, we are talking about lines. line segments.

### 2D

the simplest shape is a triangle. so much to be said about them, details next class.

the next simplest is the quadrilaterals which immediately introduces possibility for self-intersection (bowtie). This is one reason triangles are so special, we can make a lot of assumptions about them. Quads have families: parallelograms, trapezoids... Once we get to pentagons, things get complex fast and it's much easier if we focus on [regular polygons](https://en.wikipedia.org/wiki/Regular_polygon).

Why does a square tessellate space so well? [cross polytopes](https://en.wikipedia.org/wiki/Cross-polytope)

### 3D

Introduction to the Platonic solids, begin by sculpting a dodecahedron.

## Dodecahedron Sculpture [20 min]

In this exercise we will scuplt a dodecahedron. This is not as difficult as it may seem. While looking at a model of a dodecahedron, orient it and describe it this way:

- there are two faces aligned with the north and south poles
- the equator divides the northern and southern hemisphere, both hemispheres have a connected ring of 5 pentagons around it.
- The northern and southern hemispheres are offset by each other.

The steps for sculpting a dodecahedron:

1. roll a sphere. squash the northern and southern poles to create a flat circle, about *this wide* (show them)
2. while holding the poles, prepare to pinch the sphere with your opposite hand, thumb and middle finger. Both fingers should be exactly opposite of one another on the sphere, one is in the middle* of the northern hemisphere, one is in the middle of the southern. pinch your fingers.
3. Repeat this pinch by spinning the sphere through the poles exactly one fifth the way around. You are making the ring of five pentagons, both top and bottom simultaneously.
4. If we were impossibly flawless, we would be done. But the best thing about this exercise is you can rotate the polyhedra to another set of poles by picking **any two opposing faces**, due to all Platonic solid faces being symmetrical. Repeat step 3, a few cycles around, pick a new set of poles, repeat, iteratively, until the faces settle into place.

A nice finishing move, once the pentagons are fully defined, is to pinch the edges to make sharp definitions between faces.

- The precise longitude for "middle" is +/-26.6deg. this is 63.4deg from each pole, *very* close to dividing the sphere into thirds.

## Polyhedra [40 min] - Platonic solids

### 1. duality

there are really only 3 symmetry groups: tetra, hexa/octa, dodeca/icosa. But they are related and it's possible to embed between them.

### 2. construction. points in space

definitions: vertices, edges, faces. the net: unfolded map of the faces of a solid.

can you describe the points in space?

other properties of platonic solides

- dihedral angle
- all points lie along the surface of a sphere
- inradius, midradius, circumradius

### 3. Truncation

### Archimedean solids (via. truncation)

Face-perspective, each face is a regular polygon.

dual shapes - a square. dual of octahedron is cube - the thing that tessellates 3D space so well.

do other shapes tessellate 3d space? not regular

Catalan Solids (duals of the Archimedean solids)

Johnson solids

Anti-prisms, and prisms

### Stellation

Kepler-Poinsot

- stellate a pentagon (draw a star). stellate a heptagon.
- stellate a polyhedra

### compound polyhedra

Schläfli symbols

Symmetry, rotation groups.

### Wikipedia links

- [Uniform Polyhedron](https://en.wikipedia.org/wiki/Uniform_polyhedron) the category of 3D shapes we are focused on
- [Platonic Solids](https://en.wikipedia.org/wiki/Platonic_solid)
- [Archimedean Solids](https://en.wikipedia.org/wiki/Archimedean_solid) and their duals, [Catalan Solids](https://en.wikipedia.org/wiki/Catalan_solid)
- [Johnson Solids](https://en.wikipedia.org/wiki/Johnson_solid)
- [Prisms](https://en.wikipedia.org/wiki/Prism_(geometry)) and [Anti-prisms](https://en.wikipedia.org/wiki/Antiprism)
- [Stellation](https://en.wikipedia.org/wiki/Stellation) and the [Uniform star polyhedron](https://en.wikipedia.org/wiki/Uniform_star_polyhedron), specifically [Kepler-Poinsot]([https://en.wikipedia.org/wiki/Kepler%E2%80%93Poinsot_polyhedron](https://en.wikipedia.org/wiki/Kepler–Poinsot_polyhedron))
- [Regular Polygon](https://en.wikipedia.org/wiki/Regular_polygon) - the faces for most of the regular polyhedra above

categories and properties

- [Net](https://en.wikipedia.org/wiki/Net_(polyhedron)) the unfolded map of faces of a polyhedron
- [Dihedral angle](https://en.wikipedia.org/wiki/Table_of_polyhedron_dihedral_angles) - the angle between two faces of a polyhedron
- [Duality](https://en.wikipedia.org/wiki/Dual_polyhedron)
- [Cross-Polytope](https://en.wikipedia.org/wiki/Cross-polytope) the special polytopes that align with the axes of their dimension
- Spheres that touch: [Circumsphere](https://en.wikipedia.org/wiki/Circumscribed_sphere), [Midsphere](https://en.wikipedia.org/wiki/Midsphere), and [Inscribed sphere](https://en.wikipedia.org/wiki/Circumscribed_sphere)
- [Tessellations (Tilings)](https://en.wikipedia.org/wiki/Tessellation) and [Honeycombs](https://en.wikipedia.org/wiki/Honeycomb_(geometry))

### Homework: Construct a polyhedra:

There is something magical about holding a polyhedron, like you are holding something from another dimension, like you materialized Plato's realm of forms. I've noticed this feeling depends on a couple factors:

- the durability of the object
- the precision of the geometry

Look at some work by these artists:

- [Andrea Hawksley](http://blog.andreahawksley.com/category/math-art/)
- [George Hart's Sculptures](https://www.georgehart.com/sculpture/sculpture.html)
- [George Hart’s references](http://www.georgehart.com/virtual-polyhedra/references.html)
- Art by George Hart, Vi Hart, Andrea Hawksley
- [Solids, Tom Lechner](https://www.tomlechner.com/sculptures/solids.html)

Software to help vizualize:

- [Nat Allison - Polyhedra](https://polyhedra.tessera.li/)

Nets online:

- https://www.polyhedra.net/en/ (example [Four-Cube compound](https://www.polyhedra.net/en/model.php?name-en=compound-of-four-cubes))

Origami:

- [Tom Hull's Five Intersecting Tetrahedra (FIT)](http://origametry.net/fit.html)

- [Tomoko Fuse's Unit Origami](https://www.amazon.com/Unit-Origami-Multidimensional-Transformations-1990-04-15/dp/B01FIYMWDK)

Materials: With origami you'll be a little more limited with your materials. 

### Extra Credit

Calculate dihedral angle between faces of a polyhedron, like a dodecahedron. This would help account for material-thickness in construction of solids.