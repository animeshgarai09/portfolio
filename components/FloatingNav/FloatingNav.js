import styles from './FloatingNav.module.scss'
import gsap from 'gsap'
import { scroll } from '../../constants/HelperFunctions';
import { FiSmile, FiFeather, FiLayers, FiMessageCircle, FiFlag, FiArrowUp } from "react-icons/fi";
import { HiOutlinePencil } from "react-icons/hi";

import { useEffect } from 'react';

const FloatingNav = ({ refs, navRef }) => {
    useEffect(() => {
        const tl = gsap.timeline({})
        tl.fromTo('#nav_ul', { opacity: 0, transformOrigin: 'center', scale: 0 }, {
            opacity: 1,
            scale: 1,
            duration: 1,
            delay: 5,
            ease: "expo.out(0.9, 0.1)"
        }).fromTo('.nav_btn', { x: '-10px', opacity: '0' }, {
            x: '0px',
            opacity: '1',
            duration: 1,
            stagger: 0.1,
            delay: -0.8,
            ease: "expo.out(0.9, 0.1)"
        })

        gsap.to("#top", {
            autoAlpha: 1,
            scrollTrigger: {
                trigger: 'body',
                start: 'top+=400 top',
                end: '+=20',
                scrub: true,
            }
        })
    }, [])

    return (


        <div className={styles.container}>
            <ul id="nav_ul">
                <li className='nav_btn' onClick={() => scroll(refs.current[0], 1)}><a id="1" ref={(el) => navRef.current.push(el)} data-tip="About" data-class='nav_tip' data-place='right' data-offset='{"right":6}'><FiSmile /></a></li>
                <li className='nav_btn' onClick={() => scroll(refs.current[1], 2)}><a id="2" ref={(el) => navRef.current.push(el)} data-tip="Career" data-class='nav_tip' data-place='right' data-offset='{"right":6}'><FiFlag /></a></li>
                <li className='nav_btn' onClick={() => scroll(refs.current[2], 3)}><a id="3" ref={(el) => navRef.current.push(el)} data-tip="Skills" data-class='nav_tip' data-place='right' data-offset='{"right":6}'><FiFeather /></a></li>
                <li className='nav_btn' onClick={() => scroll(refs.current[3], 4)}><a id="4" ref={(el) => navRef.current.push(el)} data-tip="Portfolio" data-class='nav_tip' data-place='right' data-offset='{"right":6}'><FiLayers /></a></li>
                <li className='nav_btn' onClick={() => scroll(refs.current[4], 5)}><a id="5" ref={(el) => navRef.current.push(el)} data-tip="Blog" data-class='nav_tip' data-place='right' data-offset='{"right":6}'><HiOutlinePencil /></a></li>
                <li className='nav_btn' onClick={() => scroll(refs.current[5], 6)}><a id="6" ref={(el) => navRef.current.push(el)} data-tip="Contact" data-class='nav_tip' data-place='right' data-offset='{"right":6}'><FiMessageCircle /></a></li>
            </ul>

            <span id="top" onClick={() => scroll()}><a data-tip="Top" data-class='nav_tip' data-place='right' data-offset='{"right":6}'><FiArrowUp /></a></span>
        </div>

    )
}

export default FloatingNav
