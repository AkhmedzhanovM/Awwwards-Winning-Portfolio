export const slideUp = {
  initial: {
    y: "0vh",
  },
  animate: {
    y: "-100vh",
    transition: {duration: 0.5},
  },
};

export const up = {
  initial: {
    y: "20vh",
  },
  animate: {
    y: "-4vh",
    transition: { duration: 0.5, delay: 0.5, ease: [0.76, 0, 0.24, 1]},
  },
};

export const navSlide = {
  open: {
    y: 0,
    transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]},
  },
  closed: {
    y: "-100vh",
    transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]},
  },
};

export const button = {
  up: {
    y: "-50px",
  },
};