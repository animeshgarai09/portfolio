/* eslint-disable react/no-unescaped-entities */
"use client"
import { useRef } from "react"
import styles from "./styles.module.scss"
import Image from "next/image"
import Arrow from "@/public/svg/arrow.svg"
import author from "@/public/png/author.png"
import { motion, useScroll } from "framer-motion"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP)
}
const Intro = () => {
    const left = useRef<HTMLDivElement>(null!)
    const { scrollY } = useScroll()
    // useGSAP(() => {
    //     const scrollAnimation = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: "#rightCol",
    //             start: `top top`,
    //             end: `+=${left.current.offsetHeight} bottom`,
    //             pin: true,
    //             scrub: 1,
    //             markers: true,
    //         },
    //     })
    // })
    return (
        <section className={styles.container}>
            <div className={styles.row}>
                <div className={styles.left_col}>
                    <div className={styles.intro_con}>
                        <span className={styles.shadow_T}>intro</span>

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
                    <div>
                        <h1>I'm a skilled developer with a creative sense, dedicated to crafting exceptional digital experiences. I help brands stand out in the digital space by setting new standards.</h1>
                    </div>
                </div>
                <div className={styles.right_col}>
                    <div className={styles.author_container}>
                        <Arrow className={styles.arrow} />
                        <div className={styles.author_image_container}>
                            <Image src={author} alt='Picture of the author' priority layout='fill' quality='75' placeholder='blur' className={styles.author_image} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Intro
