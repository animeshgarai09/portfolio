export const slideUp = {
    initial: {
        y: "70vh",
    },
    slideUp: {
        y: 0,
        transition: {
            ease: [0.33, 1, 0.68, 1],
            delay: 4.3,
            duration: 0.5,
        },
        transitionEnd: {
            x: 0,
            y: 0,
        },
    },
}
