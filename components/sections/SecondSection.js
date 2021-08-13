/* eslint-disable @next/next/no-img-element */
import styles from './SecondSection.module.scss'
import gsap from 'gsap'
import { useEffect } from 'react'
import DashL from '../../public/svg/dashL.svg'
import DashR from '../../public/svg/dashR.svg'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'
// import seo from '../../public/svg/vector.png'
import Lottie from 'react-lottie'
import * as lottieData from '../../public/lottie/laptopGuy.json'

const SecondSection = ({ refs }) => {
    const lottieOption = {
        loop: true,
        autoplay: true,
        animationData: lottieData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYmid slice'
        }
    }
    useEffect(() => {
        ScrollTrigger.matchMedia({
            "(min-width:1130px)": () => scrollAnimation(),
            "(min-width:850px) and (max-width:1129px)": () => scrollAnimation("tablet"),
        })
    })
    return (
        <section className={styles.container} id='section2' >
            <div className={styles.left}>
                <div className={styles.card + ' top_cards'}>
                    <div className={styles.head}>
                        <img src='/svg/vector.png' alt="" />
                        <h3>Elegant design</h3>
                    </div>
                    <p>Bringing brands image to life
                        through website is art and i love
                        being an artist</p>
                </div>
                <div className={styles.card + ' bottom_cards'}>
                    <div className={styles.head}>
                        <img src='/svg/responsive.png' alt="" />
                        <h3>Responsive pages</h3>
                    </div>
                    <p>Mobile first approch to UI design
                        makes my layouts responsive
                        to any device</p>
                </div>
            </div>
            <div className={styles.mid}>
                <DashL className={styles.dash_path} />
                <div className={styles.iphone} id='iphone_img'>
                    <Lottie options={lottieOption} height={650} width={650} />
                </div>
                <DashR className={styles.dash_path} />
            </div>
            <div className={styles.right} id="right_card_col">
                <div className={styles.card + ' top_cards'}>
                    <div className={styles.head}>
                        <img src='/svg/search.png' alt="" />
                        <h3>Seo ready</h3>
                    </div>
                    <p>Creating  elegant design with SEO
                        ready web pages using trending
                        libraries is my priority.</p>
                </div>
                <div className={styles.card + ' bottom_cards'}>
                    <div className={styles.head}>
                        <img src='/svg/quality.png' alt="" />
                        <h3>User friendly</h3>
                    </div>
                    <p>Passionate about making every
                        UI easy to interact for better
                        UX result overall.</p>
                </div>
            </div>
        </section>
    )
}

const scrollAnimation = (screen) => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '#section2',
            start: `top ${screen == 'tablet' ? 'top+=60' : 'top'}`,
            end: '+=600',
            // markers: true,
            pin: true,
            scrub: 0.5,
            anticipatePin: 1
        }
    });
    tl.to('#iphone_img', {
        scale: .85,
        duration: 0.4,
    }, '-=1').from('.left_dash', {
        opacity: 0,
        stagger: 0.1,
        duration: 0.2,
        ease: 'power4.out'
    }, '-=1').from('.right_dash', {
        opacity: 0,
        stagger: 0.1,
        delay: -1.9,
        duration: 0.2,
        ease: 'power4.out'
    }, '-=1').from('.top_cards', {
        scale: 0.5,
        autoAlpha: 0,
        duration: 0.5,
    }, '-=0.90').from('.bottom_cards', {
        scale: 0.5,
        autoAlpha: 0,
        duration: 0.5,
    }, '-=0.30')
}
export default SecondSection
