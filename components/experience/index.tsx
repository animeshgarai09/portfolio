import { useEffect, useState, useRef } from "react"
import styles from "./styles.module.scss"
import { motion, useScroll, useTransform } from "framer-motion"

const Experience = () => {
    const containerRef = useRef<HTMLDivElement>(null!)
    const [position, setPosition] = useState<string>()
    const { scrollYProgress: conScrollY } = useScroll({
        target: containerRef,
        offset: ["start end", "start start"],
    })

    const conX = useTransform(conScrollY, [0, 1], ["0vh", "-50vh"])

    useEffect(() => {
        conX.on("change", (val) => {
            console.log("scroll", val)
            setPosition(val)
        })
        //  console.log("transform val", conX.get())
    }, [conX])
    return (
        <div ref={containerRef} className={styles.container}>
            <motion.div style={{ top: conX }} className={styles.paralax_container}>
                <motion.div className={styles.wrapper}>
                    <div className={styles.row}>
                        <h1 className='big-heading'>experience</h1>
                    </div>
                    <svg viewBox='0 0 1244 261' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M1260.5 36.317C1142.34 46.4266 945.734 79.1398 763 164C426 320.5 335.5 252 442 127C442 127 569 -16 308.5 8.99998C172.5 16.5001 5.3 55.0999 -39.5 73.4999' stroke='black' stroke-width='11' stroke-linecap='round' />
                        <circle cx='466' cy='88' r='12' fill='#E9D4B2' stroke='#F6F6F6' stroke-width='4' />
                        <circle cx='195' cy='21' r='12' fill='#E28B6D' stroke='#F6F6F6' stroke-width='4' />
                        <circle cx='741' cy='174' r='12' fill='#E9D4B2' stroke='#F6F6F6' stroke-width='4' />
                        <circle cx='413' cy='240' r='12' fill='#E9D4B2' stroke='#F6F6F6' stroke-width='4' />
                    </svg>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Experience
