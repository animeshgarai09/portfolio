import styles from './FirstSection.module.scss'
import Arrow from '../../public/svg/arrow.svg'
import Image from 'next/image'
import gsap from 'gsap'
import author from '../../public/author.jpeg'
import Blob from '../../public/svg/FirstBlob.svg'
import { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';
import { killTimeline } from '../../constants/HelperFunctions'


const FirstSection = ({ refs, load, navRef, setActiveNav }) => {
    const leftCol = useRef(null);

    useEffect(() => {
        // const media = window.matchMedia('(max-width:850px)')

        // function handleMatch(matches) {
        //     if (initialAnimation) {
        //         killTimeline(initialAnimation)
        //     }

        //     if (matches) {
        //         console.log("matched")
        //         return
        //     } else {
        //         console.log("not matched")
        if (localStorage.getItem('initAnimation') == null) {

            let initialAnimation = gsap.timeline()
            initialAnimation.to('#section1', .5, {
                css: { visibility: 'visible' }
            }).from('#introText', 1, {
                autoAlpha: 0,
                y: 30,
                ease: 'power4.out',
                skewX: 7,
            }).from('.introSkills', {
                autoAlpha: 0,
                x: -50,
                ease: 'power4.out',
                stagger: 0.5,
                duration: 1
            }).from('#author_image', 1, {
                transformOrigin: 'center',
                ease: "Elastic.easeOut",
                autoAlpha: 0,
                scale: 0.8
            }).to('.arr_ele', {
                duration: 0.2,
                delay: -.3,
                // opacity: 1,
                autoAlpha: 1,
                stagger: -0.03,
                ease: "expo.easeOut",
            }).from('#resume', .2, {
                autoAlpha: 0,
                transformOrigin: 'center',
                ease: 'power3.out',
            }).from('#firstBlob', .8, {
                autoAlpha: 0,
                scale: .95,
                transformOrigin: 'center',
                ease: 'Elastic.easeOut',
                delay: .7,
            }).from('#scrollDown', .2, {
                autoAlpha: 0,
                y: -50,
                transformOrigin: 'center',
                ease: 'power3.out',
            })
        } else {
            document.querySelectorAll('#introText, .introSkills,.arr_ele, #resume, #firstBlob').forEach((el) => {
                el.style.visibility = 'visible'
            })
            let initialAnimation = gsap.timeline()
            initialAnimation.from('#author_image', 1, {
                delay: .7,
                transformOrigin: 'center',
                ease: "Elastic.easeOut",
                autoAlpha: 0,
                scale: 0.7
            }).from('#scrollDown', .2, {
                autoAlpha: 0,
                y: -50,
                transformOrigin: 'center',
                ease: 'power3.out',
            })
        }
        // }
        // }

        // let initialAnimation
        // media.addListener((e) => handleMatch(e.matches));
        // handleMatch(media.matches);


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
                    <div className={styles.scrollDown} id="scrollDown">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                {load && <About navRef={navRef} setActiveNav={setActiveNav} refs={refs} lefRef={leftCol} />}
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
                    <Blob id='firstBlob' className={styles.firstBlob} />
                </div>
            </div>
        </section>
    )
}

function About({ refs, lefRef, navRef, playAnimation, setActiveNav }) {

    useEffect(() => {
        const navAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: '#ab_con',
                start: 'top top+=250',
                onEnter: (() => setActiveNav(1)),
                onLeaveBack: (() => navRef.removeAttribute('class'))
            }
        })
        const navAnimationBack = gsap.timeline({
            scrollTrigger: {
                trigger: '#iphone_img',
                start: 'bottom top-=350px',
                end: 'bottom top-=350px',
                onEnterBack: (() => setActiveNav(1)),
            }
        })

        ScrollTrigger.matchMedia({
            "(min-width:1130px)": () => scrollAnimation(lefRef),
            "(min-width:850px) and (max-width:1129px)": () => scrollAnimation(lefRef, "tablet"),
        })

    }, [])
    return (
        <div ref={(el) => refs.current.push(el)} className={styles.about_con} id='ab_con'>
            <span className={styles.shadow_T} >about</span>
            <p className={styles.title + ' about_animation'}>I&apos;m a front-end developer and UI designer
                from the city of joy Kolkata, India.</p>
            <blockquote className={styles.quote + ' about_animation'}>I enjoy the challenge of creating something new from scartch, and that&apos;s drive me to push my creative imagination</blockquote>
        </div>
    )
}

function scrollAnimation(lefRef, screen) {
    console.log(screen)
    // gsap
    gsap.to('#scrollDown', {
        opacity: 0,
        scrollTrigger: {
            trigger: '#scrollDown',
            scrub: true,
            start: 'top+=70 bottom-=100',
            // duration: .2,
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
            scrub: 0.5,
        }
    })
    scrollAnimation.to('.arr_ele', {
        duration: 0.5,
        // opacity: 0,
        autoAlpha: 0,
        stagger: 0.05,
        scrollTrigger: {
            scrub: 0.5,
            end: '+=200',
        },
        ease: "power2.in",
    }).from('.about_animation', {
        opacity: 0,
        scale: .5,
        x: -100,
        stagger: 0.3,
        scrollTrigger: {
            trigger: '#ab_con',
            start: 'top center',

            end: 'center center',
            scrub: 0.5,

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
                scrub: 0.5,
            }
        })
    }
}
export default FirstSection
