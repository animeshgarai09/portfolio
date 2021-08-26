import styles from './Header.module.scss'
import Logo from '../../public/svg/logo.svg'
import useDarkMode from "use-dark-mode";
import Link from 'next/link'
import gsap from 'gsap'
import { useEffect, useState, useRef } from 'react';
import ReactTooltip from 'react-tooltip';
import { HiOutlineMail } from 'react-icons/hi'
import { RiTwitterLine, RiLinkedinLine } from 'react-icons/ri'
import { FiGithub } from 'react-icons/fi'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'
import { FiSmile, FiFeather, FiLayers, FiMessageCircle, FiFlag, FiArrowUp } from "react-icons/fi";
import { HiOutlinePencil } from "react-icons/hi";

const Header = ({ refs, mobNavRef }) => {
    const darkMode = useDarkMode();
    const [mount, setMount] = useState(false);
    const [navState, setNavState] = useState(false)
    const navAnimation = useRef()

    const navToggle = () => {

        if (!navState) {
            document.documentElement.style.overflowY = 'hidden'
            console.log('inside')
            navAnimation.current.timeScale(1).play()
        } else {
            document.documentElement.style.overflowY = 'overlay'
            console.log('inside')
            navAnimation.current.timeScale(2).reverse()
        }
        setNavState(!navState)
    }
    useEffect(() => {
        const media = window.matchMedia('(max-width:850px)')
        function handleMatch(matches) {
            if (!matches) {
                document.documentElement.style.overflowY = 'overlay'
            }
        }
        media.addListener((e) => handleMatch(e.matches));
        handleMatch(media.matches);


        navAnimation.current = gsap.timeline({ paused: true })
        navAnimation.current.to(`.${styles.dropNav_con}`, {
            autoAlpha: 1,
            duration: 0.5,
            ease: "power4.out"
        }).from(`.${styles.dropNav}`, {
            yPercent: -100,
            duration: 0.7,
            delay: -0.5,
            ease: "power4.out"
        }).from(`.mb_nav_btn`, {
            scale: 0,
            autoAlpha: 0,
            ease: "power3.out",
            stagger: 0.1,
            delay: -0.3
        }).from(`.${styles.mb_links}`, {
            scale: 0.5,
            autoAlpha: 0,
            ease: "power3.out",
            duration: 0.2,
        })

    }, [])
    useEffect(() => {
        setMount(true)
        const media = window.matchMedia('(max-width:850px)')
        if (media.matches) {
            const tl = gsap.timeline();
            tl.from('.ad_logo', .4, {
                y: -40,
                autoAlpha: 0,
                stagger: 0.2,
                ease: "power4.out",
                delay: 3
            }).from('.mb_nav', .5, {
                y: -20,
                autoAlpha: 0,
                ease: "power4.out",
                stagger: 0.2,
                delay: -0.7
            })
        } else {
            const tl = gsap.timeline();
            tl.from('.ad_logo', .4, {

                y: '-40px',
                autoAlpha: 0,
                ease: "power4.out",
                delay: 5
            }).from('.p-link', .5, {
                y: '-10px',
                autoAlpha: 0,
                delay: -0.7,
                ease: "power4.out",
                stagger: 0.2
            })

        }
        ScrollTrigger.matchMedia({
            "(max-width:850px)": () => scrollAnimation()
        })
    }, [])

    return (
        <>
            {mount && <ReactTooltip type={darkMode.value ? 'dark' : 'light'} effect='solid' />}
            <div className={styles.main} id='nav_con'>
                <div className={styles.container}>
                    <div className={styles.logo + ' logo'}>
                        <Logo />
                    </div>
                    <div className={styles.links} id='links'>
                        <Link href="https://www.linkedin.com/in/animesh-garai-29a5251b4">
                            <a target="_blank" className='p-link'><RiLinkedinLine /></a>
                        </Link>
                        {/* <Link href="/projects"> */}
                        <a className='p-link'><FiGithub /></a>
                        <a className='p-link'><RiTwitterLine /></a>
                        <a className='p-link'><HiOutlineMail /></a>
                        {/* </Link> */}
                        <input
                            id={styles.themeSwitcher}
                            name="theme-switcher"
                            type="checkbox"
                            checked={darkMode.value}
                            onChange={darkMode.toggle}
                        />
                        <label htmlFor={styles.themeSwitcher}></label>
                    </div>
                    <div className={styles.nav_drop}>
                        <input
                            id={styles.themeSwitcher}
                            name="theme-switcher"
                            type="checkbox"
                            checked={darkMode.value}
                            onChange={darkMode.toggle}
                        />
                        <label htmlFor={styles.themeSwitcher} className='mb_nav'></label>
                        {/* <button onClick={openNav} className='mb_nav'><CgMenuRightAlt /></button> */}
                        <div onClick={navToggle} className={styles.menu + ` ${navState ? styles.open : ''}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.dropNav_con}>
                <div className={styles.dropNav}>
                    <ul>
                        <li className='mb_nav_btn' onClick={() => scroll(refs.current[0], 1)}><a className={styles.active} id="1" ref={(el) => mobNavRef.current.push(el)} ><FiSmile /> About</a></li>
                        <li className='mb_nav_btn' onClick={() => scroll(refs.current[1], 2)}><a id="2" ref={(el) => mobNavRef.current.push(el)} ><FiFlag />Career</a></li>
                        <li className='mb_nav_btn' onClick={() => scroll(refs.current[2], 3)}><a id="3" ref={(el) => mobNavRef.current.push(el)} ><FiFeather />Skills</a></li>
                        <li className='mb_nav_btn' onClick={() => scroll(refs.current[3], 4)}><a id="4" ref={(el) => mobNavRef.current.push(el)} ><FiLayers />Portfolio</a></li>
                        <li className='mb_nav_btn' onClick={() => scroll(refs.current[4], 5)}><a id="5" ref={(el) => mobNavRef.current.push(el)} ><HiOutlinePencil />Blogs</a></li>
                        <li className='mb_nav_btn' onClick={() => scroll(refs.current[5], 6)}><a id="6" ref={(el) => mobNavRef.current.push(el)} ><FiMessageCircle />Contact</a></li>
                    </ul>
                    <div className={styles.mb_links}>
                        <Link href="https://www.linkedin.com/in/animesh-garai-29a5251b4">
                            <a target="_blank" className='mb-link'><RiLinkedinLine /></a>
                        </Link>
                        {/* <Link href="/projects"> */}
                        <a className='mb-link'><FiGithub /></a>
                        <a className='mb-link'><RiTwitterLine /></a>
                        <a className='mb-link'><HiOutlineMail /></a>
                    </div>
                </div>
            </div>

        </>
    );
}


export default Header


function scrollAnimation() {
    const showAnim = gsap.from('#nav_con', {
        yPercent: -100,
        paused: true,
        duration: 0.2
    }).progress(1);

    ScrollTrigger.create({
        start: "top -=10",
        end: 99999,
        onUpdate: (self) => {
            self.direction === -1 ? showAnim.play() : showAnim.reverse()
        }
    });

}