import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import styles from "./styles.module.scss"

const SplashScreen = () => {
    const [load, setLoad] = useState(false)
    const icon = {
        hidden: {
            pathLength: 0,
            pathOffset: 0,
            opacity: 1,
            // fill: "rgba(255, 255, 255, 0)",
        },
        start: {
            pathLength: 1,
            pathOffset: 0,
            transition: {
                ease: "linear",
                duration: 3,
            },
        },
        end: {
            pathOffset: 1,
            transition: {
                ease: "linear",
                delay: 1.2,
                duration: 2.5,
            },
        },
        hide: {
            opacity: 0,
            transition: {
                delay: 3.6,
                duration: 0.2,
            },
        },
    }
    const exitAn = {}
    useEffect(() => {
        setTimeout(() => {
            setLoad(true)
            console.log("start")
        }, 2000)
    }, [])
    return (
        <>
            {/* {load && ( */}
            <div className={styles.splash_container}>
                <svg viewBox='0 0 938 316' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <motion.path
                        d='M6 266.574C6 266.574 168.047 266.574 328 91.074C401.456 10.4781 349 -4.70012 328 14C307 32.7 257.9 101.6 255.5 280C254.833 291.5 288.15 181.564 328 173.074C366.196 164.937 301 309.774 416 220.574H426.5C522 245.574 557.5 73.074 421 215.074C394.403 250.096 403 360 519.5 252.5C636 145 645 9.49995 610 14C575 18.5 555 241 555 241C555 280 549 328 586.5 295C607.264 276.728 664 203.5 693.5 114C723 24.5 709 -45.4001 671 58.9999C623.5 189.5 632 295 632 295C632 295 632 342 686 266.574C723.266 214.521 731.039 180.426 737.539 166.5C715.873 201.667 723.767 266.074 761.5 261C794.489 256.564 816.7 226.4 793.5 182C764.5 126.5 731 166.5 731 182C731 197.5 731 261 931.5 266.574'
                        stroke='black'
                        variants={icon}
                        initial='hidden'
                        animate={["start", "end", "hide"]}
                        transition={{ delay: 0.3 }}
                    />
                </svg>
            </div>
            {/* )} */}
        </>
    )
}

export default SplashScreen
