import AppHead from '../constants/AppHead';
import Header from '../components/Header';
import styles from '../styles/Index.module.scss'
import FloatingNav from '../components/FloatingNav/';
import FirstSection from '../components/sections/FirstSection'
import SecondSection from '../components/sections/SecondSection'
import ThirdSection from '../components/sections/ThirdSection'
import FourthSection from '../components/sections/FourthSection'
import FifthSection from '../components/sections/FifthSection'
import { useEffect, useState } from 'react'

export default function Home() {
    const [load, setLoad] = useState(false)
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
                        <FloatingNav />
                    </div>
                    <div className={styles.body__main}>
                        <FirstSection load={load} />
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
