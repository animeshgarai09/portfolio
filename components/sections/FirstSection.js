import styles from './FirstSection.module.scss'
import { Intro_name, Intro_img, Intro_skills } from '../../constants/_animationDuration'
import Arrow from '../../public/svg/arrow.svg'
import Image from 'next/image'
import { Tween, Timeline } from 'react-gsap'
import gsap from 'gsap'
import author from '../../public/author.jpeg'
import Blob from '../../public/svg/FirstBlob.svg'
import { useEffect } from 'react'

// import { CSSRulePlugin } from "gsap/dist/CSSRulePlugin.js";


const FirstSection = () => {
    // gsap.registerPlugin(CSSRulePlugin);

    useEffect(() => {

        const tl = gsap.timeline()

        tl.to('.con', 1, { css: { visibility: 'visible' } }).from('.author_image', Intro_img.duration, {
            ease: "power4.out",
            delay: Intro_img.delay - 1,
            autoAlpha: 0,
            skewX: 10
        }).to('.arrow', 1, {
            opacity: 1,
            delay: -.6,
            ease: "elastic.out(1,0.3)",
        })
    }, [])

    return (
        <div className={`${styles.container} ${'con'}`}>

            <div className={styles.left_col}>
                <Tween

                    from={{
                        opacity: 0,
                        y: 70,
                        ease: 'power4.out',
                        delay: Intro_name.delay,
                        skewY: 7,

                        // stagger: { amount: 0.8 },
                    }}
                    // stagger={.5}
                    duration={Intro_name.duration}>

                    <h1>Hi, I am <span>Animesh</span></h1>
                </Tween>

                <Tween
                    from={{ opacity: 0, x: -100, delay: Intro_skills.delay, ease: 'power4.out' }}
                    stagger={1}
                    duration={Intro_skills.duration}>

                    <h3>Front-end Developer</h3>
                    <h3>Graphic Creator</h3>
                    <h3>UI Designer</h3>
                </Tween>
            </div>
            <div className={styles.right_col}>

                <Arrow />
                <div className={styles.author_container}>
                    <Image
                        src={author}
                        alt="Picture of the author"
                        priority='true'
                        height={500}
                        width={500}
                        quality='100'
                        unoptimized='true'
                        className='author_image' //style in global
                    />
                </div>
            </div>
            <Blob />
        </div>
    )
}

export default FirstSection
