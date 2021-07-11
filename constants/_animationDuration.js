export const Intro_name = { delay: .6, duration: 1 }
export const Intro_img = { delay: cal(Intro_name.delay, Intro_name.duration), duration: 1.5 }
export const Intro_skills = { delay: cal(Intro_img.delay, Intro_img.duration, 0.6), duration: 3 }
export const Intro_overlay = { delay: cal(Intro_skills.delay, Intro_skills.duration, 0.3), duration: 1.2 }

export const FloatingNav_el = { delay: cal(Intro_overlay.delay, Intro_overlay.duration), duration: 1 }


function cal(...args) {
    return args.reduce(function (acc, cur) {
        return acc + cur
    })
}