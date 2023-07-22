Homework for Day-03
---
bingol, 2021-03-03

We are working on the game at https://www.google.com/doodles/celebrating-50-years-of-kids-coding?hl=en by Google.

We learned to control the flow of execution by `if` statements.

# Syntax

```javascript
if (condition) {
    // execute this block if condition is true
}
```

```javascript
if (condition) {
    // execute this block if condition is true
} else {
    // execute this block if condition is false
}
```

```javascript
if (condition) {
    // execute this block if condition is true
} else if (condition2) {
    // execute this block if condition is false but condition2 is true
}
```

Consider files `statement_if.html`, `statement_if_else.html`, and `statement_if_else_if.html`. They contain examples of
various `if` statements. File `turnRight_v1.html` is an example of 4-way branching according to directions. You can make
much more complex branching if there is a need.

In `turnRight_v1.html`, function `turnRight(direction)` returns the direction, which is the right of the given
direction. 

We start to use `turtle` instead of "rabbit" since the name of this is
actually [turtle graphics](https://en.wikipedia.org/wiki/Turtle_graphics).
You can do a web search for turtle graphics.

1. Can you make the code of `turnRight(direction)` shorter? Make a copy of `turnRight_v1.html` and save it as a new
   version `turnRight_v2.html` and work on it. Do not forget to rename the function as `turtleRight`.

1. Write function `turtleLeft(direction)`, which returns the direction that is the left of the current direction.

1. In hw-02, you draw turtle to the north, to the east, etc. Modify you code so that new function `turtleDraw` draws
   itself according to its direction. That is, if direction is "N", it faces to the north.

# Challenge

Suppose a square is given by its upper left corner `(x, y)` and its side length`a`. Suppose the turtle is at `(x_r, y_r)`.
Write function

   ```javascript
   function turtleIsIn(x, y, a, x_r, y_r) {
    // your code 
}
   ```

, which returns `true` if the turtle is in the given square, `false` otherwise.

PS. For logical expressions `p` and `q`,
`p && q` means the logical AND and
`p || q` means the logical OR.

**Reminder.**

- We use
  [https://drive.google.com/drive/folders/1AzcqjotYDU3RfQQPceJYaPujJvRTsfJ0?usp=sharing](https://drive.google.com/drive/folders/1AzcqjotYDU3RfQQPceJYaPujJvRTsfJ0?usp=sharing)
  for sharing files.
- Check the solution of the previous day. That is, `z-homework-day-02-solution.html` in Day-02 in the drive.

