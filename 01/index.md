# 01: Numbers

## Class Introduction

[30 minutes] Course administration: Syllabus, office hours. Student introductions, what do you hope to learn? what is your relationship with math?

## History (30 minutes)

Often in western education it's taught that Ancient Greek people were skilled at math but that math had to be "rediscovered" during the renaissance following a relatively uninspired Medieval ages. At a minimum this leaves out both the revolutions in Gupta India where numerals were invented and the Islamic golden age giving us things like algebra.

Even before Hellenistic Greece, things like the Pythaogrean theorem was know across the world, discovered independently. The construction of the Pyramids in 2,500 BC required significant engineering and math. But let's fast foward to Ancient Greece, and discuss three periods:

1. Greece (600BC-200BC)
2. India, the Gupta period (~400AD)
3. modern-day Iraq/Iran (800AD-1200AD)

In Hellenistic Greece we had whole numbers and fractions. To the Pythogreans, numbers were holy, irrational numbers were impossible. Hippasus, a Pythagorean, was killed for proving that √2 was an irrational number, a number that cannot be reduced to a fraction.

One glance at Euclid's elements captures the spirit of math at the time. It was very geometric, and they had a reason. Because √2 was unexplainable to them, but a hypoteneuse *surely* existed, Greeks believed that *lengths* were more true than *numbers*.

ca. 400 AD: Our current form of numerals are invented in India, at this point it was hard to divorce a number from the *object* it represented (we still have this today, some languages have different ways to say a number depending on the *kind* of thing it counts). By this time, little thought had been given to the concept of zero, so the numeral for it didn't exist. 40 was simply written as "4", and it was up to the context clues to know it represented "40". Soon enough a dot was invented to mark the absense of a one's-column, "4 · ", which eventually turned into the symbol we know "40". But even still, *zero as a place holder* and the *quantity* of zero are very different! Humans had significant philosophical hesitations to accepting the notion of zero as a quantity.

ca 1000 AD: the Islamic golden age saw the invention of algebra, optics, advances in astronomy and other sciences. Oddly enough when algebra was invented, formulas were still written out in words and sentences. The inventor of Algebra, Muhammad Khwarizmi, advocated the use of the new Indian numerals, but algebraic symbols like ×, ÷, √ had not been invented, hence the need for words.

ca 1200 AD: Fibonacci from Italy wrote his book Liber Abaci (the Book of Calculation), which popularized the use of the new Hindu-Arabic numeral system, connecting the advancements in India and the Islamic worlds to Europe.

## Counting

Very quickly, let's talk about why do we count the way we count.

```
 0 
 1 🍎
 2 🍎🍎
 3 🍎🍎🍎
 4 🍎🍎🍎🍎
 5 🍎🍎🍎🍎🍎
 6 🍎🍎🍎🍎🍎🍎
 7 🍎🍎🍎🍎🍎🍎🍎
 8 🍎🍎🍎🍎🍎🍎🍎🍎
 9 🍎🍎🍎🍎🍎🍎🍎🍎🍎
10 🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎
11 🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎
12 🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎
13 🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎
14 🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎
```

Look at lines 9 and 10. This line marks the moment that single digits turn into double. What's the difference between these two sets of apples? There is no difference in the apples! This decision to switch to double digits here is entirely arbitrary (it's because of our 10 fingers). We could have grown up in a universe where this division happened at 8 or 12.

If we used base-12 (anything higher than 10), we would need to invent new glyphs, single characters to represent ten, another for eleven.

*Would an alternative number base change the way we see a certain number?*

How many numbers divide into 10? **2, 5**

How many numbers divide into 12? **2, 3, 4, 6**

*Would an alternative number base change our relationship to math?*

## Number Bases

There is a kind of a balance I'd like you to observe. Here is the number we know as ninty-nine in four different number bases:

- 1100011 (binary)
- 143 (base-8)
- 99 (base-10)
- 63 (base-16)

Binary has fewer numerals (0 and 1) and the binary representation of 99 contains 7 digits instead of 2. Do you see the balance here? There is a give and take between the number of numerals and the number of digits. Where exactly is this equilibrium point? Can you express it in another form? Can you visualize it?

When we talk about the number "six", no matter what it looks like: **6** (base-10), **110** (binary), **10** (base-6), we always call it a "six" and it's always that same number you get when you multiply 2×3, no matter the number-base.

Throughout history there have been communities that settled on number bases different from the one we use today, and there are remnants of alternate counting systems today:

- 12 inches in a foot
- 12 in a dozen and 12 dozens equals a gross
- 16 ounces in a pound
- 12 pence in a shilling, 20 shillings in a pound
- 12 months in the year
- a day is two sets of 12
- a 360 degree circle is eighteen 20s, twelve 30s, six 60s, four 90s

Dividing things into smaller things is a fundamental tool for navigating our world. It entirely changes our perspective if we exist in an alternate number base.

