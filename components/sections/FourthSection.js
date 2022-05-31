import styles from './FourthSection.module.scss'
import skillCSS from '../Skills/Skills.module.scss'
import { distributeByPosition, SkillData, loadStars, sectionRefs } from '../../constants/HelperFunctions'
import Skills from '../Skills'
import { useEffect, useState } from 'react';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'

const FourthSection = () => {
    const [skillInfo, setSkillInfo] = useState({
        name: "React JS",
        info: "Powerful modern frontend framework for building single page application",
        stars: "4.5",
        ex: "2 years building and debugging",
    })
    useEffect(() => {
        const skillClickTimeline = skillClickAnimation()
        const skillClass = skillCSS.skill_item
        let skills = document.querySelectorAll(`.${skillClass}`)
        const activeClass = skillCSS.active

        skills.forEach((el) => {
            el.addEventListener('click', function () {
                if (!this.classList.contains(activeClass)) {
                    let check = document.querySelector(`.${skillClass}.${activeClass}`)
                    check && check.classList.remove(activeClass)
                    this.classList.add(activeClass)
                    const index = el.getAttribute('data-index')
                    skillClickTimeline.play()
                    setTimeout(() => {
                        setSkillInfo(SkillData[index])
                        skillClickTimeline.reverse()
                    }, 300)
                }
            })
        })

        ScrollTrigger.matchMedia({
            "(min-width:1131px)": () => scrollAnimation(),
            // ToDo for different screen size animations
            // "(min-width:850px) and (max-width:1130px)": () => scrollAnimation("tablet"),
            // "(max-width:849px)": () => mbScrollAnimation(),
        })
    }, [])


    return (
        <section ref={(el) => sectionRefs[2] = el} className={styles.container} >
            <span className={styles.shadow_T}>skills</span>
            <div className={styles.col}>
                <div className={styles.text}>
                    <h2>{skillInfo.name}</h2>
                    <span className={styles.border}></span>
                    <p>{skillInfo.info}</p>
                    <div className={styles.info}>
                        <div className={styles.stars}>
                            <label>Confidence:</label>
                            <span className='star_con'>
                                {loadStars(skillInfo.stars)}
                            </span>
                        </div>
                        <div>
                            <label>Experience:</label>
                            <span className={styles.ex}>{skillInfo.ex}</span>
                        </div>
                    </div>
                    <span className={styles.tag}>growing more</span>
                </div>
                <Skills />
            </div>

        </section>
    )
}

function skillClickAnimation() {
    const tl = gsap.timeline({ paused: true })
    tl.to(`.${styles.text} h2,
        .${styles.text} p,
        .${styles.ex},
        .star_con`, {
        yPercent: 20,
        autoAlpha: 0,
        duration: .3,
        ease: 'power4.out'
    })
    return tl
}

function scrollAnimation() {

    const skillClass = skillCSS.skill_item
    let activeSkill
    gsap.set(`.${styles.text} h2,
         .${styles.border},
        .${styles.text} p,
        .${styles.info},
        .${styles.tag}`,
        { autoAlpha: 0, yPercent: -20 })
    const tl = gsap.timeline({}).from(`.${skillClass}`, {
        duration: 2,
        autoAlpha: 0,
        scale: 0.1,
        ease: 'power3.inOut',
        stagger: distributeByPosition({
            each: 0.2,
            from: 8,
        }),
        onComplete: () => {
            if (activeSkill) {
                activeSkill.classList.add(skillCSS.active)
            } else {
                document.querySelectorAll(`.${skillClass}`)[8].classList.add(skillCSS.active)
            }
        },
        scrollTrigger: {
            trigger: '#section4',
            start: "top top+=80",
            end: "+=50",
            scrub: true,
            onEnter: () => {
                activeSkill = document.querySelector(`.${skillClass}.${skillCSS.active}`)
                activeSkill && activeSkill.classList.remove(skillCSS.active)
            }
        }

    }).to(`.${styles.text} h2,
         .${styles.border},
        .${styles.text} p,
        .${styles.info},
        .${styles.tag}`, {
        yPercent: 0,
        autoAlpha: 1,
        stagger: 0.2,
        scrollTrigger: {
            trigger: '#section4',
            start: "top top+=250",
            end: "top top",
            scrub: true,
        }
    })
}


export default FourthSection
