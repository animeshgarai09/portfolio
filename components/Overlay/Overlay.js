import styles from './Overlay.module.scss'
import { Intro_overlay } from '../../constants/_animationDuration'
import { Timeline, Tween } from 'react-gsap'
import { useEffect, useRef } from 'react';

const Overlay = () => {
    const ref = useRef()
    useEffect(() => {
        setTimeout(() => {
            ref.current.style.display = 'none'
            document.body.style.overflowY = 'overlay';
        }, (Intro_overlay.delay + Intro_overlay.duration) * 1000);
    })

    return (
        <div ref={ref} className={styles.container}>
            <Tween to={{ height: '0', display: 'none' }} stagger={.3} delay={Intro_overlay.delay} duration={Intro_overlay.duration} ease="power3.in">

                <div className={styles.overlay_con}></div>
                <div className={styles.overlay_con}></div>
                <div className={styles.overlay_con}></div>
                <div className={styles.overlay_con}></div>
            </Tween >

        </div>
    )
}

export default Overlay
