import AppHead from '../constants/AppHead';
import Header from '../components/Header';
import styles from '../styles/Index.module.scss'
import FloatingNav from '../components/FloatingNav/';
import FirstSection from '../components/sections/FirstSection'
import SecondSection from '../components/sections/SecondSection'
import ThirdSection from '../components/sections/ThirdSection'
import FourthSection from '../components/sections/FourthSection'
import FifthSection from '../components/sections/FifthSection'
import { React, useEffect, useState, useRef } from 'react'

export default function Home() {
    const [load, setLoad] = useState(false)
    const refs = useRef(new Array());

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
                        <FloatingNav refs={refs} />
                    </div>
                    <div className={styles.body__main}>
                        <FirstSection refs={refs} load={load} />
                        {load && <SecondSection refs={refs} />}
                        {load && <ThirdSection refs={refs} />}
                        {load && <FourthSection refs={refs} />}
                        {load && <FifthSection refs={refs} />}
                    </div>
                </div>
            </div>
        </>
    );
}
