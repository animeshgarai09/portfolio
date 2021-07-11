import Head from "next/head"
import Header from '../components/Header';
import styles from '../styles/Index.module.scss'
import FloatingNav from '../components/FloatingNav/';
import FirstSection from '../components/sections/FirstSection'
import SecondSection from '../components/sections/SecondSection'
import ThirdSection from '../components/sections/ThirdSection'
import FourthSection from '../components/sections/FourthSection'
import FifthSection from '../components/sections/FifthSection'
import Overlay from '../components/Overlay/Overlay';
// import Section from '../components/Header/Section';
export default function Home() {
    return (
        <>
            <Head>
                <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
                <link rel="manifest" href="favicon/site.webmanifest" />
                <link rel="mask-icon" href="favicon/safari-pinned-tab.svg" color="#621a9a" />
                <meta name="apple-mobile-web-app-title" content="Animeshdesigns" />
                <meta name="application-name" content="Animeshdesigns" />
                <meta name="msapplication-TileColor" content="#ffc40d" />
                <meta name="theme-color" media="(prefers-color-scheme: light)" content="#ffffff" />
                <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#2c2f33" />
                <title>Home</title>
            </Head>
            <Overlay />
            <Header />
            {/* <Section/> */}
            <div className={styles.layout__container}>
                <div className={styles.layout}>
                    <div className={styles.floating__nav}>
                        <FloatingNav />
                    </div>
                    <div className={styles.body__main}>
                        <FirstSection />
                        <SecondSection />
                        <ThirdSection />
                        <FourthSection />
                        <FifthSection />
                    </div>
                </div>
            </div>
        </>
    );
}
