import gsap from 'gsap'
import { useRef } from 'react'

export function distributeByPosition(vars) {
    var ease = vars.ease,
        from = vars.from || 0,
        base = vars.base || 0,
        axis = vars.axis,
        ratio = { center: 0.5, end: 1, edges: 0.5 }[from] || 0,
        distances;
    return function (i, target, a) {
        var l = a.length,
            originX, originY, x, y, d, j, minX, maxX, minY, maxY, positions;
        if (!distances) {
            distances = [];
            minX = minY = Infinity;
            maxX = maxY = -minX;
            positions = [];
            for (j = 0; j < l; j++) {
                d = a[j].getBoundingClientRect();
                x = (d.left + d.right) / 2; //based on the center of each element
                y = (d.top + d.bottom) / 2;
                if (x < minX) {
                    minX = x;
                }
                if (x > maxX) {
                    maxX = x;
                }
                if (y < minY) {
                    minY = y;
                }
                if (y > maxY) {
                    maxY = y;
                }
                positions[j] = { x: x, y: y };
            }
            originX = isNaN(from) ? minX + (maxX - minX) * ratio : positions[from].x || 0;
            originY = isNaN(from) ? minY + (maxY - minY) * ratio : positions[from].y || 0;
            maxX = 0;
            minX = Infinity;
            for (j = 0; j < l; j++) {
                x = positions[j].x - originX;
                y = originY - positions[j].y;
                distances[j] = d = !axis ? Math.sqrt(x * x + y * y) : Math.abs((axis === "y") ? y : x);
                if (d > maxX) {
                    maxX = d;
                }
                if (d < minX) {
                    minX = d;
                }
            }
            distances.max = maxX - minX;
            distances.min = minX;
            distances.v = l = (vars.amount || (vars.each * l) || 0) * (from === "edges" ? -1 : 1);
            distances.b = (l < 0) ? base - l : base;
        }
        l = (distances[i] - distances.min) / distances.max;
        return distances.b + (ease ? ease.getRatio(l) : l) * distances.v;
    };
}

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
