import { Logo_el, P_link_el } from '../../constants/_animationDuration'
import styles from './Header.module.scss'
import Logo from '../../public/svg/logo.svg'
import useDarkMode from "use-dark-mode";
import useWindowSize from '../../constants/useWindowSize'
import Link from 'next/link'
import gsap from 'gsap'
import { useEffect, useState } from 'react';
import ReactTooltip from 'react-tooltip';
import { HiOutlineMail } from 'react-icons/hi'
import { RiTwitterLine, RiLinkedinLine } from 'react-icons/ri'
import { FiGithub } from 'react-icons/fi'
import { CgMenuRightAlt, CgClose } from 'react-icons/cg'

const Header = () => {
    const darkMode = useDarkMode();
    const [mount, setMount] = useState(false);
    const [mbMenu, setMbMenu] = useState(false)
    console.log(darkMode.value)
    const screen = useWindowSize()
    const openNav = () => {
        // document.body.style.overflowY = 'hidden'
        document.documentElement.style.overflowY = 'hidden'
        setMbMenu(true)
    }

    useEffect(() => {
        if (screen.width > 1129) {
            document.documentElement.style.overflowY = 'overlay'

            setMbMenu(false)
        }
    }, [screen.width])
    useEffect(() => {

        setMount(true)
        const tl = gsap.timeline();

        tl.to('#header_con', { visibility: 'visible', delay: Logo_el.delay - 0.5 }).from('.ad_logo', Logo_el.duration, {

            y: '-40px',
            autoAlpha: 0,
            ease: "power4.out"

        }).from('.p-link', P_link_el.duration, {
            y: '-10px',
            autoAlpha: 0,
            delay: -0.7,
            ease: "power4.out",
            stagger: 0.2
        })
    }, [])

    return (
        <>
            {mount && <ReactTooltip type={darkMode.value ? 'dark' : 'light'} effect='solid' />}
            <div className={styles.main}>
                <div className={styles.container} id='header_con'>
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
                        <label htmlFor={styles.themeSwitcher}></label>
                        <button onClick={openNav}><CgMenuRightAlt /></button>
                    </div>
                </div>
            </div>
            {mbMenu && <DropNav setMbMenu={setMbMenu} />}

        </>
    );
}


const DropNav = ({ setMbMenu }) => {
    const closeNav = () => {
        document.documentElement.style.overflowY = 'overlay'

        setMbMenu(false)
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.dropNav_con}>
                <div className={styles.top}>
                    <span><CgMenuRightAlt />Menu</span>
                    <button onClick={closeNav}><CgClose /></button>
                </div>
                <div className={styles.nav}>
                    <ul>
                        <li>About</li>
                        <li>Career</li>
                        <li>Skills</li>
                        <li>Portfolio</li>
                        <li>Contact</li>
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
