import Head from 'next/head'
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Index.module.scss'
import FloatingNav from '../components/FloatingNav/';
import FirstSection from '../components/sections/FirstSection'
import SecondSection from '../components/sections/SecondSection'
import ThirdSection from '../components/sections/ThirdSection'
import FourthSection from '../components/sections/FourthSection'
import FourthSectionMB from '../components/sections/FourthSectionMB'
import FifthSection from '../components/sections/FifthSection'
import SixthSection from '../components/sections/SixthSection'
import SeventhSection from '../components/sections/SeventhSection'
import { desktopNavigation, mobileNavigation } from '../constants/HelperFunctions'
import { useEffect, useState } from 'react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';
export default function Home() {
    const [load, setLoad] = useState(false)
    const [mobileView, setMobileView] = useState(false)
    useEffect(() => {
        document.body.style.transition = '.2s'
        const media = window.matchMedia('(max-width:850px)')
        if (media.matches) {
            setTimeout(() => {
                setLoad(true)
            }, 4800)
        } else {
            setTimeout(() => {
                setLoad(true)
            }, 4200);
        }

        function handleMatch(matches) {
            if (matches) {
                console.log("resize")
                setMobileView(true)
            } else {
                setMobileView(false)
            }
        }
        media.addListener((e) => handleMatch(e.matches))
        handleMatch(media.matches)
    }, [])

    useEffect(() => {
        console.log(load)
        if (load) {
            setTimeout(() => {
                ScrollTrigger.matchMedia({
                    "(min-width:850px)": () => desktopNavigation(),
                    "(max-width:849px)": () => mobileNavigation(),
                })
            }, 600)
        }

    }, [load])
    return (
        <>
            <Head>
                <title>Home - Portfolio</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Head>
            <Header />
            <div className={styles.layout__container}>
                {load && mobileView && <ScrollToTop view="mobile" />}
                <div className={styles.layout}>
                    <div className={styles.floating__nav}>
                        <FloatingNav />
                    </div>
                    <div className={styles.body__main}>
                        <FirstSection load={load} />
                        {load && <SecondSection />}
                        {load && <ThirdSection />}
                        <div id="section4">
                            {load && !mobileView && <FourthSection />}
                            {load && mobileView && <FourthSectionMB />}
                        </div>
                        {load && <FifthSection />}
                        {load && <SixthSection />}
                        {load && <SeventhSection />}
                    </div>
                </div>
            </div>
            {load && <Footer />}
        </>
    );
}
