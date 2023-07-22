Homework for Day-05
---
bingol, 2021-03-10

# User Interface

## Informing user

We can share information with the user in two ways:

- So far we frequently used `console` to communicate with the user. The syntax is:

```javascript
console.log("message");
```

- A second way to inform the user is alert, with the following syntax:

```javascript
alert("message");
```

## Get info from the user

We get information from the user with `prompt`. We provide a message which tells what is expected to enter. Whatever is
entered by the user is returned.

```javascript
    let input = window.prompt("Message to inform user what to enter");
```

# Homework

Recall the homework of Day-03. Given the current direction, functions `turtleRight` and `turtleLeft` provide the correct
direction. We did not have a `turtleForward` function, but you can do that, too. Our turtle "knows" how to draw itself
with `turtleDraw`. It also "knows" which direction to turn to.

We started to develop our `turtle`. Consider `z-homework-day-05-byPrompt.html`, which is the user interface. JS
file `z-homework-day-05-turtle.js` is our first version of the turtle.

1. Add `turtleForward` function to the turtle.
1. Make necessary changes so that it acts according to what user enters as "F", "R", or "L".

# Challenge

Consider `UserInterface-button.html`,
which has a button object.
When user click on the button, it makes a call to a function.

1. Copy `z-homework-day-05-byPrompt.html` and under rename `z-homework-day-05-byButton.html`.
2. From `UserInterface-button.html` 
	1. Get `<button>` part 
	2. Get function `askUser` part. 
2. Add three buttons for "F", "R", and "L".
3. When button "F" is clicked, the turtle should move one step forward.
4. When button "R" is clicked, the turtle should turn to the right.
4. When button "L" is clicked, the turtle should turn to the left.
5. Note that using this interface you can move the turtle in any way you wish. 
For example, by pressing proper buttons, 
it moves according to "FFRFFFLF".

**Reminder.**

- Our common code repository for sharing files is at
  [https://drive.google.com/drive/folders/1AzcqjotYDU3RfQQPceJYaPujJvRTsfJ0?usp=sharing](https://drive.google.com/drive/folders/1AzcqjotYDU3RfQQPceJYaPujJvRTsfJ0?usp=sharing)
  .

- Check the solutions of the previous day. 
