import '../styles/globals.scss'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin.js';
import { useEffect } from 'react';
gsap.registerPlugin(ScrollToPlugin);

gsap.registerPlugin(ScrollTrigger);
gsap.core.globals('ScrollTrigger', ScrollTrigger);
function MyApp({ Component, pageProps }) {
    // useLocoScroll();
    useEffect(() => {
        let vh = window.innerHeight * 0.01
        document.documentElement.style.setProperty('--vh', `${vh}px`)
        window.addEventListener('resize', () => {
            let vh = window.innerHeight * 0.01
            document.documentElement.style.setProperty('--vh', `${vh}px`)
        })
    })
    return (
        <main id='main'>
            <Component {...pageProps} />
        </main>
    )
}

export default MyApp
