import styles from './ThirdSection.module.scss'
import Path from '../../public/svg/path.svg'
import PathMB from '../../public/svg/path_mob.svg'
import Guy from '../../public/svg/guy.svg'
import Blob from '../../public/svg/secBlob.svg'
import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'
const ThirdSection = ({ refs, setActiveNav }) => {

    useEffect(() => {
        // setTimeout(() => {
        let el = document.querySelector('#path_line');
        let len = el.getTotalLength()
        el.style.strokeDasharray = len
        el.style.strokeDashoffset = len
        console.log(len);

        const navAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: '#section3',
                start: 'top top+=250',
                onEnter: (() => setActiveNav(2)),
            }
        })
        const navAnimationBack = gsap.timeline({
            scrollTrigger: {
                trigger: '#section3',
                start: 'bottom top-=350px',
                onEnterBack: (() => setActiveNav(2)),
                // markers: true
            }
        })

        ScrollTrigger.matchMedia({
            "(min-width:1131px)": () => scrollAnimation(),
            "(min-width:850px) and (max-width:1130px)": () => scrollAnimation("tablet"),
        })
        // }, 100)
    }, [])
    return (
        <section ref={(el) => refs.current.push(el)} className={styles.container} id='section3'>
            <span className={styles.shadow_T}>career</span>
            <div className={styles.path_con}>
                <PathMB className={styles.pathMB} />
                <Path className={styles.path} />
                <div className={styles.info + ' path_info'}>
                    <span>2015</span>
                    <p>Started Freelancing as a Logo Designer</p>
                </div>
                <div className={styles.info + ' path_info'}>
                    <span>2016</span>
                    <p>Started working as a graphic designer at <a href='https://www.webb4biz.com'>webb4biz</a></p>
                </div>
                <div className={styles.info + ' path_info'}>
                    <span>2018</span>
                    <p>Joined <a href='https://www.tcs.com/'>TCS</a> as Assistant system engineer. Still working</p>
                </div>
            </div>

            <Guy className={styles.guy} />
            <div className={styles.secBlob} id="secBlob">
                <div className={styles.text}>
                    <span>a</span>
                    <span>long way <span>ahead</span></span>
                    <span>lot more to <span>achive</span></span>
                </div>
                <Blob className={styles.blob} />
            </div>

        </section>
    )
}
const scrollAnimation = (screen) => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '#section3',
            start: `top ${screen == 'tablet' ? 'top+=60' : 'top'}`,
            end: '+=630',
            scrub: 0.5,
            pin: true,
            // invalidateOnRefresh: true,
            anticipatePin: 1
        }
    })

    tl.to('#path_line', {
        strokeDashoffset: 0,
        duration: 0.7,
    }, '-=0.4').from('.point', {
        transformOrigin: 'center',
        opacity: 0,
        scale: 0,
        duration: 0.05,
        delay: -0.7,
        stagger: 0.1,
    }).from('.path_info', {
        opacity: 0,
        duration: 0.1,
        delay: -0.7,
        stagger: 0.1,
    }).from('#guy', {
        y: 200,
        opacity: 0,
        ease: 'power3.easeOut',
        duration: 0.5
    }, '-=.7').from('#secBlob', {
        opacity: 0,
        scale: .8,
        x: 150,
        ease: 'power4.easeOut',
        duration: 0.2,
    }, '-=.5')
    // ScrollTrigger.update()
    return tl
}
export default ThirdSection
