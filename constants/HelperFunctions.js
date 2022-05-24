import gsap from 'gsap'
import { DiPython } from 'react-icons/di'
import { FaSass } from 'react-icons/fa'
import { FiFigma } from 'react-icons/fi'
import { DiJavascript1, DiGoogleCloudPlatform } from 'react-icons/di'
import { SiFlask, SiMaterialUi, SiAdobexd, SiCss3, SiHtml5, SiNpm, SiAdobephotoshop, SiNextDotJs, SiReact, SiRedux, SiNodeDotJs, SiAdobeillustrator, SiDjango, SiTailwindcss, SiJava } from 'react-icons/si'
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"
import { CgNpm } from "react-icons/cg"
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'

export const sectionRefs = new Array(6)
export const navRef = new Array(6)
export const mobNavRef = new Array(6)

let lastScrollPosition = 0


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

    // timeline.kill();
    for (let target of targets) {
        if (target.targets().length) {
            gsap.set(target.targets(), { clearProps: "all" })
        }
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

export const featuredProjects = [
    {
        name: "Felix UI",
        intro: "Felix UI is an open source react component library which extends as a CSS styling framework, which helps developers to use best styles and components, by using pre-defined classnames. Felix UI helps you to quickly build your dream project, by focusing much on functionality, because we take care of your designs.",
        features: ["Easy installation through NPM", "Modular components", "Highly customizable with CSS", "Beautifully designed components"],
        tech: [{
            icon: <SiReact />,
            name: "ReactJS"
        }, {
            icon: <FaSass />,
            name: "SCSS"
        }, {
            icon: <CgNpm />,
            name: "NPM"
        }, {
            name: "RollUp"
        }
        ]
    }, {
        name: "Felix Store",
        intro: "An organic groceries portal for every health conscious people out there. This shop is one stop solution for any organic need, be it fruits or plants for your beautiful garden, Felix Store has it all. ",
        features: ["Complete checkout process", "Product filter for easy access", "Engaging design", "Profile dashboard for order history",],
        tech: [{
            icon: <SiReact />,
            name: "ReactJS"
        }, {
            icon: <FaSass />,
            name: "SCSS"
        }]
    }, {
        name: "Felix TV",
        intro: "A digital content platform around farming, research documentary and gardening for those who is try to figure out how to save our green planet from global warming. Join Us!",
        features: ["Playlist management", "Integrated notes with time stamp", "Great user experience"],
        tech: [{
            icon: <SiNextDotJs />,
            name: "ReactJS"
        }, {
            icon: <DiGoogleCloudPlatform />,
            name: "SCSS"
        },]
    }, {
        name: "Felix Social",
        intro: "A social media platform inspired from instagram and twitter and mixing it to one to provide users the best of both platform. 'Share moments' - 'Connect' - 'Know the world'",
        features: ["Photo post with caption", "Follow/Unfollow users", "Comment and like posts", "Great user experience"],
        tech: [{
            icon: <SiNextDotJs />,
            name: "ReactJS"
        }, {
            icon: <SiRedux />,
            name: "Redux"
        }, {
            icon: <FaSass />,
            name: "Sass"
        }]
    }
]

export function getSkillIcon(index, data) {
    let Temp
    if (data === "Skill") {
        Temp = SkillData[index].icon
    } else {
        Temp = featuredProjects[index]?.tech[data].icon
    }
    return <Temp />
}

export function loadStars(count) {
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


export function scroll(el, screen) {
    if (el) {
        let position
        if (el.id == "section3" && !screen) {
            console.log(el.parentElement.offsetTop, el.offsetHeight)
            // position = el.getBoundingClientRect().top + (window.scrollY || window.pageYOffset) + el.offsetHeight
            position = el.parentElement.offsetTop + el.offsetHeight
        }
        else {
            position = el.getBoundingClientRect().top + window.scrollY || window.pageYOffset
        }
        lastScrollPosition = position = (lastScrollPosition > position) && screen ? position - 60 : position
        gsap.to(window, { duration: calculateDuration(position), scrollTo: position, ease: "power2" })
    } else {
        gsap.to(window, { duration: calculateDuration(0), scrollTo: 0, ease: "power2" })
    }
}

export function setActiveNav(num) {
    let activeC = 'active'
    for (let i = 0; i < 6; i++) {
        if (num == navRef[i].id && num == mobNavRef[i].id) {
            navRef[i].classList.add(activeC)
            mobNavRef[i].classList.add(activeC)
        } else if (navRef[i].classList && mobNavRef[i].classList) {
            navRef[i].classList.remove(activeC)
            mobNavRef[i].classList.remove(activeC)
        }
    }
}

const topToBottomNavTarget = ['#ab_con', '#section3', '#section4', '#section5', '#section6', '#section7']
function topToBottomNavigation(el, i) {
    gsap.utils.toArray(topToBottomNavTarget).forEach((el, i) => {

        ScrollTrigger.create({
            trigger: el,
            start: 'top top+=250',
            end: 'top top+=250',
            onEnter: (() => setActiveNav(i + 1)),
            onLeaveBack: i == 0 && (() => {
                navRef[0].removeAttribute('class')
                mobNavRef[0].removeAttribute('class')
            }),
        })
    })
}
export function desktopNavigation() {
    console.log('desktop')
    topToBottomNavigation()

    ////////////////////////////////////////////////// Intro section
    ScrollTrigger.create({
        trigger: '#section2',
        start: 'bottom center',
        end: 'bottom center',
        onEnterBack: (() => setActiveNav(1)),
        // markers: true

    })

    ////////////////////////////////////////////////// Career section
    ScrollTrigger.create({
        trigger: '#section3',
        start: 'bottom center+=100',
        onEnterBack: (() => setActiveNav(2)),
    })

    ///////////////////////////////////////////////// Skills section
    ScrollTrigger.create({
        trigger: '#section4',
        start: 'bottom center+=100',
        end: 'bottom center+=100',
        onEnterBack: (() => setActiveNav(3)),
    })

    ///////////////////////////////////////////////// Projects section
    ScrollTrigger.create({
        trigger: '#section5',
        start: 'bottom center+=100',
        end: 'bottom center+=100',
        onEnterBack: (() => setActiveNav(4)),
    })

    ///////////////////////////////////////////////// Blogs section
    ScrollTrigger.create({
        trigger: '#section6',
        start: 'bottom center+=100',
        end: 'bottom center+=100',
        onEnterBack: (() => setActiveNav(5)),
    })
}

export function mobileNavigation() {
    console.log("mobile")
    topToBottomNavigation()

    gsap.utils.toArray(topToBottomNavTarget).forEach((el, i) => {
        if (i != 5) {
            ScrollTrigger.create({
                trigger: i == 0 ? '#section2' : el,
                start: 'bottom center+=100',
                end: 'bottom center+=100',
                onEnterBack: (() => setActiveNav(i + 1)),
                // markers: true
            })
        }
    })
}