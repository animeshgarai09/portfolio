import '../styles/globals.scss'
import 'locomotive-scroll/src/locomotive-scroll.scss'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';
// import useLocoScroll from '../constants/useLocoScroll'

gsap.registerPlugin(ScrollTrigger);
gsap.core.globals('ScrollTrigger', ScrollTrigger);
function MyApp({ Component, pageProps }) {
    // useLocoScroll();
    return (
        <main id='main' data-scroll-container>
            <Component {...pageProps} />
        </main>
    )
}

export default MyApp
