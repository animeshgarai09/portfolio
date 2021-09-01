import { useEffect } from 'react'
import styles from './FifthSection.module.scss'
import Soon from '../../public/svg/soon.svg'
import { sectionRefs } from '../../constants/HelperFunctions'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'

const FifthSection = () => {
    // useEffect(() => {
    //     ScrollTrigger.matchMedia({
    //         "(min-width:1131px)": () => scrollAnimation(),
    //         "(max-width:849px)": () => scrollAnimation(),
    //     })
    // }, [])
    return (
        <section ref={(el) => sectionRefs[3] = el} className={styles.container} id='section5'>
            <span className={styles.shadow_T}>projects</span>
            <div className={styles.con}>
                <Soon />
                <div>
                    <h3>New projects are on</h3>
                    <h1>the way</h1>
                </div>
            </div>
        </section>
    )
}

export default FifthSection