# Week 5, February 27: Linear Algebra

## Trigonometry cont.

### common trig problems encoutered by media artists

### atan2( )

a visual explanation of tangent. *Tangent* is short for *the **length** of the tangent*. [The Unit circle](https://upload.wikimedia.org/wikipedia/commons/4/45/Unitcircledefs.svg)

why atan2 solves the problem of sign.

### calculate the average of two angles

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

can you create a vector sine curve? In something like Illustrator?

### Why do we need linear algebra?

let's talk about distance searching, like the question "what point is nearest?"

```
*                      *           *      *                         *
         *     *                  * *            *              *
    *                          *       *    *    *                    * 
     *            *   *                       *        *
```

Given a field of points:

Q: what is the highest point (closest to the top)?

**A: simply compare the y axis values.**

Q: given a point, what are all the points to the right and left? Or in-front-of and behind?

**A: if the person is facing 90degrees, the answer is easy, comparing the x axis and y axis values.**

What happens when the axis becomes *anything other* than the 90 degrees of the X and Y axis? both of these shortcuts fail.

# Linear Algebra

this lecture is heavily based on Grant Saunderson's [Essence of Linear Algebra](https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab). huge debt of gratitutde!

## Vectors

a vector is two things at once, a list of numbers and an arrow with a length and a direction.

when we draw vectors, we draw them in our familiar coordinate space, the components are the movement along each axis. in 2D space, there are 2 numbers, the first is movement along the X, the second Y.

### vector addition

**the numberline metaphor**: adding two vectors is placing one at the end of another, and drawing a new line to the last tip. its the same as when we were introduced to addition as children, by moving steps (two numbers of steps) on the number line. step through two vectors by moving x1, y1, then x2, y2. then do all the Xs at once and then all the Ys. it's the same as adding each component first, in the list form.

### scalar multiplication

multiplying a vector by a number is "scaling" the vector. 2v stretches the vector by 2. 1/3 shrinks it. and -3 reverses the direction and scales it by 3.

> you can describe a digital painting by a set of vectors. connect the dots.

### why do we need to normalize?

a normalized vector removes the concept of distance, but retains the "angle" idea. if we add two vectors that are normalized, we solve the bisect two angles problem! but they need to be normalized.

### epsilon

when does the example above fail-adding two vectors to get the bisection? *when they are 180° apart.*

the answer becomes close to zero (but not zero, exactly), we need to make use of **epsilon comparison**.

**epsilon** is a tiny number, basically zero, but large enough that we can call anything above it to be "not zero". checking if something is almost zero in code needs to consider the negative number case. It can be done a couple ways

```javascript
if (value < EPSILON && value > -EPSILON)
```

```javascript
if (Math.abs(value) < EPSILON)
```

## basis vectors and span

let me introduce two special vectors: **î** and **ĵ** (*eye hat* and *jay hat*), they are each unit vectors, length of 1, and they each run along the two axes in the positive direction. **î** is [1,0] and **ĵ** is [0,1].

for a moment, think of vectors in a new way. take the vector [2,3] for example. imagine each component is a scalar, the first scales  **î** and the second scales **ĵ**. so a [2,3] vector is 2 times the X unit vector, and 3 times the Y unit vector. the advantage of doing this is that we can start to think about *changing the unit vectors*.

let's do that, imagine 2 random vectors, these will be our new unit vectors. don't worry about number coordinates, just consider the question: using vector addition, adding scaled versions of these two unit vectors, can we hit every point in the plane?

this is what "span" is. the span of these two vectors is all of 2D space.

when does this not work? when vectors lie on top of one another, right? this is a broken system (these vectors are linearly dependent). the span of these two vectors is just a line.

our happy place is going to be when vectors are linearly independent.

## matrices as transformations

transform is a special term for function. in math, functions take in something, like a number and spits out another number, in linear algebra, a function (transformations) takes in a vector and spit out another vector.

transforms are things you're familiar with, rotation, scale, shear (we're going to see why translation is a special case)

return to our conversation from day 2 on transformations. there was a special kind where the *origin never changed* this is one property of affine transforms.

a transformation is a linear transformation as long as the grid lines stay parallel and straight, and the origin stays in the same place.

**parallel and evenly-spaced**

when you stretch and rotate space, you move the vector to its new location, but you also move the unit X and Y vectors. and this is what makes linear transformations so cool, you can describe the entire transformation, for all vectors, by just writing where the unit X and Y vectors end up. this is because all of our vectors can be described as linear combinations of those unit vectors.

if we define a transform as simply "where the basis vectors end up" then to transform a vector is simply to multiply the x component by the X-basis vector and the y component by the Y.

$$
\mathbf{v} = x\begin{bmatrix}î_x\\î_y\end{bmatrix}, y\begin{bmatrix}ĵ_x\\ĵ_y\end{bmatrix}
$$

the convention is to store the two transformed **î** and **ĵ** in a matrix each as a column.

$$
\begin{bmatrix}î_x & ĵ_x\\î_y & ĵ_y\end{bmatrix}
$$

Matrix vector multiplication laid out looks like:

$$
\begin{bmatrix}a & c\\b & d\end{bmatrix}
\begin{bmatrix}x\\y\end{bmatrix} = x\begin{bmatrix}a\\b\end{bmatrix} + y\begin{bmatrix}c\\d\end{bmatrix} = \begin{bmatrix}ax + cy\\bx + dy\end{bmatrix}
$$

(oh no. we have to talk about matrix column/row order)

**we can now multiply vectors by matrices!** (what about multiplying matrices by matrices)

run through some examples multiplying a vector by a matrix

- rotation (90 degree)
- scale
- shear

### Translation

until this point, translation has been entirely left out of the conversation.

Line representations: (point, vector) (point, point) (vector, scalar-distance-to-center)

### Classwork

scale a polygon in SVG only using a matrix

### Create a rotation matrix

apply our knowledge from trig to create a matrix that rotates at ANY degree.

### Combining transformations

the key to multiplying matrices is that *inside* each matrix are simply vectors. the basis vectors. we can multiply *those* by matrices, to get the columns of the resulting matrix.

matrix multiplication goes from **right to left**.

are transforms **transitive**? can you rotate then scale? same as scale then rotate?

**associative**? yes!

### Homework

Make a "fire-escape" type of a map with instructions as a sequence of matrices.

Make a sign that gives instructions for how to get from one place to another place in ITP. Present the matrices in two ways: a sequence of transform matrices, and one composition matrix that represents it all. The units are in human-steps.

### References
- Measurement by Paul Lockhart, section 2 Time and Space.
- [Essence of linear algebra](https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab) by Grant Saunderson
- [Paul Bourke, Geometry](http://paulbourke.net/geometry/)
