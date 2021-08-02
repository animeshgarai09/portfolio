import AppHead from '../constants/AppHead';
import Header from '../components/Header';
import styles from '../styles/Index.module.scss'
import FloatingNav from '../components/FloatingNav/';
import FirstSection from '../components/sections/FirstSection'
import SecondSection from '../components/sections/SecondSection'
import ThirdSection from '../components/sections/ThirdSection'
import FourthSection from '../components/sections/FourthSection'
import FifthSection from '../components/sections/FifthSection'
import nav from '../components/FloatingNav/FloatingNav.module.scss'
import { React, useEffect, useState, useRef } from 'react'

export default function Home() {
    const [load, setLoad] = useState(false)
    // const [activeNav, setActiveNav] = useState(0)
    const refs = useRef(new Array());
    const navRef = useRef(new Array());

    function setActiveNav(num) {
        let activeC = nav.active
        console.log(navRef.current)
        for (let i = 0; i < 5; i++) {
            console.log(navRef.current[i])
            if (num == navRef.current[i].id) {
                navRef.current[i].classList.add(activeC)
            } else if (navRef.current[i].classList) {
                navRef.current[i].classList.remove(activeC)
            }
        }
    }
    useEffect(() => {
        setTimeout(() => {
            setLoad(true);
        }, 6400);

    }, [])
    return (
        <>
            <AppHead title='Home - Portfolio' />
            {/* <Overlay /> */}
            <Header />
            {/* <Section/> */}
            <div className={styles.layout__container}>
                <div className={styles.layout}>
                    <div className={styles.floating__nav}>
                        <FloatingNav refs={refs} navRef={navRef} setActiveNav={setActiveNav} />
                    </div>
                    <div className={styles.body__main}>
                        <FirstSection refs={refs} load={load} navRef={navRef.current[0]} setActiveNav={setActiveNav} />
                        {load && <SecondSection />}
                        {load && <ThirdSection refs={refs} setActiveNav={setActiveNav} />}
                        {load && <FourthSection refs={refs} setActiveNav={setActiveNav} />}
                        {load && <FifthSection refs={refs} setActiveNav={setActiveNav} />}
                    </div>
                </div>
            </div>
        </>
    );
}
