export const variants = {
  preloaderContainer: {
    intiial: {
      y: 0,
    },
    Animate: {
      y: 0,
    },
    exit: {
      y: "-100vh",
      transition: {
        duration: 1.5,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  },
  preloaderContainerMobile: {
    intiial: {
      y: 0,
    },
    Animate: {
      y: 0,
    },
    exit: {
      y: "-100vh",
      transition: {
        duration: 1.5,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  },
  preloaderText1: {
    initial: {
      skewY: 10,
      y: 50,
    },
    animate: {
      skewY: 0,
      y: 0,

      transition: {
        duration: 1,
        delay: 0.25,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  },
  preloaderText2: {
    initial: {
      skewY: 10,
      y: 50,
    },
    animate: {
      skewY: 0,
      y: 0,

      transition: {
        duration: 1,
        delay: 0.5,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  },
  main: {
    intiial: {
      width: 0,
    },
    Animate: {
      width: "900px",
      opacity: 1,
      transition: {
        delay: 0.75,
        duration: 1.25,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  },
  mainMobile: {
    intiial: {
      width: 0,
    },
    Animate: {
      width: "100vw",
      opacity: 1,
      transition: {
        duration: 1.25,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  },

  imageScale: {
    initial: {
      scale: 1.1,
    },
    animate: {
      scale: 1,
      transition: {
        duration: 4,
        ease: [0.33, 1, 0.68, 1],
        delay: 2,
      },
    },
  },
  textContainer: {
    initial: {
      opacity: 0,
    },
    Animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        duration: 1.5,
        ease: [0.33, 1, 0.68, 1],
        delay: 1.65,
      },
    },
  },
  textContainerMobile: {
    initial: {
      opacity: 0,
    },
    Animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        duration: 1.5,
        ease: [0.33, 1, 0.68, 1],
        delay: 1.25,
      },
    },
  },
  underline: {
    initial: {
      width: 0,
    },
    Animate: {
      width: "100%",
      transition: {
        duration: 1.5,
        ease: [0.76, 0, 0.24, 1],
        delay: 1.5,
      },
    },
  },
  contentContainer: {
    initial: {},
    Animate: {
      transition: {
        staggerChildren: 0.4,
      },
    },
  },
};

export const mobileVariants = {
  main: {
    intiial: {
      width: "100%",
    },
    Animate: {
      width: "100%",
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 1,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  },
};
