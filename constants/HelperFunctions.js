import gsap from 'gsap'

export function killTimeline(timeline) {
    const targets = timeline.getChildren()

    timeline.kill();
    for (let target of targets) {
        if (target.targets().length) {
            gsap.set(target.targets(), { clearProps: "all" })
        }
    }
}