Homework for Day-02
---
bingol, 2021-02-27

We are working on the game 
at https://www.google.com/doodles/celebrating-50-years-of-kids-coding?hl=en by Google.
We try to make a simplified version of it with squares.


Consider in `snap_square-v3.html`. We have learned how to draw a line on the screen as:

```javascript
s.line(Ax, Ay, Bx, By)
        .attr({
           stroke: "#cccccc",
           strokeWidth: 3
        });
```

Then we define function `drawSquare`, 
which takes parameters the coordinates of the upper-left
corner `(x, y)` and side length `a` as parameters, to draw a square.


1. Make a copy of `snap_square.html`.

1. Modify the copy so that you get the shape given below, where each "0" is a square.
   
   ```
   0000000
        0
        0  0
        0000
   ```
1. Now we need a rabbit. 
   Define a function that draws a rabbit in the center of a square defined by upper left corner `(x, y)` and side length `a`.
   
   ```javascript
   function rabbit_v1(x, y, a){
        // your code 
   }
   ```
   Try your rabbit in various squares on the path that you designed.
   

# Challenge

Remember that our rabbit has four directions indicated by "N", "W", "E", and "W".

1. Modify your rabbit so that it direct to "N", call this version `rabbit_N`.
1. Modify your rabbit so that it direct to "S", call this version `rabbit_S`.
1. Modify your rabbit so that it direct to "E", call this version `rabbit_E`.
1. Modify your rabbit so that it direct to "W", call this version `rabbit_w`.
1. How do you modify your design so that rabbit it also takes direction such as
   
   ```javascript
   function rabbit_v2(x, y, a, direction){
        // your code 
   }
   ```


**Reminder.** 

- We use
[https://drive.google.com/drive/folders/1AzcqjotYDU3RfQQPceJYaPujJvRTsfJ0?usp=sharing](https://drive.google.com/drive/folders/1AzcqjotYDU3RfQQPceJYaPujJvRTsfJ0?usp=sharing)
for sharing files.
