# 02: Functions

> files relating to this lecture:
>
> - [(this file)](index.md)
> - [assignment](assignment.md)
> - [introduction to pure data](../documentation/pure-data-introduction.md)

### Administration (20 minutes)

Talk about homework from last time. Share code to calculate prime numbers.

## History: The Abassid Period (10 minutes)

At the turn of the millenia Baghdad was a gathering place for all kinds of people. Bayt al-Hikma, "House of Wisdom" where essentially the entire corpus of Greek scientific literature is translated into Arabic.

### The Compendious Book on Calculation by Completion and Balancing

When Khwarizmi wrote his book on Algebra in 820AD, he didn't use symbols, the equations were written out in words. "the thing plus one equals twice the thing", the variable x was called the *thing* or "shay" (شيء)

At the time there were two competing ways of writing numbers

- one involved Arabic letters, very similar to Roman numerals (imagine doing arithmetic with Roman numerals)
- a newer numeral system from India (the same we use today)

Khwarizmi advocated using Hindu numerals in the 9th century. Later in the 1200s, Fibonacci was still advocating them. And they still never caught on for hundreds of years after Fibonacci!

### Negative numbers

To the Ancient Greeks, negative numbers were meaningless. Everything was a length or a volume, so negative quantities of course couldn't exist.

Historically, debts have always been treated with the same behavior as negative numbers. But not until **Liu Hui** in China 200AD were negative and positive numbers treated as opposites of the same, he wrote negative numbers *slanted*, otherwise the same as their positive counterparts. Then, it wasn't until India in 600AD where Brahmagupta described negative numbers with a symbol, also using the numeral system that we now use today.

Khwarizmi knew about Brahmagupta's negative numbers, and advocated for their use, but when he was describing algebra he was doing so in terms of the geometric constructions that followed in the Greek tradition, and for that reason avoided involving negative numbers.

Even in the 1700s in Europe, though negative numbers were beginning to be widely accepted, there were still mathematicians arguing that negative numbers should not exist.

