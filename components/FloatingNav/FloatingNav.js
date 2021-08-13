import styles from './FloatingNav.module.scss'
import { FloatingNav_el } from '../../constants/_animationDuration'
import gsap from 'gsap'

// import { Tween } from 'react-gsap'
import { FiSmile, FiFeather, FiLayers, FiMessageCircle, FiFlag, FiArrowUp } from "react-icons/fi";
import { useEffect, useState } from 'react';

const FloatingNav = ({ refs, navRef, setActiveNav }) => {
    useEffect(() => {
        if (localStorage.getItem('initAnimation') == null) {
            const delay = localStorage.getItem('initAnimation') === false ? .5 : 5
            const tl = gsap.timeline({})
            tl.fromTo('#nav_ul', { opacity: 0, transformOrigin: 'center', scale: 0 }, {
                opacity: 1,
                scale: 1,
                duration: 1,
                delay: delay,
                ease: "expo.out(0.9, 0.1)"
            }).fromTo('.nav_btn', { x: '-10px', opacity: '0' }, {
                x: '0px',
                opacity: '1',
                duration: 1,
                stagger: 0.1,
                delay: -0.8,
                ease: "expo.out(0.9, 0.1)"
            })
        } else {
            // document.querySelector('.ad_logo').style.visibility = 'visible'
            document.querySelector('#nav_ul').style.opacity = 1
        }
        gsap.to("#top", {
            autoAlpha: 1,
            scrollTrigger: {
                trigger: '#section1',
                start: 'bottom center+=150',
                end: '+=10',
                scrub: 0.5
            }
        })
    }, [])
    function scroll(el, num) {
        if (el) {
            let position
            if (el.id == "section3") {

                position = el.parentElement.offsetTop + el.offsetHeight
            } else {
                position = el.offsetTop
            }

            // setNav(num)
            gsap.to(window, { duration: calculateDuration(position), scrollTo: position, ease: "power2" })
        } else {
            gsap.to(window, { duration: calculateDuration(0), scrollTo: 0, ease: "power2" })
        }

    }

    function calculateDuration(position) {
        let totalTravel = Math.abs(window.scrollY - position)
        console.log(totalTravel)
        if (totalTravel < 1000) {
            return 0.6
        } else if (totalTravel < 2000) {
            return 0.8
        } else if (totalTravel < 3000) {
            return 1
        } else if (totalTravel < 4000) {
            return 1.5
        } else {
            return 2
        }
    }

    return (


        <div className={styles.container}>
            <ul id="nav_ul">
                <li className='nav_btn' onClick={() => scroll(refs.current[0], 1)}><a id="1" ref={(el) => navRef.current.push(el)} data-tip="About" data-class='nav_tip' data-place='right' data-offset='{"right":6}'><FiSmile /></a></li>
                <li className='nav_btn' onClick={() => scroll(refs.current[1], 2)}><a id="2" ref={(el) => navRef.current.push(el)} data-tip="Career" data-class='nav_tip' data-place='right' data-offset='{"right":6}'><FiFlag /></a></li>
                <li className='nav_btn' onClick={() => scroll(refs.current[2], 3)}><a id="3" ref={(el) => navRef.current.push(el)} data-tip="Skills" data-class='nav_tip' data-place='right' data-offset='{"right":6}'><FiFeather /></a></li>
                <li className='nav_btn' onClick={() => scroll(refs.current[3], 4)}><a id="4" ref={(el) => navRef.current.push(el)} data-tip="Portfolio" data-class='nav_tip' data-place='right' data-offset='{"right":6}'><FiLayers /></a></li>
                <li className='nav_btn' onClick={() => scroll(refs.current[4], 5)}><a id="5" ref={(el) => navRef.current.push(el)} data-tip="Contact" data-class='nav_tip' data-place='right' data-offset='{"right":6}'><FiMessageCircle /></a></li>
            </ul>

            <span id="top" onClick={() => scroll()}><a data-tip="Top" data-class='nav_tip' data-place='right' data-offset='{"right":6}'><FiArrowUp /></a></span>
        </div>

    )
}

export default FloatingNav
