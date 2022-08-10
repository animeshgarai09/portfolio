import styles from './ProjectCard.module.scss'
import Image from 'next/image'
import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'

const ProjectCard = ({ info, index, layout, id }) => {

    useEffect(() => {
        ScrollTrigger.saveStyles([`${id}`])
        ScrollTrigger.matchMedia({
            "(min-width:1131px)": () => scrollAnimation(id, layout),
            "(max-width:849px)": () => mbScrollAnimation(id),
        })
    }, [])
    return (
        <div className={styles.card_con + " " + (layout && styles.switch)} id={id}>
            <div className={styles.left_col}>
                <div className={styles.header}>
                    <div>
                        <h5>Featured project</h5>
                        <h2>{info.name}</h2>
                    </div>
                    <h1>0{index}.</h1>
                </div>
                <div className={styles.intro_con}>
                    <p>{info.intro}</p>
                </div>
                <div className={styles.feature_con}>
                    {info.features.map((item, i) => (
                        <span key={i} style={{
                            gridColumnStart: info.features.length - 1 === i && info.features.length % 2 !== 0 && "2"
                        }} className={styles.feature_item}>{item}</span>
                    ))}
                </div>
                <div className={styles.tech_con}>
                    {info.tech.map((item, i) => (
                        <span key={i}> {item.icon} {item.name}</span>
                    ))}
                </div>
            </div>
            <div className={styles.right_col}>
                <a href={info.link} target="_blank" rel="noopener noreferrer"> <div className={styles.overlay}>
                    <span>View live project</span>
                </div>
                </a>
                <div className={styles.img_container}>
                    <Image
                        src={info.image}
                        alt={`${info.name} project screenshot`}
                        layout="fill"
                        quality='50'
                        placeholder='blur'
                        className={styles.projectImg}
                        id='author_image'
                    />
                </div>
            </div>
        </div>
    )
}

const scrollAnimation = (id, layout) => {
    const first = layout ? styles.right_col : styles.left_col
    const second = layout ? styles.left_col : styles.right_col

    const tl = gsap.from(`#${id} .${first}`, {
        autoAlpha: 0,
        xPercent: -5,
        duration: .5,
        scrollTrigger: {
            trigger: `#${id}`,
            start: 'top center',
            end: '+=70',
            toggleActions: "play none none reverse",
            preventOverlaps: true,
            fastScrollEnd: true,
        }
    })

    const tl2 = gsap.from(`#${id} .${second}`, {
        autoAlpha: 0,
        xPercent: 5,
        duration: .5,
        scrollTrigger: {
            trigger: `#${id}`,
            start: 'top center',
            end: '+=70',
            toggleActions: "play none none reverse",
            preventOverlaps: true,
            fastScrollEnd: true,
        }
    })
}

function mbScrollAnimation(id) {

    const tl = gsap.from(`#${id}`, {
        autoAlpha: 0,
        yPercent: 10,
        duration: .5,
        scrollTrigger: {
            trigger: `#${id}`,
            start: 'top center',
            end: '+=80',
            toggleActions: "play none none reverse",
            preventOverlaps: true,
            fastScrollEnd: true,
        }
    })
}

export default ProjectCard
