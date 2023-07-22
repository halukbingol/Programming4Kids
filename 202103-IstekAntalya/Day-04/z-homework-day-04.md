Homework for Day-04
---
bingol, 2021-03-06

# Functions

Without knowing it, we have been using functions since Day-01. Statement such as

```javascript
s.circle(100, 150, 70);
```

was a function call to function `circle` with parameter list of `100, 150, 70)`.

Don't worry about the `s` part in `s.circle`, which will be covered later.

## Flow of execution

We learned to control the flow of execution by means of functions. When a function called,

- execution leaves the current code block
- jumps to code block defined in the body of the function
- it jumps back to the caller block
- when the function block ends.

## What is a function

A *function* is a block of parametric codes. Depending on the parameters it behaves differently.

- Each function should have a *unique* name.

- The key issue is how to pass parameters to a function. It is done by means of the order of the parameters.

- The result of the function is passed back to the caller by means of `return` statement.

Let's consider two sides separately.

### Caller side

Syntax of calling is simple.

```javascript
turtle_step_size = functionName(b1, b2, ..., bN);
```

- The *caller* calls the function with its *name*, and an *ordered of list of parameters* expressed by means of
  variables in the caller side.

- Note that variables such as `b1` are variables of the caller side.

- Then waits the function to *return* its results.

### Called side

At the function side there is a corresponding list of parameters.
This is the syntax:

```javascript
let functionName = function (c1, c2, ..., cN) {
    // body does the calculations
    // which returns some value such as
    return 8;
}
```

- Function gets its parameters.
- Does its calculation in its body.
- When it decides that it is done, it passes back to the caller its results by means of `return` statement.

## Parameter passing

At the function side, it is not required to use the same variable names. Actually, it is almost always the case that the
function uses different names for the parameters. The order is used for parameter matching. That is, the "value" of the
n'th parameter in the caller's list is assigned to the n'th variable in the function's list.

# Homework

Consider files `function-v1.html` and `function-v2.html` in Day-04 on the shared repository, i.e. google drive.

We improve our understanding of functions.

1. Suppose you are given four side lengths,
   `a`, `b`, `c, `d`, of a rectangle.

    1. Develop function `getPerimeterA`, which returns the perimeter of the rectangle.

    1. Develop function `getAreaA`, which returns the area of the rectangle.

    1. Develop function `getDiagonalA`, which returns the length of its diagonals.

1. This time we are given the coordinates of the four corners of a rectangle. That is `(xA, yA)`, `(xB, yB)`, `(xC, yC)`
   , and `(xD, yD)`.

	1. Develop function `getPerimeterB`, which returns the perimeter of the rectangle. 

	1. Develop function `getAreaB`, which returns the area of the rectangle.

	1. Develop function `getDiagonalB`, which returns the length of its diagonals.

1. Develop testing for each of your functions to make sure that they correctly work.

# Challenge

Remember a good programmer *reuse*s her code.

1. Can you think of reducing the number lines of your codes by clever ways to use the concept of function? That is, if
   you have repeated code segments, make them as functions.

**Reminder.**

- Our common code repository for sharing files is at
  [https://drive.google.com/drive/folders/1AzcqjotYDU3RfQQPceJYaPujJvRTsfJ0?usp=sharing](https://drive.google.com/drive/folders/1AzcqjotYDU3RfQQPceJYaPujJvRTsfJ0?usp=sharing)
  .

- Check the solutions of the previous day. 
