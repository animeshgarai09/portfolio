import { FiArrowUp } from "react-icons/fi";
import { useEffect } from 'react';
import gsap from 'gsap'
import { scroll } from '../../constants/HelperFunctions';
import styles from './ScrollToTop.module.scss'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'

const ScrollToTop = () => {

    useEffect(() => {
        gsap.set('#top', { yPercent: 200 })
        const tl = gsap.to('#top', {
            autoAlpha: 0.5,
            yPercent: 0,
            paused: true,
            duration: 0.2
        });

        ScrollTrigger.create({
            id: "topScroll",
            start: "top -=10",
            end: 99999,
            onUpdate: (self) => {
                if (self.direction === -1 && self.progress * 100000 > 300) {
                    tl.play()
                } else if (self.direction === -1 && self.progress * 100000 < 300) {
                    tl.reverse()
                } else {
                    tl.reverse()
                }
            }
        });
        return () => {
            tl.kill()
            ScrollTrigger.getById("topScroll").kill()
        }
    }, [])
    return (
        <div className={styles.mobile} id="top" >
            <span className={styles.arrow} onClick={() => scroll()}><a><FiArrowUp /></a></span>

        </div>
    )
}

export default ScrollToTop
