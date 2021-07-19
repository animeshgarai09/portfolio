import styles from './SecondSection.module.scss'
import gsap from 'gsap'
import { useEffect } from 'react'
import Image from 'next/image'
import iphone from '../../public/svg/iphone.png'

// import Iphone from '../../public/svg/iphone.svg'

const SecondSection = () => {
    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#section2',
                start: 'top top',
                end: '+=1500',
                markers: true,
                pin: true,
                scrub: true,

            }
        });
        tl.to('#iphone_img', {
            scale: .85,
            duration: 0.2,
        }, '-=1').from('.cards', {
            scale: 0.5,
            autoAlpha: 0,
            duration: 0.2,
        }, '-=0.95')
    })
    return (
        <section className={styles.container} id='section2' >
            <div className={styles.left}>
                <div className={styles.card + ' cards'}>
                    <p>Bringing brands image to life
                        through website is art and i love
                        being an artist</p>
                </div>
                <div className={styles.card + ' cards'}>
                    <p>Mobile first approch to UI design
                        makes my layouts responsive
                        to any device</p>
                </div>
            </div>
            <div className={styles.mid}>
                <div className={styles.iphone} id='iphone_img'>
                    <Image
                        src={iphone}
                        alt="Picture of iphone"
                        width={500}
                        height={790}
                        quality='75'
                    // unoptimized='true'
                    // className={styles.iphone}
                    />
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.card + ' cards'}>
                    <p>Creating  elegant design with SEO
                        ready web pages using trending
                        libraries is my priority.</p>
                </div>
                <div className={styles.card + ' cards'}>
                    <p>Passionate about making every
                        UI easy to interact for better
                        UX result overall.</p>
                </div>
            </div>
        </section>
    )
}

export default SecondSection
