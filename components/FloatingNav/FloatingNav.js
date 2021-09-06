import styles from './FloatingNav.module.scss'
import gsap from 'gsap'
import { scroll, sectionRefs, navRef } from '../../constants/HelperFunctions';
import { FiSmile, FiFeather, FiLayers, FiMessageCircle, FiFlag, FiArrowUp } from "react-icons/fi";
import { HiOutlinePencil } from "react-icons/hi";
import { useEffect } from 'react';
const FloatingNav = () => {
    useEffect(() => {
        const tl = gsap.timeline({})
        tl.fromTo('#nav_ul', { opacity: 0, transformOrigin: 'center', scale: 0 }, {
            opacity: 1,
            scale: 1,
            duration: 1,
            delay: 5,
            ease: "expo.out(0.9, 0.1)"
        }).fromTo('#nav_ul li', { x: '-10px', opacity: '0' }, {
            x: '0px',
            opacity: '1',
            duration: 1,
            stagger: 0.1,
            delay: -0.8,
            ease: "expo.out(0.9, 0.1)"
        })

        const animation = gsap.from("#top", {
            autoAlpha: 0,
            yPercent: 80,
            scrollTrigger: {
                trigger: 'body',
                start: 'top+=400 top',
                end: '+=20',
                scrub: true,
            }
        })
        return () => animation.kill()
    }, [])

    return (


        <div className={styles.container}>
            <ul id="nav_ul">
                <li onClick={() => scroll(sectionRefs[0])}><a id="1" ref={(el) => navRef[0] = el} data-tip="About" data-class='nav_tip' data-place='right' data-offset='{"right":6}'><FiSmile /></a></li>
                <li onClick={() => scroll(sectionRefs[1])}><a id="2" ref={(el) => navRef[1] = el} data-tip="Career" data-class='nav_tip' data-place='right' data-offset='{"right":6}'><FiFlag /></a></li>
                <li onClick={() => scroll(sectionRefs[2])}><a id="3" ref={(el) => navRef[2] = el} data-tip="Skills" data-class='nav_tip' data-place='right' data-offset='{"right":6}'><FiFeather /></a></li>
                <li onClick={() => scroll(sectionRefs[3])}><a id="4" ref={(el) => navRef[3] = el} data-tip="Projects" data-class='nav_tip' data-place='right' data-offset='{"right":6}'><FiLayers /></a></li>
                <li onClick={() => scroll(sectionRefs[4])}><a id="5" ref={(el) => navRef[4] = el} data-tip="Blog" data-class='nav_tip' data-place='right' data-offset='{"right":6}'><HiOutlinePencil /></a></li>
                <li onClick={() => scroll(sectionRefs[5])}><a id="6" ref={(el) => navRef[5] = el} data-tip="Contact" data-class='nav_tip' data-place='right' data-offset='{"right":6}'><FiMessageCircle /></a></li>
            </ul>

            <span id="top" onClick={() => scroll()}><a data-tip="Top" data-class='nav_tip' data-place='right' data-offset='{"right":6}'><FiArrowUp /></a></span>
        </div>

    )
}

export default FloatingNav
