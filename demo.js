const { Engine, Render, Runner, World, Bodies, MouseConstraint, Mouse } = Matter;

const engine = Engine.create();

const { world } = engine;

const vw = 0.95 * Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
const vh = 0.95 * Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

const render = Render.create({
  element: document.body,
  engine,
  options: {
    height: vh,
    width: vw,
  },
  wireframes: false,
});

Render.run(render);
Runner.run(Runner.create(), engine);
World.add(
  world,
  MouseConstraint.create(engine, {
    mouse: Mouse.create(render.canvas),
  })
);

// Random Shapes
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
for (let i = 0; i < 150; i++) {
  let chosenColor = colors[Math.floor(Math.random() * colors.length)];
  if (i % 3 === 0 && i % 5 === 0) {
    World.add(
      world,
      Bodies.polygon(Math.random() * vw, Math.random() * vh, Math.random() * 8, 40, {
        render: {
          fillStyle: chosenColor,
          strokeStyle: chosenColor,
        },
      })
    );
  } else if (i % 5 === 0) {
    World.add(world, Bodies.rectangle(Math.random() * vw, Math.random() * vh, 40, 40), {
      render: {
        fillStyle: chosenColor,
        strokeStyle: chosenColor,
      },
    });
  } else if (i % 3 === 0) {
    World.add(world, Bodies.circle(Math.random() * vw, Math.random() * vh, 40), {
      render: {
        fillStyle: chosenColor,
        strokeStyle: chosenColor,
      },
    });
  } else {
    World.add(
      world,
      Bodies.trapezoid(Math.random() * vw, Math.random() * vh, 50, 40, 0.6, {
        render: {
          fillStyle: chosenColor,
          strokeStyle: chosenColor,
        },
      })
    );
  }
}

// Boundaries (as bodies)
const walls = [
  Bodies.rectangle(vw / 2, vh, vw, 20, {
    isStatic: true,
  }),
  Bodies.rectangle(vw / 2, 0, vw, 20, {
    isStatic: true,
  }),
  Bodies.rectangle(0, vh / 2, 20, vh, {
    isStatic: true,
  }),
  Bodies.rectangle(vw, vh / 2, 20, vh, {
    isStatic: true,
  }),
];
World.add(world, walls);