A number changes personality depending on the number base. *6 is the 'half' number in base-12*.

What numbers can be divided in half and result in a whole number? in thirds? *12 can be divided in half, again in half, but not a third time (12, 6, 3).* 

## Divisors

Of course it's true that any number can be divided by any number*, but the question we keep circling around is *"does the division result in a **whole number**?"*

*not zero*

The name for these are **divisors**. 12 can be divided by 3, resulting in 4. Both 3 and 4 are *divisors* of 12.

If there are any musicians in the class, this should be a very appreciable moment. Halving a beat is easy, triplets are even okay, but a number like 5 or 7 is very uncomfortable to segment a beat into with exact precision. Playing music is a way to *feel* a divisor.

By the way, every number is divisible by 1 and itself. Don't forget about this, but I tend to ignore this trival case.

## Code

Ask a computer to visualize every number and its divisors.

```javascript
// p5.js

var radius = 20;

function setup() {
  createCanvas(400, 400);
  noStroke();
  fill(0, 20);
}

function draw() {
  background(220);
  var number = 0;
  for (var h = 0; h < height; h += radius) {
    for (var w = 0; w < width; w += radius) {
      number += 1;
      for (var i = 2; i < number; i += 1) {
        if (number % i === 0) circle(w, h, radius);
      }
    }
  }
}
```

The first two loops are simply for drawing a 2D grid of circles. Each circle represents a number (this is the variable *number*). the inner for-loop asks the question "is this number divisible by 2, by 3, by 4....?" (this is the search for a *divisor*). When it finds a divisor it draws a circle. If there are no divisors, the number gets zero circles.

Does anybody know what the empty spaces are?

**Prime numbers** get skipped over entirely because they're not divisible by anything.

### Play with the code

Replace "height" with "mouseY", and "width" with "mouseX". When you drag the mouse it's possible to find alignments where there are dark lines in vertical or diagonal arrangements. What is causing this?

## Primes

(non primes are called "composite")

[The fundamental theorem in arithmetic](https://en.wikipedia.org/wiki/Fundamental_theorem_of_arithmetic) describes prime factor reducibility. It is incredibly difficult to reduce a number into its prime factors. consider the easy examples (20 is 2 x 2 x 5). This is what makes encryption possible, the fact that prime factors take a long time to calculate.

there are infinitely many primes, [Euclid's theorem](https://en.wikipedia.org/wiki/Euclid%27s_theorem)

Explore the patterns in divisors, especially in the context of alternate number bases. The importance of prime numbers.

## Prime Factors

Going one step further into divisors. For a number, divide it into a pair of divisors, and if any of **those numbers** have divisors, exchange that number for its divisors.

```
                  12                         12
                 /  \                       /  \
                2    6                     3    4
                    / \                        / \
                   2   3                      2   2
```

This example shows two approaches to dividing up 12. No matter where you start you get the same result. The **prime factors** of 12 are 2, 2, 3.

You should be able to line up the prime factors and multiply and get back the original number:  2 × 2 × 3 = 12.

## Art

Now we should be able to appreciate the details behind some of these artworks around patterns in divisors.

Show artwork by math artists that exhibit prime factorizations. My selections were Michael Fogleman, Jason Davies, Edmund Harriss, Paul Bourke, Nicholas Rougeux, and an Ulam's spiral from Wikipedia.

## Group Activity:

Measure PI to as many decimal places as possible.

PI is the ratio of the circumference to the diameter (draw a diagram). Find a circle. Chop a piece of string that measures exactly across the diameter, then laid the string end to end measuring the circumference.

Divide into groups. Use anything on the ITP floor.

People tend to take two approaches:

- create your measurement tools (string), measure them against modern day rulers (cm, inches), then divide the centimeter quantites by one another to get a ratio.
- create your measurement tools but when it comes to finding the remainder after the 3, fold the string in half...fourths... let the string itself tell you how many segments it fractions into.

## Homework

Visulize or sonify an alternate number base, patterns among divisors, or prime-factors.

## Appendix

### Determine prime numbers

```javascript
// Javascript

var primes = [];

function factorOnce(number) {
  for (var p = 0; p < primes.length; p += 1) {
    var fraction = number / primes[p];
    if (Number.isInteger(fraction)) {
      return fraction;
    }
  }
  return number;
}

for (var number = 2; number < 1000; number += 1) {
  var iterate = number;
  while (true) {
    var result = factorOnce(iterate);
    if (primes.includes(iterate)) {
      break;
    }
    if (result === iterate) {
      primes.push(number);
      break;
    }
    iterate = result;
  }
}

console.log(primes);
```

### Mathematical Notation

- natural numbers (N)
- integers (Z)
- real numbers (R)
  - rational numbers (Q)
  - irrational numbers (R/Q)
- (we won't yet talk about real or imaginary or anything beyond this...)

due to Cantor's proof (real numbers are uncountable and the rationals countable), almost all real numbers are irrational.