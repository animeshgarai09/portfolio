/* eslint-disable react/no-unescaped-entities */
"use client"
import { useEffect, useRef } from "react"
import styles from "./styles.module.scss"
import Image from "next/image"
import author from "@/public/png/author.png"
import { motion, useScroll, useTransform } from "framer-motion"

const Intro = () => {
    const aboutRef = useRef<HTMLDivElement>(null!)
    const introRef = useRef<HTMLDivElement>(null!)
    const { scrollYProgress: aboutScrollY } = useScroll({
        target: aboutRef,
        offset: ["0.4 end", "center center"],
    })

    const { scrollYProgress: imageScrollY } = useScroll({
        target: aboutRef,
        offset: ["start end", "end end"],
    })
    const imageX = useTransform(imageScrollY, [0, 1], ["-2.5rem ", "0rem"])
    useEffect(() => {
        // imageScrollY.on("change", (val) => {
        //     console.log("scroll",val)
        // })
        console.log("transform val", imageX.get())
    }, [imageX])

    const words = "I'm a skilled developer with a creative sense, dedicated to crafting exceptional digital experiences. I help brands stand out in the digital space by setting new standards.".split(" ")

    return (
        <section className={styles.container}>
            <div className={styles.row}>
                <div className={styles.left_col}>
                    <div className={styles.intro_con} ref={introRef}>
                        <span className='big-heading'>intro</span>

                        <h1>
                            Hi, I am <span>Animesh</span>
                        </h1>
                        <h3 className='introSkills'>Front-end Developer</h3>
                        <h3 className='introSkills'>Graphic Designer</h3>

                        <a target='_blank' rel='noreferrer' href='https://drive.google.com/file/d/13IDmRfxEEudWaZS3YWqhY6ETXJ6CsjHh/view?usp=sharing'>
                            Resume
                        </a>

                        <div className={styles.scrollDown}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div className={styles.about_con} ref={aboutRef}>
                        <h1 className={styles.paragraph}>
                            {words.map((word, i) => {
                                const start = i / words.length
                                const end = start + 1 / words.length
                                return (
                                    <Word key={i} progress={aboutScrollY} range={[start, end]}>
                                        {word}
                                    </Word>
                                )
                            })}
                        </h1>
                    </div>
                </div>
                <div className={styles.right_col}>
                    <div className={styles.author_container}>
                        {/* <svg viewBox='0 0 207 104' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path
                                // initial={{
                                //     // pathLength: 1,
                                //     // pathOffset: 0,
                                //     strokeDashoffset: 0,
                                //     // strokeL
                                // }}
                                // style={{ strokeDashoffset: pathOffset }}
                                className={styles.path}
                                d='M13.0993 10C11.3653 47.6828 32.0058 128.701 101.487 61.3429C143.554 26.0152 175.222 109.86 205 99.0257'
                                stroke='#070707'
                                stroke-width='3'
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                stroke-dasharray='6 9'
                            />
                            <path
                                className={styles.arrow_head}
                                d='M1.11261 14.1768C0.502113 14.6602 0.496618 15.448 1.10072 15.9369C1.70525 16.4264 2.69205 16.4308 3.30358 15.9465L11.5864 9.38428C12.4041 8.7362 13.7376 8.78065 14.485 9.48024L22.0622 16.5689C22.6212 17.0922 23.6051 17.1535 24.2587 16.7062C24.9128 16.259 24.9887 15.4722 24.4297 14.9488L14.6754 5.8271C13.9272 5.12785 12.5944 5.08356 11.7769 5.73113L1.11261 14.1768Z'
                                fill='black'
                            />
                        </svg> */}
                        <div className={styles.overlay}></div>
                        <div className={styles.author_image_container}>
                            <Image src={author} alt='Picture of the author' priority layout='fill' quality='75' placeholder='blur' className={styles.author_image} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Word = ({ children, progress, range }: { children: React.JSX.Element; progress: any; range: number[] }) => {
    const opacity = useTransform(progress, range, [0, 1])

    return (
        <span className={styles.word}>
            <span className={styles.shadow}>{children}</span>

            <motion.span style={{ opacity: opacity }}>{children}</motion.span>
        </span>
    )
}

export default Intro
