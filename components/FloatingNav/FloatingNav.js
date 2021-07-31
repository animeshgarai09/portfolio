import styles from './FloatingNav.module.scss'
import { FloatingNav_el } from '../../constants/_animationDuration'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin.js';

import { Tween } from 'react-gsap'
import { FiSmile, FiFeather, FiLayers, FiMessageCircle, FiFlag, FiArrowUp } from "react-icons/fi";
import { useEffect } from 'react';
gsap.registerPlugin(ScrollToPlugin);

const FloatingNav = ({ refs }) => {
    // refs.current=array(4).fill(0).map((ref,i)=>{
    //     refs.current[i]=React.createRef()
    // })
    useEffect(() => {
        // setTimeout(() => {
        // gsap.to("#top", {
        //     autoAlpha: 1,
        //     scrollTrigger: {
        //         trigger: '#ab_con',
        //         start: 'bottom center+=150',
        //         end: 'bottom center+=150',
        //         markers: true
        //     }
        // })
        // }, 6400);
    }, [])
    function scroll(el) {
        // console.log(el.parentElement)
        if (el) {
            let position
            if (el.id == "section3") {

                position = el.parentElement.offsetTop + el.offsetHeight
            } else {
                position = el.offsetTop
            }
            gsap.to(window, { duration: 2, scrollTo: position, ease: "power2" })
        } else {
            gsap.to(window, { duration: 2, scrollTo: 0, ease: "power2" })
        }

    }

    return (


        <div className={styles.container}>
            <Tween
                from={{ opacity: 0, transformOrigin: 'center', scale: 0 }}
                to={{ opacity: 1, scale: 1 }}
                delay={FloatingNav_el.delay}
                duration={FloatingNav_el.duration}
                ease="expo.out(0.9, 0.1)">
                <ul >
                    <Tween
                        from={{ x: '-10px', opacity: '0' }}
                        to={{ x: '0px', opacity: '1' }}
                        delay={FloatingNav_el.delay}
                        duration={FloatingNav_el.duration}
                        stagger={0.3}
                        ease="expo.out(0.9, 0.1)">
                        {/* <li className="navlink1"><Link to="about" spy={true} smooth={true}><a data-tip="About" data-class='nav_tip' data-place='right' data-offset='{"right":6}'><FiSmile /></a></Link></li> */}
                        <li onClick={() => scroll(refs.current[0])}><a data-tip="About" data-class='nav_tip' data-place='right' data-offset='{"right":6}'><FiSmile /></a></li>
                        <li onClick={() => scroll(refs.current[1])}><a data-tip="Career" data-class='nav_tip' data-place='right' data-offset='{"right":6}'><FiFlag /></a></li>
                        <li onClick={() => scroll(refs.current[2])}><a data-tip="Skills" data-class='nav_tip' data-place='right' data-offset='{"right":6}'><FiFeather /></a></li>
                        <li onClick={() => scroll(refs.current[3])}><a data-tip="Portfolio" data-class='nav_tip' data-place='right' data-offset='{"right":6}'><FiLayers /></a></li>
                        <li onClick={() => scroll(refs.current[4])}><a data-tip="Contact" data-class='nav_tip' data-place='right' data-offset='{"right":6}'><FiMessageCircle /></a></li>
                    </Tween>
                </ul>
            </Tween>

            <span id="top" onClick={() => scroll()}><a data-tip="Top" data-class='nav_tip' data-place='right' data-offset='{"right":6}'><FiArrowUp /></a></span>
        </div>

    )
}

export default FloatingNav
