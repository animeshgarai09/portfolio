import styles from './SecondSection.module.scss'
import gsap from 'gsap'
import { useEffect } from 'react'
import Image from 'next/image'
import iphone from '../../public/svg/iphone.png'
import DashL from '../../public/svg/dashL.svg'
import DashR from '../../public/svg/dashR.svg'
// import Iphone from '../../public/svg/iphone.svg'

const SecondSection = () => {
    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#section2',
                start: 'top top',
                end: '+=800',
                // markers: true,
                pin: true,
                scrub: true,

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
    })
    return (
        <section className={styles.container} id='section2' >
            <div className={styles.left}>
                <div className={styles.card + ' top_cards'}>
                    <p>Bringing brands image to life
                        through website is art and i love
                        being an artist</p>
                </div>
                <div className={styles.card + ' bottom_cards'}>
                    <p>Mobile first approch to UI design
                        makes my layouts responsive
                        to any device</p>
                </div>
            </div>
            <div className={styles.mid}>
                <DashL className={styles.dash_path} />
                <div className={styles.iphone} id='iphone_img'>
                    <Image
                        src={iphone}
                        alt="Picture of iphone"
                        width={410}
                        height={650}
                        quality='75'
                    // unoptimized='true'
                    // className={styles.iphone}
                    />
                </div>
                <DashR className={styles.dash_path} />
            </div>
            <div className={styles.right}>
                <div className={styles.card + ' top_cards'}>
                    <p>Creating  elegant design with SEO
                        ready web pages using trending
                        libraries is my priority.</p>
                </div>
                <div className={styles.card + ' bottom_cards'}>
                    <p>Passionate about making every
                        UI easy to interact for better
                        UX result overall.</p>
                </div>
            </div>
        </section>
    )
}

export default SecondSection
