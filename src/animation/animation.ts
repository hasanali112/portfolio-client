export const parent = {
  up: { y: -16 },
  down: {
    y: [16, 0, 16],
    transition: {
      ease: "linear",
      delay: 0.5,
      duration: 5,
      repeat: Infinity,
      repeatDelay: 1,
    },
  },
};

export const mainParent = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "linear",
      delay: 1,
      duration: 1,
    },
  },
};
