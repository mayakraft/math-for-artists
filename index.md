# Math for Artists

Spring 2020

ITP, 370 Jay St, room 409

Thursdays, 6:30 - 9 PM

Instructor: Robby Kraft, rk132@nyu.edu

Office Hours: Monday 11am - 1pm

## Course Details

In this class students will learn math tools to boost their digital practice, fix common problems, and understand the math behind our human perception of the physical world. This course spans different branches of math including geometry, linear algebra, logarithmic thinking, and statistics as they relate to a programmer making digital art with our contemporary media ecosystem. The aim of this course isn't to solve equations, rather strengthen our intuition accompanied with historical and ethnomathematics perspectives and foster a healthy relationship to a few branches of math. The prerequisites to this class are basic arithmetic skills and an introduction to programming. We will create applications using free and open-source software, including p5.js, and Pure Data.

## Work

Students will be expected to demonstrate understanding of the material by creating projects and assignments each week, varying from computer programs to physical artworks. Students are expected to deepen their relationship to math. This class concludes with a final projec to create a work of math art. The class covers many of the dimensions of math, students should pay attention to the areas that excite them most for contenders for final projects.

## Conduct

Students are expected to be considerate to their fellow students.

This class meets for one two-hour and thirty minute session each week. Students are epected to be present and active participants in each class. If attendance is a serious problem, or students aren't able to focus, students should consider the benefits of taking this class at another time when they do have time to commit. It is advised that students do not miss more than 2 classes.

Unexcused absences or missed deadlines constitute a failure of the assignment.

## Assessment

Final grade is determined:

- Class Participation: 40%
- Weekly Assignments: 30%
- Final Project: 30%

## Materials

All students are expected to bring a laptop to every class. We will be using free software:

- pure data
- P5.js or Processing
- A code editor of your choice (Sublime Text, Atom, VS Code)

Additionally, many ideas are visual, or conceptual but benefit from visualization, it will be **very helpful** if students come to class with paper and some type of writing utensil.

Materials provided by the university

- molding clay (day 3)
- compasses (day 3)

# Class Overview

[Week 1, January 30: **Numbers**](01/): history of math, counting systems, prime factors

[Week 2, February 06: **Functions**](02/): transforming numbers, map, scale

[Week 3, February 13: **Geometry**](03/): polyhedra and compass straight-edge

Week 4, February 20: **Trigonometry**: including intersection algorithms

Week 5, February 27: **Linear Algebra**: matrices to represent coordinate space

Week 6, March 05: **Linear Algebra**: methods on vectors

Week 7, March 12: **Linear Algebra**: applications for 3D space and machine learning

*Spring Break, March 19: no class*

Week 8, March 26: **Logarithms**: build an intuition for logarithmic thinking

Week 9, April 02: **Audiovisual**: create and modify audio signals, understand color space

Week 10, April 09: **Fourier Systems**: FFT and linkages

Week 11, April 16: **Randomness, Noise, Distortion**: types of noises, understand file compression

Week 12, April 23: **Number Shaping**: practical applications, advanced reparameterization methods

Week 13, April 30: **Boolean Algebra**: algebraic operations with applications for if-statements

Week 14, May 07: **Final Presentations**

# Class Meetings

## Week 1, January 30: Numbers

### History

history of counting, measurement, alternate counting systems, Hellenistic geometry, the history of proofs, Euclid, numerals and the Gupta empire, early ties to astronomy, algorithms and the Islamic golden age.

### Classwork

measure pi to as many decimal places as possible. use anything on the ITP floor.

### Lecture

Establish a vocabulary around natural, whole, rational, irrational numbers, and fractions. Introduce these as set notation.

Explore alternate number bases/radix. How do number bases behave differently? Do these alter your perception of a number? Explore the patterns in divisors, especially in the context of alternate number bases. The importance of prime numbers.

Demonstrate divisors and alternate number bases as musical rhythms.

### Code

- prime factorization

### Homework

Visulize or sonify an alternate number base or patterns among divisors.

### References

