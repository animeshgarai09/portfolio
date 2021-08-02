import styles from './FourthSection.module.scss'
import Skills from '../../public/svg/skills.svg'
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { useEffect, useState } from 'react';
import gsap from 'gsap'
const FourthSection = ({ refs, setActiveNav }) => {
    const [state, setState] = useState({
        title: "React JS",
        info: "Powerful modern frontend framework for building single page application",
        stars: "4.5",
        ex: "2 years",
        tag: "building and debugging"
    })
    useEffect(() => {
        let skills = document.querySelectorAll('.svg_skill')
        skills.forEach((el) => {
            el.addEventListener('click', function () {
                document.querySelector('.svg_skill.active').classList.remove('active')
                this.classList.add('active')
                setState({
                    title: this.getAttribute('data-title'),
                    info: this.getAttribute('data-info'),
                    stars: this.getAttribute('data-stars'),
                    ex: this.getAttribute('data-ex'),
                    tag: this.getAttribute('data-tag')
                })

            })
        })

        const navAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: '#section4',
                start: 'bottom top+=150',
                onEnter: (() => setActiveNav(3)),
                // markers: true
            }
        })
        const navAnimationBack = gsap.timeline({
            scrollTrigger: {
                trigger: '#section4',
                // start: 'bottom top-=350px',
                start: 'bottom top',
                // onEnterBack: (() => setActiveNav(3)),
                // markers: true
            }
        })

    }, [])

    const stars = (count) => {
        let split = count.split('.')
        let blank = split.length == 2 ? 4 - parseInt(split[0]) : 5 - parseInt(split[0])
        let arr = []
        let i = 0;
        while (i < split[0]) {
            arr.push(<FaStar key={i} size={20} />)
            i++
        }
        if (split.length == 2) {
            arr.push(<FaStarHalfAlt key={7} size={20} />)
        }
        i = 0
        while (i < blank) {
            arr.push(<FaRegStar key={10 + i} size={20} />)
            i++
        }
        return arr
    }
    return (
        <section ref={(el) => refs.current.push(el)} className={styles.container} id="section4">
            <span className={styles.shadow_T}>skills</span>
            <div className={styles.col}>
                <div className={styles.text}>
                    <h2>{state.title}</h2>
                    <span className={styles.border}></span>
                    <p>{state.info}</p>
                    <div className={styles.info}>
                        <span className={styles.stars}>
                            {stars(state.stars)}
                        </span>
                        <span className={styles.ex}><strong>{state.ex}</strong> of {state.tag}</span>
                    </div>
                    <span className={styles.tag}>growing more</span>
                </div>
                <div className={styles.skills_con}>
                    <Skills />
                </div>
            </div>

        </section>
    )
}



export default FourthSection
