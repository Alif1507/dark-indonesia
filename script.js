const { animate } = window.Motion;

animate(
  ".box",
  { translateY: -1000 },
  { duration: 4, ease: [0.39, 0.24, 0.3, 1] }
);
animate(
  ".box1",
  { translateY: -1000 },
  { duration: 3, ease: [0.39, 0.24, 0.3, 1] }
);
