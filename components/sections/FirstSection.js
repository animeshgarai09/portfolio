import styles from './FirstSection.module.scss'
import Arrow from '../../public/svg/arrow.svg'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';
import author from '../../public/author.jpeg'
import Blob from '../../public/svg/FirstBlob.svg'
import { useEffect, useRef } from 'react'
gsap.registerPlugin(ScrollTrigger);
const FirstSection = ({ trigger, load }) => {
    const leftCol = useRef(null);
    const blob = useRef(null);

    useEffect(() => {
        // setTimeout(() => {
        //     document.body.style.overflowY = 'overlay';
        // }, 6400);


        const initialAnimation = gsap.timeline()

        initialAnimation.to('#section1', .5, {
            css: { visibility: 'visible' }
        }).from('#introText', 1, {
            autoAlpha: 0,
            y: 30,
            ease: 'power4.out',
            skewX: 7,
        }).from('.author_image', 1.2, {
            transformOrigin: 'center',
            ease: "back.out(1)",
            autoAlpha: 0,
            scale: 0.3
        }).to('.arr_ele', {
            duration: 0.5,
            delay: -.5,
            opacity: 1,
            stagger: -0.05,
            ease: "elastic.out(1,0.3)",
        }).from('.introSkills', {
            opacity: 0,
            x: -100,
            ease: 'power4.out',
            stagger: 0.5,
            duration: 2
        }).from('#firstBlob', .6, {
            opacity: 0,
            scale: 0,
            transformOrigin: 'center',
            ease: 'power3.out',
        })
        // })
        // trigger.refresh();

    }, [])

    return (
        <section className={styles.container} id='section1' data-scroll-section>
            <div ref={leftCol} className={styles.left_col} id="leftCol">
                <div className={styles.intro_con}>
                    <span className={styles.shadow_T}>intro</span>
                    <h1 id="introText">Hi, I am <span>Animesh</span></h1>

                    <h3 className='introSkills'>Front-end Developer</h3>
                    <h3 className='introSkills'>Graphic Creator</h3>
                    <h3 className='introSkills'>UI Designer</h3>
                </div>
                {load && <About trigger={trigger} lefRef={leftCol} />}
            </div>
            <div className={styles.right_col} id="rightCol">

                <Arrow id='arrow' className={styles.arrow} />
                <div className={styles.author_container}>
                    <Image
                        src={author}
                        alt="Picture of the author"
                        priority='true'
                        height={500}
                        width={500}
                        quality='75'
                        // unoptimized='true'
                        className='author_image' //style in global
                    />
                </div>
                <Blob id='firstBlob' className={styles.firstBlob} />

            </div>
        </section>
    )
}

function About({ trigger, lefRef }) {
    useEffect(() => {
        setTimeout(() => {

            const scrollAnimation = gsap.timeline({
                scrollTrigger: {
                    trigger: '#rightCol',
                    scroller: '#main',
                    start: 'top top',
                    end: `+=${lefRef.current.offsetHeight} bottom`,
                    pin: true,
                    // markers: true,
                    scrub: true,
                }
            })
            scrollAnimation.to('.arr_ele', {
                duration: 0.5,
                opacity: 0,
                stagger: 0.05,
                scrollTrigger: {
                    scrub: true,
                    end: '+=200',
                    scroller: '#main',

                    onEnterBack: (() => console.log('enter')),
                    onLeaveBack: (() => {
                        console.log('leave')
                        document.querySelector('#arr_head').style.opacity = 1
                    })
                },
                ease: "elastic.out(1,0.3)",
            }).from('.about_animation', {
                opacity: 0,
                scale: .5,
                x: -100,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: '#ab_con',
                    start: 'top center',
                    scroller: '#main',

                    end: 'center center',
                    scrub: true
                }
            }).to('#links', {
                x: '300px',
                autoAlpha: 0,
                ease: 'power3.inOut',
                scrollTrigger: {
                    trigger: '#section1',
                    start: 'bottom bottom',
                    scroller: '#main',

                    end: '+=100',
                    // markers: true,
                    scrub: true,
                }
            })
            ScrollTrigger.refresh();
        }, 6400);

    })
    return (
        <div className={styles.about_con} id='ab_con'>
            <span className={styles.shadow_T}>about</span>
            <p className={styles.title + ' about_animation'}>I&apos;m a front-end developer and UI designer
                from the city of joy Kolkata, India.</p>
            <blockquote className={styles.quote + ' about_animation'}>I enjoy the challenge of creating something new from scartch, and that&apos;s drive me to push my creative imagination</blockquote>
        </div>
    )
}

export default FirstSection
