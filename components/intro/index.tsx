/* eslint-disable react/no-unescaped-entities */
"use client"
import React from "react"
import styles from "./styles.module.scss"
import Image from "next/image"
import Arrow from "@/public/svg/arrow.svg"
import author from "@/public/png/author.png"
import { motion } from "framer-motion"

const Intro = () => {
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
                </div>
                <div className={styles.right_col}>
                    <Arrow className={styles.arrow} />
                    <div className={styles.author_container}>
                        <div className={styles.author_image_container}>
                            <Image src={author} alt='Picture of the author' priority layout='fill' quality='75' placeholder='blur' className={styles.author_image} />
                        </div>
                        {/* <svg className={styles.firstBlob}>
                            <clipPath id='clip' clipPathUnits='objectBoundingBox'>
                                <path
                                    d='M20.842 455.346C-29.2961 356.824 21.7411 205.399 103.458 110.067C185.176 14.7349 298.064 -24.6339 410.524 16.292C523.474 57.0891 635.623 178.852 629 298C622.262 416.606 497.358 533.011 359.077 567.59C221.169 601.499 70.6053 554.539 20.842 455.346Z'
                                    fill='#621A9A'
                                />
                            </clipPath>
                        </svg> */}
                    </div>
                </div>
            </div>
            <div className={styles.row}>
                <p>
                    I started as a logo designer back in 2015, creating awesome brand identities and graphics. While studying computer science, I got into web design and fell in love with blending my graphic design skills with creating beautiful UIs. This journey has been a creative adventure,
                    pushing me to grow as a front-end developer and explore new ways to make digital experiences shine.
                </p>
                <p>
                    These days, I'm all about building cool projects and exploring new web tech. Over the years I've learned that nailing the small details is what makes great design stand out. My favorite thing is building software where design and engineering come together perfectly – stuff that
                    not only looks great but also functions flawlessly behind the scenes.
                </p>
            </div>
        </section>
    )
}

export default Intro
