import '../styles/globals.scss'
import 'locomotive-scroll/src/locomotive-scroll.scss'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';
gsap.registerPlugin(ScrollTrigger);
gsap.core.globals('ScrollTrigger', ScrollTrigger);
function MyApp({ Component, pageProps }) {

    return (
        <main id='main'>
            <Component {...pageProps} />
        </main>
    )
}

export default MyApp
