import AppHead from '../constants/AppHead';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Index.module.scss'
import FloatingNav from '../components/FloatingNav/';
import FirstSection from '../components/sections/FirstSection'
import SecondSection from '../components/sections/SecondSection'
import ThirdSection from '../components/sections/ThirdSection'
import FourthSection from '../components/sections/FourthSection'
import FifthSection from '../components/sections/FifthSection'
import SixthSection from '../components/sections/SixthSection'
import SeventhSection from '../components/sections/SeventhSection'
import { React, useEffect, useState, useRef } from 'react'

export default function Home() {
    const [load, setLoad] = useState(false)
    const refs = useRef(new Array())
    const navRef = useRef(new Array())
    const mobNavRef = useRef(new Array())

    function setActiveNav(num) {
        let activeC = 'active'
        // console.log(navRef)
        // console.log(mobNavRef)
        for (let i = 0; i < 6; i++) {
            if (num == navRef.current[i].id && num == mobNavRef.current[i].id) {
                navRef.current[i].classList.add(activeC)
                mobNavRef.current[i].classList.add(activeC)
                console.log()
            } else if (navRef.current[i].classList && mobNavRef.current[i].classList) {
                navRef.current[i].classList.remove(activeC)
                mobNavRef.current[i].classList.remove(activeC)
            }
        }
    }
    useEffect(() => {
        document.body.style.transition = '.2s'
        const media = window.matchMedia('(max-width:850px)')
        if (media.matches) {
            setTimeout(() => {
                setLoad(true);
            }, 4800)
        } else {
            if (localStorage.getItem('initAnimation')) {
                setTimeout(() => {
                    setLoad(true);
                }, 500)
            } else {
                localStorage.setItem('initAnimation', false)
                setTimeout(() => {
                    setLoad(true);
                }, 4000);
            }
        }
    }, [])
    return (
        <>
            <AppHead title='Home - Portfolio' />
            <Header refs={refs} mobNavRef={mobNavRef} />
            <div className={styles.layout__container}>
                <div className={styles.layout}>
                    <div className={styles.floating__nav}>
                        {/* {screen.width > 849 &&  */}
                        <FloatingNav refs={refs} navRef={navRef} />
                        {/* } */}
                    </div>
                    <div className={styles.body__main}>
                        <FirstSection refs={refs} load={load} navRef={navRef.current[0]} mobNavRef={mobNavRef.current[0]} setActiveNav={setActiveNav} />
                        {load && <SecondSection />}
                        {load && <ThirdSection refs={refs} setActiveNav={setActiveNav} />}
                        {load && <FourthSection refs={refs} setActiveNav={setActiveNav} />}
                        {load && <FifthSection refs={refs} setActiveNav={setActiveNav} />}
                        {load && <SixthSection refs={refs} setActiveNav={setActiveNav} />}
                        {load && <SeventhSection refs={refs} setActiveNav={setActiveNav} />}
                    </div>
                </div>
            </div>
            {load && <Footer />}
        </>
    );
}
