import { useEffect } from 'react'
import styles from './FifthSection.module.scss'
import Soon from '../../public/svg/soon.svg'
import { sectionRefs, featuredProjects } from '../../constants/HelperFunctions'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'
import ProjectCard from '../ProjectCard'
const FifthSection = () => {
    // useEffect(() => {
    //     ScrollTrigger.matchMedia({
    //         "(min-width:1131px)": () => scrollAnimation(),
    //         "(max-width:849px)": () => scrollAnimation(),
    //     })
    // }, [])
    console.log(featuredProjects[0])
    return (
        <section ref={(el) => sectionRefs[3] = el} className={styles.container} id='section5'>
            <span className={styles.shadow_T}>projects</span>
            <div className={styles.con}>
                <ProjectCard info={featuredProjects[0]} index={1} />
                <ProjectCard info={featuredProjects[0]} index={2} layout="jkh" />
                <ProjectCard info={featuredProjects[0]} index={3} />
                <div className={styles.counter}>
                    <div className={styles.left_col}>
                        <span>09 <span>Total projects</span></span>
                    </div>
                    <button>View all projects</button>
                </div>
            </div>


        </section>
    )
}

export default FifthSection