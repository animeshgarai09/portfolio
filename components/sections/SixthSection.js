import { useEffect } from 'react'
import styles from './SixthSection.module.scss'
import { sectionRefs } from '../../constants/HelperFunctions'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'
import BlogCard from '../BlogCard/BlogCard'
const SixthSection = () => {
    useEffect(() => {
        ScrollTrigger.matchMedia({
            "(min-width:1131px)": () => scrollAnimation(),
            // "(max-width:849px)": () => scrollAnimation(),
        })
    }, [])
    return (
        <section ref={(el) => sectionRefs[4] = el} className={styles.container} id='section6'>
            <span className={styles.shadow_T}>blogs</span>
            <div className={styles.con}>

                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>
        </section>
    )
}

function scrollAnimation() {
    // const tl = gsap.from(`#${id} .${first}`, {
    //     autoAlpha: 0,
    //     xPercent: -5,
    //     duration: .5,
    //     scrollTrigger: {
    //         trigger: `#${id}`,
    //         start: 'top center',
    //         end: '+=70',
    //         toggleActions: "play none none reverse",
    //         preventOverlaps: true,
    //         fastScrollEnd: true,
    //     }
    // })
}
export default SixthSection