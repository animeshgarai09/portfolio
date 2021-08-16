import { useEffect } from 'react'
import styles from './FifthSection.module.scss'
import gsap from 'gsap'

const FifthSection = ({ refs, setActiveNav }) => {
    useEffect(() => {
        const navAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: '#section5',
                start: 'top top+=250',
                onEnter: (() => setActiveNav(4)),
            }
        })
        const navAnimationBack = gsap.timeline({
            scrollTrigger: {
                trigger: '#section5',
                start: 'bottom center',
                end: 'bottom center',
                onEnterBack: (() => setActiveNav(4)),
                // markers: true
            }
        })
    }, [])
    return (
        <section ref={(el) => refs.current.push(el)} className={styles.container} id='section5'>
            <span className={styles.shadow_T}>portfolio</span>
            <div>
                <h1>New projects are cooking.</h1>
                <h3>#staytuned</h3>
            </div>
        </section>
    )
}

export default FifthSection