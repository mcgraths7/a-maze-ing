# A-Maze-Ing

## Challenges

- How do we generate the maze?
  - Several ways to generate, we will be using a tree data structure & recursion
- How are we going to render it on the screen?
  - Using a library known as MatterJS, we will draw the maze onto a canvas element (brm.io/matter-js)
- How do we make the maze navigable with keyboard?
  - MatterJS has a method to map keypresses to movement of shapes
- How can we detect when the ball touches the square?
  - MatterJS has the ability to detect collisions and report them as events which we can listen for
