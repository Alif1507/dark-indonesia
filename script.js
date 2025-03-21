const { animate, delay, stagger,initial  } = Motion;

animate(".op-logo", {x: "-50%", y:"-100%"})
animate(".text-op", {x: "-50%", y:"-50%"})

animate(".op-logo", { opacity: 1 }, { duration: 1 });

animate(".op-logo", { y: "-100px" }, { delay: 3, duration: 1 });

animate(".op-logo", { scale: 0 }, {delay: 8 });

animate(".text-op", {opacity: 1}, {delay: 5})
animate(".text-op", {scale: 0}, {delay: 8})


animate(
  ".box",
  { backgroundColor: "rgb(255, 0, 0)" },
  { duration: 4, ease: [0.39, 0.24, 0.3, 1], delay: 8 }
);

animate(
  ".box1",
  { backgroundColor: "rgb(255, 0, 0)" },
  { duration: 4, ease: [0.39, 0.24, 0.3, 1], delay: 8 }
);

animate(
  ".box",
  { x: "100%" },
  { duration: 4, ease: [0.39, 0.24, 0.3, 1], delay: 8.4 }
);
animate(
  ".box1",
  { x: "-100%" },
  { duration: 4, ease: [0.39, 0.24, 0.3, 1], delay: 8.4 }
);

animate(
  ".box",
  { display: "none" },
  { duration: 4, ease: [0.39, 0.24, 0.3, 1], delay: 8.7 }
);

animate(
  ".box1",
  { display: "none" },
  { duration: 4, ease: [0.39, 0.24, 0.3, 1], delay: 8.7 }
);

animate(
  ".box2",
  { backgroundColor: "rgb(255, 0, 0)" },
  { duration: 4, ease: [0.39, 0.24, 0.3, 1], delay: 8 }
);

animate(
  ".box3",
  { backgroundColor: "rgb(255, 0, 0)" },
  { duration: 4, ease: [0.39, 0.24, 0.3, 1], delay: 8 }
);

animate(
  ".box2",
  { y: "-100%" },
  { duration: 4, ease: [0.39, 0.24, 0.3, 1], delay: 8.4 }
);
animate(
  ".box3",
  { y: "100%" },
  { duration: 4, ease: [0.39, 0.24, 0.3, 1], delay: 8.4 }
);

animate(
  ".box2",
  { display: "none" },
  { duration: 4, ease: [0.39, 0.24, 0.3, 1], delay: 8.7 }
);

animate(
  ".box3",
  { display: "none" },
  { duration: 4, ease: [0.39, 0.24, 0.3, 1], delay: 8.7 }
);














