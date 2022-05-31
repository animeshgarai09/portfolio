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
                    <a target="_blank" rel='noreferrer' href="https://drive.google.com/file/d/1UcKfuzTGRwsuNZAZ818ALsyn2T-44AnF/view?usp=sharing" id="resume">Resume</a>
                    <div className={styles.scrollDown} id="scrollDown">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                {load && <About lefRef={leftCol} />}
            </div>
            <div className={styles.right_col} id="rightCol">
                <Arrow id='arrow' className={styles.arrow} />
                <div className={styles.author_container}>
                    <Image
                        src={author}
                        alt="Picture of the author"
                        priority='true'
                        layout="fill"
                        quality='75'
                        placeholder='blur'
                        className={styles.author_image}
                        id='author_image'
                    />

                </div>
                <svg id='firstBlob' className={styles.firstBlob}>
                    <clipPath id="clip" clipPathUnits="objectBoundingBox">
                        <path d="M20.842 455.346C-29.2961 356.824 21.7411 205.399 103.458 110.067C185.176 14.7349 298.064 -24.6339 410.524 16.292C523.474 57.0891 635.623 178.852 629 298C622.262 416.606 497.358 533.011 359.077 567.59C221.169 601.499 70.6053 554.539 20.842 455.346Z" fill="#621A9A" />
                    </clipPath>
                </svg>

            </div>
        </section >
    )
}

function About({ lefRef }) {

    useEffect(() => {
        ScrollTrigger.saveStyles(['.about_animation'])
        ScrollTrigger.matchMedia({
            "(min-width:850px)": () => scrollAnimation(lefRef),
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
    }).from('#author_image', {
        transformOrigin: 'bottom',
        ease: "power3.out",
        autoAlpha: 0,
        scale: .9,
        duration: .5,
    }).to('.arr_ele', {
        duration: 0.2,
        delay: .2,
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
            start: `top top`,
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
}
export default FirstSection
