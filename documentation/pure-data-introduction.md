# Introduction to Pure Data

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

end with **expr**