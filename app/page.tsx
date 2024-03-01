"use client"
import styles from "./page.module.scss"
import { motion, AnimatePresence } from "framer-motion"
import Intro from "@/components/intro"
import { useEffect, useState } from "react"
import FloatingNav from "@/components/FloatingNav"
import SplashScreen from "@/components/SplashScreen"
import { slideUp } from "@/components/intro/animations"

export default function Home() {
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        ;(async () => {
            const LocomotiveScroll = (await import("locomotive-scroll")).default
            const locomotiveScroll = new LocomotiveScroll()

            setTimeout(() => {
                setLoading(false)
                document.body.style.cursor = "default"
                window.scrollTo(0, 0)
            }, 3700)
        })()
    }, [])

    return (
        <>
            <AnimatePresence mode='wait'>{isLoading && <SplashScreen />}</AnimatePresence>
            <motion.div variants={slideUp} initial='initial' animate='slideUp' className={styles.layout__container}>
                <div className={styles.layout}>
                    <div className={styles.side_nav}>
                        <FloatingNav />
                    </div>
                    <main className={styles.main}>
                        <Intro />
                    </main>
                    <div className={styles.hero}>
                        <h1>BUILDING WEB COMPONENT</h1>
                    </div>
                </div>
            </motion.div>
        </>
    )
}
