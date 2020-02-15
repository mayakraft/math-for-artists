# 03: Geometry

> files relating to this lecture:
>
> - Slides ([google slides](https://docs.google.com/presentation/d/1lrzIOAB_E7L0MyConUyJg1oFDXRQleZCd2mhDaO20VU/edit?usp=sharing))
> - [quadratic.py](quadratic.py)

## Review: Homework

### Polynomial exercise

*Q: What are polynomials, do they exist in the real world?*

Last week's homework was to create an application that will re-size a photo to aspect fit inside a rectangle of your specification; it solved one unknown, x.

A polynomial is any equation that has *more than one* variable, this could mean an x and a y. But it's come to typically represent the same variable in more than one form (x² and x).

Last class we learned of Khwarizmi's proofs for degree-2 polynomials (ca. 820 AD) and how it took about 300 years before Omar Khayyam discovered solutions to degree-3 (ca 1100 AD). Let's dive into a degree-2 polynomial as a real-world problem, and solve it 2 ways:

- algebraic equation
- graphing

### The problem

You are building a screen-based installation, you need to fabricate a frame to be around your screen. Due to shipping, this frame can weigh **no more than 1kg**. The screen is an iPad: **24cm by 17cm**. You want to find the maximum size that this frame can be. Your job is to calculate **x**, the width of the frame around the screen.

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

Everyone split into groups, and each group take a material:

- wood
- aluminum
- steel
- plastic
- glass

You need to look up your substance's kg/cm³. Let's all use a simple measurement of 1cm thickness for the final frame, this allows us to consider both kg/cm³ and kg/cm² as the same number. (right? because to convert from cm² to cm³, we multiply by the thickness, **which is 1**).

Use centimeters for everything.

### Solution

the solution is to build an equation for the frame by subtracting the inner from the outer. The inner is 24∙17 and the outer is the same except each of those numbers is increased by 2x.

(2x + 24)(2x + 17) - 24∙17 which reduces to 4x² + 82x. What does that represent? What units are we talking about? It represents the **area** of the frame in cm².

The last step is to set this equation equal to the maximum possible area. To get the maximum possible area we take our material weight/cm³ or weight/cm² and divide it by the 1kg allowed weight. 1000g / 2.7kg/cm³ = 370.37cm³ or cm² in our case. Write the equation below and solve it two ways: (1) quadratic equation. (2) graph the two equations (the second being f(x)=370) and look for their intersections.

f(x) = 4x² + 82x

g(x) = 370.37

# Polytopes

### Dimensions

Shapes by dimension: 0 (point), 1 (line), 2 (polygon), 3 (polyhedra), 4 (polychoron). All axes are orthogonal to each other, this is the best way to "visualize" the 4th dimension.

### 1D 

it's very simple, we are talking about lines. line segments.

### 2D

the simplest shape is a triangle. so much to be said about them, details in next class.

the next simplest is the quadrilaterals which immediately introduces possibility for self-intersection (bowtie). This is one reason triangles are so special, we can make a lot of assumptions about them. Quads have families: parallelograms, trapezoids... Once we get to pentagons, things get complex fast and it's much easier if we focus on [regular polygons](https://en.wikipedia.org/wiki/Regular_polygon). One quick observation we can make is that there are concave and convex polygons (we like to focus on convex).

Why does a square tessellate space so well? (Answer to come later, when we talk about the octahedron- [cross polytopes](https://en.wikipedia.org/wiki/Cross-polytope))

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

Not enough can be said about the Platonic solids. Three-dimensions is the universe we inhabit, it's our personal space, and these five shapes are the face-based mathematical primitives, the simplest and most perfect forms that exist in 3D. 

- tetrahedron
- octahedron
- hexahedron
- icosahedron
- dodecahedron

These are the only 3D shapes that are composed of the same face. They contain symmetry from many perspectives.

- all faces are the same polygon
- all points lie on the surface of a sphere
- all angles between the faces are the same (dihedral angle)
- if you rotate it from any angle to the next face, the figure appears similar

Tell the story of Plato's Timaeus, and how early people's suspected these represented the four elements, fire earth air water, with the 5th as the universe itself. When you heat up water: Fire + Water = Air, and the three triangle-based polyhedron (tetra, icosa, octa) can re-assemble into their other forms. Cube is earth as it packs tightly, and the dodecahedron is the universe itself.

Kepler's Mysterium Cosmographicum introduces the idea of circumsphere and inner-sphere (and mid-sphere). And even though Kepler was dead wrong about this theory, it further emphasizes that humans have idolized these figures for millenia. For good reason, they are beautiful.

### Duality

there are really only 3 symmetry groups: tetra, hexa/octa, dodeca/icosa. But they are related and it's possible to embed between them.

dual shapes - a square. dual of octahedron is cube - the thing that tessellates 3D space so well.

do other shapes tessellate 3d space? not regular

### Construction

imagine you are going to represent a polyhedron in some kind of medium: code, folded paper, wooden polygons.

definitions: vertices, edges, faces

the net: unfolded map of the faces of a solid

can you describe the points in space? Can you imagine calculating the points of the tetrahedron? from the perspective of the "Egyptian pyramid" it looks difficult, but if you turn it angled, the [points align with a cube](https://www.google.com/search?q=tetrahedron+in+a+cube&tbm=isch). (reference: the golden ratio and the icosahedron/dodecahedron vertices)

other properties of platonic solides

- dihedral angle
- all points lie along the surface of a sphere
- inradius, midradius, circumradius

### Truncation, and the Archimedean solids

Look at the truncation from an icoahedron to a dodecahedron. It passes through the soccer-ball. *Why don't we use the other polyhedra here for sports balls?* 

The platonic solids require **the same** polygon for every face. If you allow combinations of different regular polygons, we expand the set of polyhedra available to us. First up is the  **13 Archimedean solids**

Q: Looking at an Archimedean solid, if we drew a circumsphere, which points lie along it? *A: all of them!* This is a requirement for the Archimedean solids. (if this wasn't required = Johnson solids)

Again with the face-perspective, each face is a regular polygon.

Catalan Solids (duals of the Archimedean solids)

### Johnson solids

Any combination of regular polygons. Like a LEGO set of polygons. Any way you can snap them together is a Johnson Solid.

Anti-prisms, and prisms

### Stellation

This is where it gets weird, stellation involves self-intersection, which can be hard to visualize.

a simple entry point: the [Kepler-Poinsot]([https://en.wikipedia.org/wiki/Kepler%E2%80%93Poinsot_polyhedron](https://en.wikipedia.org/wiki/Kepler–Poinsot_polyhedron))

- stellate a pentagon (draw a star). can you stellate a septagon?

When you draw a star, the inner pentagon's lines have been extended until they intersect another line. These lines run parallel to the pentagon's side. This is the simplest form of stellation.

### Compound polyhedra

At this point, things can get really complex.

## Wikipedia Rabbit-holes

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
- [Excavation](https://en.wikipedia.org/wiki/Excavated_dodecahedron)
- [Cantellation](https://en.wikipedia.org/wiki/Cantellation_(geometry)) and [Expansion](https://en.wikipedia.org/wiki/Expansion_(geometry))

## Homework: Fabricate a polyhedron

There is something magical about holding a polyhedron, like you are holding something from another dimension, like Plato's realm of forms materialized. I've noticed this feeling is reinforced by a couple factors:

- the durability of the object
- the precision of the geometry

Digitally explore polyhedra with [Nat Allison's Polyhedra Viewer](https://polyhedra.tessera.li/)

For inspiration and instructions:

- [Andrea Hawksley](http://blog.andreahawksley.com/category/math-art/)
- [George Hart's Sculptures](https://www.georgehart.com/sculpture/sculpture.html)
  - [Wooden polyhedra constructions](https://www.georgehart.com/virtual-polyhedra/wooden-models.html)
  - [Paper constructions](https://www.georgehart.com/virtual-polyhedra/paper-models.html)
  - [Slide-togethers](https://www.georgehart.com/virtual-polyhedra/slide-togethers.html)
  - [Tensegrity](https://www.georgehart.com/virtual-polyhedra/straw-tensegrity.html)
- [Tom Hull's Five Intersecting Tetrahedra (FIT)](http://origametry.net/fit.html)

Some nets are online, though you might want to re-create them in a vector CAD program, for example to send to a laser-cutter.

- [Gijs Korthals Altes's repository of polyhedra nets](https://www.polyhedra.net/en/)

### Resources

- [Solids, Tom Lechner](https://www.tomlechner.com/sculptures/solids.html)
- [Tomoko Fuse's Unit Origami](https://www.amazon.com/Unit-Origami-Multidimensional-Transformations-1990-04-15/dp/B01FIYMWDK)