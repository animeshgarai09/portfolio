export const svgPathAnimation = {
    hidden: {
        pathLength: 0,
        pathOffset: 0,
        opacity: 1,
    },
    start: {
        pathLength: 1,
        pathOffset: 0,
        transition: {
            ease: "linear",
            duration: 3,
        },
    },
    end: {
        pathOffset: 1,
        transition: {
            ease: "linear",
            delay: 1.2,
            duration: 2,
        },
    },
}

class delayAnime {
    val: number
    constructor() {
        this.val = 0
    }
    duration(time: number) {
        this.val += time
        return time
    }
    delay(time: number) {
        this.val += time
        return this.val
    }
    get() {
        return this.val
    }
}

const delayT = new delayAnime()
export const sliderAnimation = {
    first: {
        top: "-100vh",
        transition: {
            ease: [0.76, 0, 0.24, 1],
            duration: 0.6,
            delay: delayT.delay(0),
        },
    },
    second: {
        top: "-100vh",
        transition: {
            ease: [0.76, 0, 0.24, 1],
            delay: delayT.delay(0.2),
            duration: 0.5,
        },
    },
    third: {
        top: "-100vh",
        transition: {
            ease: [0.76, 0, 0.24, 1],
            delay: delayT.delay(0.1),
            duration: 0.5,
        },
    },
    forth: {
        top: "-100vh",
        transition: {
            ease: [0.76, 0, 0.24, 1],
            delay: delayT.delay(0.1),
            duration: 0.5,
        },
    },
    fifth: {
        top: "-100vh",
        transition: {
            ease: [0.76, 0, 0.24, 1],
            delay: delayT.delay(0.1),
            duration: 0.5,
        },
    },
    sixth: {
        top: "-100vh",
        transition: {
            ease: [0.76, 0, 0.24, 1],
            delay: delayT.delay(0.1),
            duration: 0.5,
        },
    },
}
