import styles from './FirstSection.module.scss'
import Arrow from '../../public/svg/arrow.svg'
import Image from 'next/image'
import gsap from 'gsap'
import author from '../../public/png/author.png'
import { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'
import { sectionRefs } from '../../constants/HelperFunctions'

const FirstSection = ({ load }) => {
    const leftCol = useRef(null);
    useEffect(() => {
        const media = window.matchMedia('(max-width:850px)')

        if (media.matches) {
            initAnimation()
        } else {
            mbInitAnimation()
        }
    }, [])

    return (
        <section className={styles.container} id='section1' style={{ marginBottom: load ? '8em' : '0' }}>
            <div ref={leftCol} className={styles.left_col} id="leftCol">
                <div className={styles.intro_con}>
                    <span className={styles.shadow_T}>intro</span>
                    <h1 id="introText">Hi, I am <span>Animesh</span></h1>

                    <h3 className='introSkills'>Front-end Developer</h3>
                    <h3 className='introSkills'>Graphic Creator</h3>
                    <h3 className='introSkills'>UI Designer</h3>
                    <a href="#" id="resume">Resume</a>
                    {/* <Link href="certificates"><a>Certi</a></Link> */}
                    <div className={styles.scrollDown} id="scrollDown">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                {load && <About lefRef={leftCol} />}
            </div>
            <div className={styles.right_col} id="rightCol">
                <div className={styles.sub_con}>
                    <Arrow id='arrow' className={styles.arrow} />
                    <div className={styles.author_container}>
                        <Image
                            src={author}
                            alt="Picture of the author"
                            priority='true'
                            layout="fill"
                            // height={500}
                            // width={500}
                            quality='75'
                            placeholder='blur'
                            className={styles.author_image}
                            id='author_image'
                        />

                    </div>
                    {/* <Blob id='firstBlob' className={styles.firstBlob} /> */}
                    <svg id='firstBlob' clipPathUnits="objectBoundingBox" className={styles.firstBlob} >
                        <clipPath id="clip">
                            <path
                                d="M20.6887 455.127C-29.4495 356.605 21.5877 205.18 103.305 109.848C185.022 14.5158 297.911 -24.853 410.371 16.0729C523.321 56.8699 635.47 178.633 628.847 297.781C622.109 416.387 497.205 532.792 358.924 567.371C221.016 601.28 70.452 554.32 20.6887 455.127Z"
                                fill="none" />
                        </clipPath>
                        <g filter="url(#filter0_i)">
                            <path
                                d="M20.6887 455.127C-29.4495 356.605 21.5877 205.18 103.305 109.848C185.022 14.5158 297.911 -24.853 410.371 16.0729C523.321 56.8699 635.47 178.633 628.847 297.781C622.109 416.387 497.205 532.792 358.924 567.371C221.016 601.28 70.452 554.32 20.6887 455.127Z"
                            />
                        </g>
                        <defs>
                            <filter id="filter0_i" x="-29.1875" y="0" width="658.314" height="582.314" filterUnits="userSpaceOnUse"
                                colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    result="hardAlpha" />
                                <feOffset dx="-30" dy="4" />
                                <feGaussianBlur stdDeviation="25.5" />
                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
                            </filter>
                        </defs>

                    </svg>
                </div>
            </div>
        </section>
    )
}

function About({ lefRef }) {

    useEffect(() => {
        ScrollTrigger.saveStyles(['.about_animation'])
        ScrollTrigger.matchMedia({
            "(min-width:1130px)": () => scrollAnimation(lefRef),
            "(min-width:850px) and (max-width:1129px)": () => scrollAnimation(lefRef, "tablet"),
            "(max-width:849px)": () => mbScrollAnimation(),
        })

    }, [])
    return (
        <div ref={(el) => sectionRefs[0] = el} className={styles.about_con} id='ab_con'>
            <span className={styles.shadow_T} >about</span>
            <p className={styles.title + ' about_animation'}>I&apos;m a front-end developer and UI designer
                from the city of joy Kolkata, India.</p>
            <blockquote className={styles.quote + ' about_animation'}>I enjoy the challenge of creating something new from scartch, and that&apos;s drive me to push my creative imagination</blockquote>
        </div>
    )
}



function initAnimation() {
    let initialAnimation = gsap.timeline()
    initialAnimation.set('#leftCol', { y: -200, })
    initialAnimation.from('#introText', 1, {
        autoAlpha: 0,
        y: 30,
        ease: 'power4.out',
        skewX: 7,
    }).from('.introSkills', {
        autoAlpha: 0,
        y: -20,
        ease: 'power4.out',
        stagger: 0.5,
        duration: 1
    }).from('#firstBlob', {
        autoAlpha: 0,
        ease: 'expo.easeOut',
        duration: .4,
        // delay: -.1,
    }).from('#author_image', {
        transformOrigin: 'bottom',
        ease: "expo.easeOut",
        autoAlpha: 0,
        scale: .9,
        yPercent: 20,
        delay: -1,
        duration: .5,
    }).to('#leftCol', {
        y: 0,
        delay: -1,
        ease: "power4.out"
    }).from('#resume', .4, {
        y: -20,
        autoAlpha: 0,
        transformOrigin: 'center',
        ease: 'power3.out',
    }).from('#scrollDown', .2, {
        autoAlpha: 0,
        y: -30,
        transformOrigin: 'center',
        ease: 'power3.out',
    })
}


function mbInitAnimation() {
    let initialAnimation = gsap.timeline()
    initialAnimation.to('#section1', .5, {
        css: { visibility: 'visible' }
    }).from('#introText', {
        duration: 1,
        autoAlpha: 0,
        y: 30,
        ease: 'power4.out',
        skewX: 15,
    }).from('.introSkills', {
        autoAlpha: 0,
        x: -50,
        ease: 'power4.out',
        stagger: 0.5,
        duration: 1
    }).from('#firstBlob', {
        autoAlpha: 0,
        ease: 'expo.easeOut',
        duration: .4,
        // delay: -.1,
    }).from('#author_image', {
        transformOrigin: 'bottom',
        ease: "power3.out",
        autoAlpha: 0,
        scale: .9,
        duration: .5,
    }).to('.arr_ele', {
        duration: 0.2,
        delay: .2,
        // opacity: 1,
        autoAlpha: 1,
        stagger: -0.03,
        ease: "power4.out",
    }).from('#resume', .2, {
        autoAlpha: 0,
        transformOrigin: 'center',
        ease: 'power3.out',
    }).from('#scrollDown', .2, {
        autoAlpha: 0,
        y: -50,
        transformOrigin: 'center',
        ease: 'power3.out',
    })
}

function scrollAnimation(lefRef, screen) {
    gsap.to('#scrollDown', {
        opacity: 0,
        scrollTrigger: {
            trigger: '#scrollDown',
            scrub: true,
            start: 'top+=70 bottom-=100',
            end: '+=50',
            onLeaveBack: () => document.querySelector('#scrollDown').style.opacity = 1,
        }
    })
    const scrollAnimation = gsap.timeline({
        scrollTrigger: {
            trigger: '#rightCol',
            start: `top ${screen == 'tablet' ? 'top+=90' : 'top'}`,
            end: `+=${lefRef.current.offsetHeight} bottom`,
            pin: true,
            scrub: 1,
        }
    })
    scrollAnimation.to('.arr_ele', {
        duration: 0.5,
        autoAlpha: 0,
        stagger: 0.05,
        scrollTrigger: {
            scrub: 1,
            end: '+=200',
        },
        ease: "power2.in",
    }).from('.about_animation', {
        autoAlpha: 0,
        scale: .5,
        x: -100,
        stagger: 0.3,
        scrollTrigger: {
            trigger: '#ab_con',
            start: 'top center',

            end: 'center center',
            scrub: 1,

        }
    })
    if (screen != 'tablet') {
        scrollAnimation.to('#links', {
            x: '300px',
            autoAlpha: 0,
            ease: 'power3.inOut',
            scrollTrigger: {
                trigger: '#section1',
                start: 'bottom bottom',

                end: '+=100',
                scrub: 1,
            }
        })
    }
    return scrollAnimation
}


function mbScrollAnimation() {
    const scrollAnimation = gsap.timeline()
    scrollAnimation.from('.about_animation', {
        autoAlpha: 0,
        scale: .8,
        yPercent: 50,
        stagger: 0.3,
        ease: 'power3.easeOut',
        scrollTrigger: {
            trigger: '#ab_con',
            start: 'top bottom-=250',
            end: 'center bottom-=250',
            scrub: 1,
        }
    })
    return scrollAnimation
}
export default FirstSection
