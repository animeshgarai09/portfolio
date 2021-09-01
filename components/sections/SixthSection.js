import { useEffect } from 'react'
import styles from './SixthSection.module.scss'
import Soon from '../../public/svg/soon.svg'
import { sectionRefs } from '../../constants/HelperFunctions'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'

const SixthSection = () => {
    // useEffect(() => {
    //     ScrollTrigger.matchMedia({
    //         "(min-width:1131px)": () => scrollAnimation(),
    //         "(max-width:849px)": () => scrollAnimation(),
    //     })
    // }, [])
    return (
        <section ref={(el) => sectionRefs[4] = el} className={styles.container} id='section6'>
            <span className={styles.shadow_T}>blogs</span>
            <div className={styles.con}>
                <Soon />
                <div>
                    <h3>New blogs are on</h3>
                    <h1>the way</h1>
                </div>
            </div>
        </section>
    )
}

// function scrollAnimation() {

// }
export default SixthSection