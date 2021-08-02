import '../styles/globals.scss'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin.js';
gsap.registerPlugin(ScrollToPlugin);

gsap.registerPlugin(ScrollTrigger);
gsap.core.globals('ScrollTrigger', ScrollTrigger);
function MyApp({ Component, pageProps }) {
    // useLocoScroll();
    return (
        <main id='main'>
            <Component {...pageProps} />
        </main>
    )
}

export default MyApp
