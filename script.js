const { animate } = window.Motion;

animate(
  ".box",
  { y: "-100%" },
  { duration: 4, ease: [0.39, 0.24, 0.3, 1] }
);
animate(
  ".box1",
  { y: "-100%" },
  { duration: 3, ease: [0.39, 0.24, 0.3, 1] }
);