sources: Wikipedia, Al Jazeera, [Leo Rogers](https://nrich.maths.org/5961)

## Algebra review (20 minutes)

### Balance, and the = sign

*whatever you do to one side, you can do to the other*

Years of algebra taught us that we can move things to the other side of the equation. We have an intuition about switching using addition/subtraction and multiplication/division

- +x or -x: move x to the other side and switch its sign
- ∙x or ÷x: move x to the other side and flip numerator and denominator

Remind yourself what is actually going on here. With addition, you are **subtracting x from both sides**, and in the case of multiplication, you are **multiplying both sides by the inverse of x**.

### Reducing

- x² + x³ cannot be reduced
- x² ∙ x³ the exponents add. x⁵ (or subtract if they are divided)
- (x²)³ the exponents multiply. x⁶

Parenthesis and multiplication work such that the outside gets multiplied by everything inside the parenthesis separated by addition/subtraction.

a ∙ (x + y + z) = ax + ay + az

and in the case that both sides of the multiplication have parenthesis, each part gets multiplied by each part:

(a + b) ∙ (x + y) = ax + ay + bx + by

*is there an intuition we can build for this?*

In the unique case that the two halves are the same, a pattern emerges you will see often:

(a + b)² = (a + b) ∙ (a + b) = a² + ab + ab + b² = **a² + 2ab + b²**

for example: (10 - x)² can be rewritten as (10 - x) ∙ (10 - x), further reducing to x² - 20x + 100

Khwarizmi describes 6 forms a square can take

- squares equal roots (ax² = bx)
- squares equal number (ax² = c)
- roots equal number (bx = c)
- squares and roots equal number (ax² + bx = c)
- squares and number equal roots (ax² + c = bx)
- roots and number equal squares (bx + c = ax²)

look especially at those last three, why didn't Khwarizmi simply write them as one equation and consider all cases covered? **because there were no negative numbers!** They weren't allowed to move a thing to the other side if it was going to result in a negative quantity.

Quadratics were the extent of algebra at the time, 820AD, it took another few hundred years until the solution to cubics was discovered by Omar Khayyam at around 1100 AD.

## Identity operations

In linear algebra, we'll be learning about the identity matrix. When you multiply something by the identity matrix, you get back that thing. Identity operations exist for all operands.

- a + 0 = a
- a ∙ 1 = a

for addition and subtraction, the identity quantity is 0 and 1 respectively. These seem like trivial cases, but it gets more fun when you use alternate representations of each. For example:

```
       2.54 cm
1  =  ---------
        1 in
```

### Unit conversion

It's important that you order the top and bottom values in the correct way. What does this convert to and from?:

```
 2.54 cm
---------
  1 in
```

it doesn't convert centimeters to inches because "inches is 1". It converts inches to centimeters because centimeters is on the top. Let's revsit why.

Remember that you can always turn a number into a fraction. Turn your pre-converted value into a fraction:

```
 13 in       2.54 cm
-------  ∙  ---------
   1          1 in
```

If the same thing is on top and bottom you can *cross it out*. Cross out the "inches" label.

```
 13 XXX       2.54 cm
--------  ∙  ---------
   1           1 XXX
```

13 ∙ 2.54cm results in **33 cm**. 

Anytime you arrange a conversion it looks like:

```
 begin       new units
-------  ∙  -----------
   1         old units
```

When you stack multiple conversions in the same line, the pattern must match this way.

```
 A       B       C       D
---  *  ---  *  ---  *  ---
 1       A       B       C
```

This will convert from units A into units D.

Practice this by chaining together a long phrase, write it all out *before* you do any multiplication.

## Exercise: Convert measurements of your computer (10 min)

- the screen-size in light-years
- the screen-size in Carbon atoms
- energy consumption (watts) in terms of coal burned
- energy consumption (watts) in terms of horsepower
- the physical length of a sound wave - use the frequency of your speaking voice

### Celius and Fahrenheit

To clarify this point above, can you create a function that converts between Celsius and Fahrenheit?

What makes this one different from the simple * 1 we did earlier? We need addition/subtraction. This leaves affine scale behavior behind.

## Code Exercise

Code the map function.

## Summary

When we only use multiplication (no addition) we are performing **linear transforms**. We will see these during linear algebra when we build matrices for scaling and rotation. Translation is unique among these, it involves *moving the origin*. When we do the Celsius-Fahrenheit conversion we are moving the origin. A **scalar** is the multiplier in a linear transform.

---

## Introduction to Pure Data (40 min)

Traditional programming languages execute top-down with the exeception of asynchronous events. When the program completes the line of code and the last loop has run, the program is finished and the computer enters a state of non-responsiveness.

To a beginner, a Pure Data sketch is a tangle of wires. A Pure Data program can have multiple entry points; it's doesn't only start with the first line of code like a text-based language.

Signals travel down the lines and trip other signals, study a sketch. Primarily you want to be aquainted with the "bang" signal.

### A. Primitives

- ⌘1 command boxes: the most versatile. can contain simple numbers to complex expressions.
- ⌘2 messages: think of it like a ⌘1 command box but with a more user-facing clickable interface to initiate the message.
- ⌘3 numbers: like a variable in memory that stores one number, integer or float. the output will always be whatever is the visible number. if the input is a number it stores this number, if the input is a bang it sends the number down the line.
- ⌘4 symbols: cannot be edited
- ⌘5 comments: like code comments these are simply human-readable messages. they have no interaction.

special looking ones:

- Bang: both the name of the button-like interface, and the type of the signal that goes down a wire.
- Toggle: a 2-state button. will send a 0 or a 1 for unchecked or checked.
- Sliders and Radios: UI interface elements that send numbers down the line. right-click to edit the ranges and behaviors.

### B. Switching edit mode on and off

the behavior of each node when edit mode is ON:

- ⌘1 command boxes: editable
- ⌘2 messages: editable
- ⌘3 numbers: cannot be edited
- ⌘4 symbols: cannot be edited
- ⌘5 comments: editable

and when edit mode is OFF: 

- ⌘1 command boxes: no behavior
- ⌘2 messages: click to send the message
- ⌘3 numbers: drag up and down to change the number
- ⌘4 symbols: no behavior
- ⌘5 comments: no behavior

### C. Order of operations

create an object box with a plus sign in it  [+]. plug two ⌘3 number boxes into the inputs and one ⌘3 number box the output. Notice how the answer only refreshes when the first box is triggered.

If you hook a ⌘1 command or ⌘2 message box up to an input, it doesn't actually inhabit the input until the message or bang is sent down the line.

## D. Memory

create an object box with a lowercase **f** in it. the right most input *stores* a value into the box, but doesn't send. the left input behavior differs depending on the type of message:

- if left input receives a **number**: store the number *and* send it through the output
- if left input receives a **bang**: send the currently saved number through the output. 

in both cases the number saved remains being saved, there is no sense of the number getting used up when a message gets sent through the output.

### E. Methods

Method names: **f** to store variables. **print** to inspect messages. **sin** and **cos** as familiar functions.

Hook up familiar functions with slider inputs. Create a relationship between input and output. This gets at the goal of today's lesson in pure data: visualize familiar functions in the data-flow language design model.

end with **expr** (maybe, maybe save this for another day)

## Introduction to Functions (30 min)

correlate the visualizations we created in Pure Data with a function expression in a programming language, with the *argument-input* and the *return value*. 

*if this was a chapter in a book, the header image would be a comparison between `function method(input) { return output; }` side-by-side with the same function drawn out in Pure Data.*

Though the graph (function graphing) resembles the Euclidean coordinate system with an X and Y axes, it is not the same Euclidean coordinate system to represent 2D space we use when we're drawing in processing. The two axes in the mathematical graph have entirely different meanings: The X axis represents an INPUT to a function and the Y represents the OUTPUT, which is an arbitrary mapping, an agreed-upon convention.

What is the function that means the input is the output?

Show function boxes by Kazu Automata. It doesn't matter what goes on *inside* the function, as long as you have a sense for its behavior and can use it.

## Assignment

### Aspect ratio tool

Create a tool to solve all your image-scaling needs. This tool will scale one rectangle to fit another. Your code is going to need to be able to ask the question: *is the width or the height the limiting factor?* Two takes on the assignment: beginner and advanced:

- linear transform only: ignore moving the origin. only deal with **width** and **height** variables
- move the origin. maintain that both rectangle's origins are at the center.

The input you need from the user are:

- frame rectangle width and height
- picture rectangle width and height

the outputs generated are:

- picture rectangle width and height, and the **scalar** multiplier that took it there.
- if you are doing advanced, assume the input rectangle's origin is 0, 0, give us the **new origin** for the picture rectangle.

**Aspect-fit** can be the default behavior, but it's likely that you'll want to offer **aspect-fill** as well.

### Written assignment

The [Wikipedia page for House of Wisdom](https://en.wikipedia.org/wiki/House_of_Wisdom#Notable_people) has a decent list of notible mathematicians and philosophers from the Abassid period, the period that was key to connecting Ancient Greek math and philosphy to the European Renaissance. Select a person from this list and write about them. Write about an idea of theirs and the impact of it. Often these inventions are commonplace to us (like the invention of negative numbers), if necessary describe the landscape at the time to help explain why their inventions were so novel.