- [Michael Fogleman Prime Factors Poster](https://store.michaelfogleman.com/products/prime-factors)
- Prime number visualizations
- [Paul Bourke binary fractal](http://paulbourke.net/fractals/squaretile/)

## Week 2, February 6: Functions

### Lecture

A review of algebra, Al-Khwarizmi. The two sides of an equal sign and techniques for moving things from one side to the other (mixing multiplication, addition, exponents). Unit conversion as a sequence of fractions.

The modulus operator. associative and communicative.

### Classwork

Using a calculator shrink a rectangle and preserve aspect ratio. Demonstrate skill with ratios.

### Software

Arithmetic and functions in Pure Data

### Lecture

Transforming numbers, variable types, inputs and outputs, the number line, the dataflow language function model (pd, max-msp), function as black-box. functions-as-code model.

What is a graph?-and why it's easy to confuse with Euclidean space.

### Classwork

Code the map function

A big takeaway from today is that we can scale the numberline, but a scaling operation's origin is fixed at zero. Addition and subtraction are needed to shift the origin.

### Homework

Create a random number generator in pure data. Transform a seed input to a sufficiently random output.

### Reference

[Kazu Harada](https://www.pinterest.com/CMTpins/kazu-harada/), especially their functions boxes.

## Week 3, February 13: Geometry

### Classwork

Sculpt a dodecahedron out of clay

### Lecture

Introduction to polyhedra. (regular polytopes in n-dimensions). Platonic, Archimedean, Johnson, and Catalan solids. truncation. anti-prisms. duality. stellation. cross-polytopes. The three solids symmetry groups: tetra, hexa/octa, dodeca/icosa, and ways of embedding between them. 

A closer look at some of the math including naming conventions around faces vs. vertices. VEF relationship. dihedral angle. formula for the vertices of the platonic solids and the golden ratio inside the icosa/dodeca. Schläfli symbols. Symmetry, rotation groups.

### Classwork

Using compass-straightedge construct:

- hexagon
- pentagon
- bisect/trisect an angle

### Lecture

Euclid's elements and compass-straightedge constructions. construction techniques

### Homework

Fabricate a polyhedron

Compass straight-edge a geometric tessellation

### Reference

- [Adam Williamson](https://www.adamwilliamson.com/biomorphs/)
- [George Hart’s references](http://www.georgehart.com/virtual-polyhedra/references.html)
- Art by George Hart, Vi Hart, Andrea Hawksley
- [Solids, Tom Lechner](https://www.tomlechner.com/sculptures/solids.html)
- Tom Hull's Intersecting tetrahedra (FIT)

### Extra Credit

Calculate dihedral angle between faces of a polyhedron, like a dodecahedron. This would help account for material-thickness in construction of solids.

## Week 4, February 20: Trigonometry

### Classwork

Find a circle that goes through three points

### Lecture

Euclidean space. Establishing a coordinate frame, including polar coordinates, barycentric coordinate system, cylindrical coordinates. Introduction to geometric algorithms, and a lot of information about triangles.

Mapping to a sine curve.

### Classwork

Code a circle using sine, cosine

### Lecture

compass straightedge solutions. Euclid. tilings, creating tessellations. distance formula (Pythagoras)

### Classwork: intersection algorithms

- circle-circle (the distance formula)
- line-line (segment-segment) (this will be hard)

### Lecture: Trigonometry

Every little thing about triangles. atan2(), distance formula. Convex-polygon overlap collision detection. All the different centers of a triangle. Sine, cosine (for the FFT)

### References

- [Journey to the Center of a Triangle, Bruce & Katharine Cornwell](https://www.youtube.com/watch?v=v_oZ9Pe0yRg)
- [Paul Bourke, Geometry](http://paulbourke.net/geometry/)

### If there is time

code a math rose. (polar coords)

## Week 5, February 27: Linear Algebra

Vectors and scalars. Line representations: (point, vector) (point, point) (vector, scalar-distance-to-center)

### Lecture: intersection algorithms pt. 2
- circle-circle (now with collision detection. a vector to express repel-direction)
- line-line (segment-segment)
- point-in-polygon, convex polygons
- poly-poly, line-poly

### Lecture: computer graphics pt. 1

coordinate system as matrices. affine transforms.

### Classwork

scale a polygon in SVG only using a matrix

### References
- Measurement by Paul Lockhart, section 2 Time and Space.
- 3blue1brown essence of linear algebra, first 3 videos. (30 minutes)
- [Paul Bourke, Geometry](http://paulbourke.net/geometry/)

## Week 6, March 5: Linear Algebra

### Lecture: computer graphics

matrices, screen-to-world transforms and visa-versa. manipulate space with matrices. the matrix stack, how does AR work?

- orientation, Euler angles, quaternions. distance formula and trigonometry in 3D. 3D rotation math.

### Lecture

Dot and Cross products

### References

- 3blue1brown essence of linear algebra

## Week 7, March 12: Linear Algebra

### Exercise

create a 3D environment (WebGL) that tracks with the orientation sensors of your mobile device

### Lecture

Linear algebra in shaders, machine learning.

### References

- 3blue1brown essence of linear algebra

## Spring Break, March 19

no class

## Week 8, March 26: Logarithms

### Lecture

Review on exponents.

"What number is halfway between 1 and 9?", how logarithmic thinking is innate and unlearned. This informs the nature of human senses, audio and visual, the mathematical relationship between musical pitches, and noise and compression.

### Classwork

Explore logarithms by folding the Fibonacci sequence and deriving the golden ratio. We convert between linear and log scales, plot the Fibonacci sequence. n^x and log() can be used to convert between linear and logarithmic.

- arithmetic vs. geometric
- arithmetic mean vs. geometric mean

Fibonacci (and other exponential) sequences, log graphs, infinite series approximations, the golden, silver ratios, logarithm in senses: audial, visual, haptic

### Homework

Construct a linear representation of a logarithmic situation (example: a map of the solar system with correct positions of the planets)

### References

- Stanislas Dehaene
- Randall Munroe’s logarithmic maps

## Week 9, April 2: Audiovisual

### Lecture

human audio hearing range. frequency vs. timbre, consonance and dissonance, synthesis, filters. frequency spectrogram.

information limits. Nyquist frequency. audio bit-rate. what does low bit-rate sound like? compression in both visual and audio, quantization

### Classwork

Coding music by frequency in Pure Data

### Lecture

- color space. 3-space. (cylindrical coordinate system). additive and subtractive colors.

## Week 10, April 9: Fourier Systems

### Lecture

Fourier series, Fourier synthesis, FFT. Oscilloscopes. Linkages. Kempe’s Universality theorem

sine waves: amplitude, frequency, phase. operations on waves, addition, multiplication. the conversion of complex information into lightweight by fourier representation.

### Classwork

Linkages, Fourier drawing.

### References

[Toby Schachman Shadershop](http://tobyschachman.com/Shadershop/)

[@ChocoLinkage](https://twitter.com/ChocoLinkage)

## Week 11, April 16: Randomness, Noise, Distortion

### History

1970’s, algorists employing randomness especially in visual art. Aleatoric music. Fluxus

computer’s pseudo random generator, testing random number generators

### Lecture

White noise, brown noise, pink noise, Brownian motion, drunk walk, seeding a random number generator

### Classwork

simplex noise

### Lecture

Kolmogorov complexity, lossless representations. 

pixels. image bit-resolution. image compression (JPEG). discrete cosine transform.

### References

- The Book of Shaders- [Random](https://thebookofshaders.com/10/) + [Noise](https://thebookofshaders.com/11/)
- John D. Cook, "Testing a Random Number Generator”

----------

### Week 11 - Begin planning final projects

----------

## Week 12, April 23: Number shaping

### Lecture

the importance of the UNIT interval. between 0...1

SHAPING: example: random int between (13, 128) but, anything past 50 is unrecognizably similar, we need to front-load these numbers. more up front less in the back (this is the limits of map function ability)

### Lecture

reparameterize a domain, for example, convert to arc-length parameterization

### Software

What's inside of math libraries? NumPy, Boost.

### Lecture

discrete vs. continuous animation. animation curves. relating the output of Grapher with animations.

## Week 13, April 30: Boolean Algebra

### History

Math in 19th century: Boole's work and the algebra of propositional logic. Subsequent work by Charles Sanders Peirce and Gottlob Frege on quantifiers.

### Lecture

order. emergence, weak and strong. state machines.

Boolean Algebra:

- boolean operations, duality, reduction. `( a` `**&& b**` `) == !( a` `**|| b**` `)`
- logic gates
- finite automata

### Lecture

this discussion is entirely about epsilons, floating point comparison, range of error, weird ways that math becomes corrupted when simulated on a computer.

- floating points need to be cropped
- arbitrary decisions we've had to make (row vs column order matrices)
- dividing integers

### References

George Boole, *"An Investigation into the Laws of Thought on Which are Founded the Mathematical Theories of Logic and Probabilities"*

Ernst Schröder

## 14. Final Presentations

---

## Bonus Material: Folding

### Lecture

Origami axioms and relationships to Hellenistic compass ruler geometry.

### Lecture

Crumpling paper. crease patterns. graphs and planar graphs. Kawasaki’s and Maekawa’s theorems. circle packing, uniaxial tree design. origami tessellations, tiling.

### Classwork

create a tiling origami twist. fold it.

origami package design. origami collapsible living structures.

### Homework

origami tessellation

### Source
- [Ron Resch Paper and Stick Film](https://vimeo.com/36122966)
- [Geometric Folding Algorithms, MIT OCW](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-849-geometric-folding-algorithms-linkages-origami-polyhedra-fall-2012/)
- [Geometric Folding Algorithms the book](https://www.google.com/books/edition/Geometric_Folding_Algorithms/ycYLAQAAQBAJ)
- [Twists Tilings and Tessellations, Robert Lang](https://www.amazon.com/Twists-Tilings-Tessellations-Mathematical-Geometric/dp/1138563064)

### Strange Surfaces

- knots, orientable surfaces, möbius strip, donuts. Higher dimensional regular polytopes.
- 4D projections into 3D, shadows, slicing. Flatland. translation between dimensions. Henry Segerman
- higher dimensions and machine learning.

### Sources

- Flatland
- [Henry Segerman](https://math.okstate.edu/people/segerman/)
- [Mike Tanis](https://www.instagram.com/miketanis_/)
- [Alison Martin](https://www.flickr.com/photos/109333486@N07/albums)
- [Andrea Hawksley](http://octahedralgroup.org/blog/topologically-interesting-felt/)

## Bonus Material: Algorithms

### History

Math in early 20th century: Hilbert, Russell, Gödel, and Turing. the paradigm shift of the 20th century- algorithms can easily be looped millions of times. memory storage is theoretically infinite, Turing tape.

### Lecture

Formal grammars, regular expressions, Aristid Lindenmayer and plant growth patterns, finite Automata, string-rewrite systems, L-systems.

### Reading

- [Examples of L-Systems, Wikipedia](https://en.wikipedia.org/wiki/L-system#Examples_of_L-systems)

### Classwork

it’s possible to make the same fractal (dragon, Sierpinski) using a variety of methods

- l-systems
- elementary cellular automata
- recursive draw call
- origami

### Classwork

create a Voronoi diagram using origami

### Classwork

elementary cellular automata

### Lecture

Algorithms at scale. Encryption. Units of algorithm time: big-o. NP Hardness. non-invertible functions. one way functions.

- classes of algorithms like divide and conquer

---

### STATEMENT ON LAND USE

This classroom, New York University, and Manhattan island of New York City are situated on the continuously inhabited land of the Lenape Native Americans. I am giving a portion of my salary to the Delaware tribes of Canada and the United States.

---

## Tisch School of the Arts

---

### STATEMENT OF ACADEMIC INTEGRITY

Plagiarism is presenting someone else’s work as though it were your own. More specifically, plagiarism is to present as your own: A sequence of words quoted without quotation marks from another writer or a paraphrased passage from another writer’s work or facts, ideas or images composed by someone else.

### STATEMENT OF PRINCIPLE

The core of the educational experience at the Tisch School of the Arts is the creation of original academic and artistic work by students for the critical review of faculty members.  It is therefore of the utmost importance that students at all times provide their instructors with an accurate sense of their current abilities and knowledge in order to receive appropriate constructive criticism and advice.  Any attempt to evade that essential, transparent transaction between instructor and student through plagiarism or cheating is educationally self-defeating and a grave violation of Tisch School of the Arts community standards.  For all the details on plagiarism, please refer to page 10 of the Tisch School of the Arts, Policies and Procedures Handbook, which can be found online at: http://students.tisch.nyu.edu/page/home.html

### STATEMENT ON ACCESSIBILITY

Please feel free to make suggestions to your instructor about ways in which this class could become more accessible to you.  Academic accommodations are available for students with documented disabilities. Please contact the Moses Center for Students with Disabilities at 212 998-4980 for further information.

### STATEMENT ON COUNSELING AND WELLNESS

Your health and safety are a priority at NYU. If you experience any health or mental health issues during this course, we encourage you to utilize the support services of the 24/7 NYU Wellness Exchange 212-443-9999. Also, all students who may require an academic accommodation due to a qualified disability, physical or mental, please register with the Moses Center 212-998-4980. Please let your instructor know if you need help connecting to these resources.

### STATEMENT ON USE OF ELECTRONIC DEVICES

Laptops will be an essential part of the course and may be used in class during workshops and for taking notes in lecture. Laptops must be closed during class discussions and student presentations.  Phone use in class is strictly prohibited unless directly related to a presentation of your own work or if you are asked to do so as part of the curriculum.

### STATEMENT ON TITLE IX

Tisch School of the Arts to dedicated to providing its students with a learning environment that is rigorous, respectful, supportive and nurturing so that they can engage in the free exchange of ideas and commit themselves fully to the study of their discipline. To that end Tisch is committed to enforcing University policies prohibiting all forms of sexual misconduct as well as discrimination on the basis of sex and gender.  Detailed information regarding these policies and the resources that are available to students through the Title IX office can be found by using the following link: Title IX at NYU.