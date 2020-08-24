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

## MatterJS Terminology relevant to this application

- World
  - Object that contains all of the different "things" in our application
- Engine
  - Reads the current state of the world, then calculates changes in position for all of the different shapes
- Runner
  - Gets the engine and the world to work together, updates 60 times per second
- Render
  - Whenever the runner processes an update, Render will look at all the different shapes and show them on screen
- Body
  - A shape that we are displaying, can be a circle, square, line, etc
