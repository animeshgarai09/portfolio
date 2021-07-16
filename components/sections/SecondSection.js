import styles from './SecondSection.module.scss'
import gsap from 'gsap'
import { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';


const SecondSection = () => {
    useEffect(() => {
        const tl = gsap.timeline();
        tl.to('#section2', {
            autoAlpha: 1,
            scrollTrigger: {
                trigger: '#section2',
                start: 'top top ',
                end: 'center top+=100',
                // markers: true,
                pin: true,
                scrub: true,

            }
        })
        ScrollTrigger.update();
    })
    return (
        <section className={styles.container} id='section2' name='about' data-scroll-section>
            <div className={styles.heading_con}>
                <div className={styles.con}>
                    <h1>about</h1>
                    <p> I'm a front-end developer and UI designer
                        from the city of joy Kolkata, India.
                    </p>
                </div>
            </div>
            <div className={styles.slider_con}>
                <div className={styles.left}>

                </div>
                <div className={styles.right}>
                    <p>Bringing brands image to life
                        through website is art and i love
                        being an artist</p>
                    <p>Creating  elegant design with SEO
                        ready web pages using trending
                        libraries is my priority.</p>
                </div>
            </div>
        </section>
    )
}

export default SecondSection
