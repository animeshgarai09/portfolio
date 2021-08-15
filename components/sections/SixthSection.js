import { useEffect } from 'react'
import styles from './SixthSection.module.scss'
import gsap from 'gsap'

const SixthSection = ({ refs, setActiveNav }) => {
    useEffect(() => {
        const navAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: '#section6',
                start: 'top top+=250',
                onEnter: (() => setActiveNav(5)),
            }
        })
        const navAnimationBack = gsap.timeline({
            scrollTrigger: {
                trigger: '#section6',
                start: 'bottom top-=350px',
                onEnterBack: (() => setActiveNav(5)),
                // markers: true
            }
        })
    }, [])
    return (
        <section ref={(el) => refs.current.push(el)} className={styles.container} id='section6'>
            <span className={styles.shadow_T}>blogs</span>
        </section>
    )
}
export default SixthSection