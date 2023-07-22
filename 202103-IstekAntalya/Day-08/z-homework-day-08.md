Homework for Day-08
---
bingol, 2021-03-20

The syntax of arrays is

```javascript
// 1D array
a = [1, 2, 3, 4];

// 2D array
b = [
    [1, 2, 3],
    [4, 6, 1, 4]
];
```

The syntax of comments is

```javascript
/**
 * your comments
 */
```

# Homework

You are in a position to make any kind of roads, that you see in
the [original game](https://www.google.com/doodles/celebrating-50-years-of-kids-coding?hl=en) and possibly much more.
You can also make pictures if you reduce the radius or sideLength.

1. Get a new version of `snap_grid-v6-grid-reconfigurable-carrot`. Make a nice picture of something such as a car. You
   need to reduce "dot" size of the "circle" or "square".

1. Design a complicated road. Have your turtle walk the road that you just designed. Do not worry about it if the turtle
   is off road. (*Game v1*)

1. Carrots are not nice. Design your own carrot and place in the cells.

# Challenge (The final project)

1. **Multicolor.** Make necessary changes in the code so that you can use not one color but multicolor pictures. Design
   a colorful picture.

1. **Points.** If turtle gets into a cell with a carrot, remove the carrot and increase the points of the user by
   one. (*Game v2*)

1. **Game over.** Check if the turtle is left the road right after it executes the command "R", "L", "F". If it is not
   in a square then warn the user that the game is over. Otherwise, do nothing. Do you really check when the command is
   either "L" or "R"? **Hint.** Check `turtleIsIn` function in `z-homework-day-03-solution.html`. (*Game v3*)

1. **Multi-level game.** You can make any level as you want in the game. Let's make a game with two levels. Design two
   different road, one easy and one difficult. Use them for two different levels of the game. Modify your code so that
   the game starts with the easy level. Then switch to the difficult level. (*Game v4*)

# Software Engineering

High quality code is not easy to develop.

1. **Code quality.** Review your code, and add comments so that someone else would understand it by reading it without
   asking you anything. Test that by exchanging codes with a friend for review. Then discuss how to improve your coding
   and documenting skills.

1. **Utility.** Go over `utility-smart2DArrayGenerator.html` and make sure that you understand how it works.

1. **Beta test.** Ask a friend to play your game. Observe how she plays. Take notes for points of improvement. Implement
   them.

**Reminder.**

- Our common code repository for sharing files is at
  [https://drive.google.com/drive/folders/1AzcqjotYDU3RfQQPceJYaPujJvRTsfJ0?usp=sharing](https://drive.google.com/drive/folders/1AzcqjotYDU3RfQQPceJYaPujJvRTsfJ0?usp=sharing)
  . This repo will be removed by 2021-05-01.

- Check the solutions of the previous day.

# What is next

Check "FutureWork.pdf".

# Feedback

Please do not forget to give me your feedback via your instructor. Thank you.
