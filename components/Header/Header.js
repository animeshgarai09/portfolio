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
import { CgMenuRightAlt, CgClose } from 'react-icons/cg'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'
import { FiSmile, FiFeather, FiLayers, FiMessageCircle, FiFlag, FiArrowUp } from "react-icons/fi";
import { HiOutlinePencil } from "react-icons/hi";
const Header = ({ refs, mobNavRef, mbload }) => {
    const darkMode = useDarkMode();
    const [mount, setMount] = useState(false);
    const navAnimation = useRef()
    const openNav = () => {
        // document.body.style.overflowY = 'hidden'
        document.documentElement.style.overflowY = 'hidden'
        // setMbMenu(true)
        // gsap.set('.mb_nav_btn', { clearProps: "all" })
        console.log('inside')
        navAnimation.current.play()
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

        // gsap.set(`.${dropNav}`, {
        //     css:{
        //         filter:"blur(0px)"
        //     }
        // })
        navAnimation.current = gsap.timeline({ paused: true })
        navAnimation.current.from(`.${styles.dropNav}`, {
            autoAlpha: 1
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
            if (localStorage.getItem('initAnimation') == null) {
                console.log('in')
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
            } else {
                // document.querySelector('.ad_logo').style.visibility = 'visible'
                document.querySelectorAll('.p-link, .ad_logo').forEach((el) => {
                    el.style.visibility = 'visible'
                })
            }
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
                        <button onClick={openNav} className='mb_nav'><CgMenuRightAlt /></button>
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

const DropNavOld = ({ refs, mobNavRef }) => {

    const closeNav = () => {
        document.documentElement.style.overflowY = 'overlay'
        const mbAnimation = gsap.timeline()
        mbAnimation.to('.mb_nav_btn', {
            x: 20,
            autoAlpha: 0,
            duration: 1,
            stagger: 0.1,
            // delay: -0.3,
            ease: "expo.out(0.9, 0.1)"
        }).to('#mb_wrapper', {
            scale: .7,
            autoAlpha: 0,
            ease: 'power4.in',
            duration: .3,
            delay: -1.2
        })
        // open(false)
    }
    return (
        <div className={styles.wrapper} >
            <div className={styles.dropNav_con} id="mb_wrapper">
                <div className={styles.top}>
                    <span><CgMenuRightAlt />Menu</span>
                    <button onClick={closeNav}><CgClose /></button>
                </div>
                <div className={styles.nav}>
                    <ul id="mb_nav_ul">
                        <li className='mb_nav_btn' onClick={() => scroll(refs.current[0], 1)}><a id="1" ref={(el) => mobNavRef.current.push(el)} >About</a></li>
                        <li className='mb_nav_btn' onClick={() => scroll(refs.current[1], 2)}><a id="2" ref={(el) => mobNavRef.current.push(el)} >Career</a></li>
                        <li className='mb_nav_btn' onClick={() => scroll(refs.current[2], 3)}><a id="3" ref={(el) => mobNavRef.current.push(el)} >Skills</a></li>
                        <li className='mb_nav_btn' onClick={() => scroll(refs.current[3], 4)}><a id="4" ref={(el) => mobNavRef.current.push(el)} >Portfolio</a></li>
                        <li className='mb_nav_btn' onClick={() => scroll(refs.current[4], 5)}><a id="5" ref={(el) => mobNavRef.current.push(el)} >Blogs</a></li>
                        <li className='mb_nav_btn' onClick={() => scroll(refs.current[5], 6)}><a id="6" ref={(el) => mobNavRef.current.push(el)} >Contact</a></li>
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
                <div className={styles.social}>

                </div>
            </div>
        </div>
    )
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