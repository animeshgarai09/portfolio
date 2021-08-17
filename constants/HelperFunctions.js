import gsap from 'gsap'
import { useRef } from 'react'

export function killTimeline(timeline) {
    const targets = timeline.getChildren()

    timeline.kill();
    for (let target of targets) {
        if (target.targets().length) {
            gsap.set(target.targets(), { clearProps: "all" })
        }
    }
}

export function calculateDuration(position) {
    let totalTravel = Math.abs(window.scrollY - position)
    console.log(totalTravel)
    if (totalTravel < 1000) {
        return 0.6
    } else if (totalTravel < 2000) {
        return 0.8
    } else if (totalTravel < 3000) {
        return 1
    } else if (totalTravel < 4000) {
        return 1.5
    } else {
        return 2
    }
}

export function scroll(el, num) {
    if (el) {
        let position
        if (el.id == "section3") {
            console.log(el.parentElement.offsetTop, el.offsetHeight)
            position = el.parentElement.offsetTop + el.offsetHeight
        } else {
            position = el.offsetTop
        }

        // setNav(num)
        gsap.to(window, { duration: calculateDuration(position), scrollTo: position, ease: "power2" })
    } else {
        gsap.to(window, { duration: calculateDuration(0), scrollTo: 0, ease: "power2" })
    }
}
