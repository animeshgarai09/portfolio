import Link from 'next/link'
import { Logo_el, P_link_el } from '../../constants/_animationDuration'
import styles from './Header.module.scss'
import Logo from '../../public/svg/logo.svg'
import useDarkMode from "use-dark-mode";
import gsap from 'gsap'
import { useEffect, useState } from 'react';
import ReactTooltip from 'react-tooltip';
import { HiOutlineMail } from 'react-icons/hi'
import { RiTwitterLine, RiLinkedinLine } from 'react-icons/ri'
import { FiGithub, FiLinkedin } from 'react-icons/fi'

import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';
gsap.registerPlugin(ScrollTrigger);
gsap.core.globals('ScrollTrigger', ScrollTrigger);
const Header = () => {
    const darkMode = useDarkMode();
    const [mount, setMount] = useState(false);
    console.log(darkMode.value)



    useEffect(() => {
        setMount(true)
        const tl = gsap.timeline();
        const tl1 = gsap.timeline();

        tl.from('.ad_logo', Logo_el.duration, {

            y: '-40px',
            autoAlpha: 0,
            delay: Logo_el.delay,
            ease: "power4.out"

        }).from('.p-link', P_link_el.duration, {
            y: '-10px',
            autoAlpha: 0,
            delay: -0.7,
            ease: "power4.out",
            stagger: 0.2
        })
        tl1.to('.links', {
            x: '300px',
            autoAlpha: 0,
            ease: 'power3.inOut',
            scrollTrigger: {
                trigger: '.con',
                start: 'top+=220 top+=250',
                end: 'top+=260 top+=250',
                // markers: true,
                scrub: true,
            }
        })

    }, [])

    return (
        <>
            {mount && <ReactTooltip type={darkMode.value ? 'dark' : 'light'} effect='solid' />}
            <div
                className={styles.main}
            >
                <div className={styles.container}>
                    <div className={styles.logo + ' logo'}>
                        <Logo />
                    </div>
                    <div className={styles.links + ' links'}>
                        {/* <Link href="/certificates"> */}
                        <a className='p-link'><RiLinkedinLine /></a>
                        {/* </Link> */}
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
                </div>
            </div>
        </>
    );
}

export default Header
