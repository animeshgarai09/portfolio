import gsap from 'gsap'
import { useRef } from 'react'
import { DiPython } from 'react-icons/di'
import { FaSass } from 'react-icons/fa'
import { FiFigma } from 'react-icons/fi'
import { DiJavascript1 } from 'react-icons/di'
import { SiFlask, SiMaterialUi, SiAdobexd, SiCss3, SiHtml5, SiAdobephotoshop, SiNextDotJs, SiReact, SiRedux, SiNodeDotJs, SiAdobeillustrator, SiDjango, SiTailwindcss, SiJava } from 'react-icons/si'
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

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
        } else if (el.id == "section4") {
            position = el.parentElement.offsetTop + 60
        } else {
            position = el.offsetTop
        }

        // setNav(num)
        gsap.to(window, { duration: calculateDuration(position), scrollTo: position, ease: "power2" })
    } else {
        gsap.to(window, { duration: calculateDuration(0), scrollTo: 0, ease: "power2" })
    }
}

export const SkillData = {
    0: {
        icon: DiPython,
        name: 'Python',
        info: 'Powerful modern frontend framework for building single page application',
        stars: "3",
        ex: "1 year of AI ML experiments",
    },
    1: {
        icon: FaSass,
        name: 'Sass',
        info: 'Powerful modern frontend framework for building single page application',
        stars: "4",
        ex: "3 years of easy styling",
    },
    2: {
        icon: SiFlask,
        name: 'Flask',
        info: 'Powerful modern frontend framework for building single page application',
        stars: "3",
        ex: "2 years of building and debugging",
    },
    3: {
        icon: SiAdobexd,
        name: 'Adobe XD',
        info: 'Powerful modern frontend framework for building single page application',
        stars: "4",
        ex: "2 years of layout design and prototyping",
    },
    4: {
        icon: SiHtml5,
        name: 'HTML 5',
        info: 'Powerful modern frontend framework for building single page application',
        stars: "4.5",
        ex: "6 years of structuring web pages",
    },
    5: {
        icon: SiCss3,
        name: 'CSS 3',
        info: 'Powerful modern frontend framework for building single page application',
        stars: "4.5",
        ex: "6 years of styling and designing",
    },
    6: {
        icon: SiAdobephotoshop,
        name: 'Photoshop',
        info: 'Powerful modern frontend framework for building single page application',
        stars: "3",
        ex: "2 years of graphic designing",
    },
    7: {
        icon: SiNextDotJs,
        name: 'Next.js',
        info: 'Powerful modern frontend framework for building single page application',
        stars: "4",
        ex: "1 year of building and debugging",
    },
    8: {
        icon: SiReact,
        name: 'React.js',
        info: 'Powerful modern frontend framework for building single page application',
        stars: "4.5",
        ex: "2 years of building and debugging",
    },
    9: {
        icon: SiRedux,
        name: 'Redux',
        info: 'Powerful modern frontend framework for building single page application',
        stars: "4.5",
        ex: "2 years of building and debugging",
    },
    10: {
        icon: FiFigma,
        name: 'Figma',
        info: 'Powerful modern frontend framework for building single page application',
        stars: "4",
        ex: "2 years of layout design and prototyping",
    },
    11: {
        icon: DiJavascript1,
        name: 'Javascript',
        info: 'Powerful modern frontend framework for building single page application',
        stars: "4.5",
        ex: "6 years of building and debugging",
    },
    12: {
        icon: SiNodeDotJs,
        name: 'Node.js',
        info: 'Powerful modern frontend framework for building single page application',
        stars: "4",
        ex: "2 years of building and debugging",
    },
    13: {
        icon: SiAdobeillustrator,
        name: 'Illustrator',
        info: 'Powerful modern frontend framework for building single page application',
        stars: "3.5",
        ex: "2 years of graphic designing",
    },
    14: {
        icon: SiDjango,
        name: 'Django',
        info: 'Powerful modern frontend framework for building single page application',
        stars: "2.5",
        ex: "8 months of building one project",
    },
    15: {
        icon: SiTailwindcss,
        name: 'Tailwind CSS',
        info: 'Powerful modern frontend framework for building single page application',
        stars: "4",
        ex: "1 year of web designing",
    },
    16: {
        icon: SiMaterialUi,
        name: 'Material UI',
        info: 'Powerful modern frontend framework for building single page application',
        stars: "3.5",
        ex: "5 months of UI project",
    },
}

export function getSkillIcon(index) {
    let Temp = SkillData[index].icon
    return <Temp />
}

export const loadStars = (count) => {
    let split = count.split('.')
    let blank = split.length == 2 ? 4 - parseInt(split[0]) : 5 - parseInt(split[0])
    let arr = []
    let i = 0;
    while (i < split[0]) {
        arr.push(<FaStar key={i} size={15} />)
        i++
    }
    if (split.length == 2) {
        arr.push(<FaStarHalfAlt key={7} size={15} />)
    }
    i = 0
    while (i < blank) {
        arr.push(<FaRegStar key={10 + i} size={15} />)
        i++
    }
    return arr
}
