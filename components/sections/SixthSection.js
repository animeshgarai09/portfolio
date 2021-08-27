import { useEffect } from 'react'
import styles from './SixthSection.module.scss'
import Soon from '../../public/svg/soon.svg'
import { sectionRefs } from '../../constants/HelperFunctions'
import gsap from 'gsap'

const SixthSection = () => {
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
export default SixthSection