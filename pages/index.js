import AppHead from '../constants/AppHead';
import Header from '../components/Header';
import styles from '../styles/Index.module.scss'
import FloatingNav from '../components/FloatingNav/';
import FirstSection from '../components/sections/FirstSection'
import SecondSection from '../components/sections/SecondSection'
import ThirdSection from '../components/sections/ThirdSection'
import FourthSection from '../components/sections/FourthSection'
import FifthSection from '../components/sections/FifthSection'
import Overlay from '../components/Overlay/Overlay';
// import useLocoScroll from '../constants/useLocoScroll'
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';
import { useEffect, useState } from 'react'
gsap.registerPlugin(ScrollTrigger);

// import Section from '../components/Header/Section';
export default function Home() {
    const [load, setLoad] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            // document.body.style.overflowY = 'overlay';
            setLoad(true);
            let locoScroll = null;
            let scrollEl = document.querySelector("#main");
            import("locomotive-scroll").then((locomotiveModule) => {
                locoScroll = new locomotiveModule.default({
                    el: scrollEl,
                    smooth: true,
                    //   lerp: 0.075,
                    //   multiplier: 0.9
                });


                //   locoScroll = new LocomotiveScroll({
                //       el: scrollEl,
                //       smooth: true,
                //       lerp: 0.075,
                //       multiplier: 0.9
                //   });
                console.log(locoScroll)
                locoScroll.on("scroll", ScrollTrigger.update);
                console.log('loaded and updated')
                ScrollTrigger.scrollerProxy(scrollEl, {

                    scrollTop(value) {
                        if (locoScroll) {
                            console.log(value, 'inloop')
                            return arguments.length
                                ? locoScroll.scrollTo(value, 0, 0)
                                : locoScroll.scroll.instance.scroll.y;
                        }
                        console.log(value, 'outloop')

                        return null;
                    },
                    getBoundingClientRect() {
                        return {
                            top: 0,
                            left: 0,
                            width: window.innerWidth,
                            height: window.innerHeight
                        };
                    },

                    pinType: scrollEl.style.transform ? "transform" : "fixed"
                });

                // const lsUpdate = () => {
                //     if (locoScroll) {
                //         locoScroll.update();
                //     }
                // };
                console.log('before event')
                ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
                ScrollTrigger.refresh();


            });
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
                        <FloatingNav />
                    </div>
                    <div className={styles.body__main}>
                        <FirstSection trigger={ScrollTrigger} load={load} />
                        {load && <SecondSection />}
                        {load && <ThirdSection />}
                        {load && <FourthSection />}
                        {load && <FifthSection />}
                    </div>
                </div>
            </div>
        </>
    );
}
