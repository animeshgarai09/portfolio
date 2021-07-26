import styles from './ThirdSection.module.scss'
import Path from '../../public/svg/path.svg'
import Guy from '../../public/svg/guy.svg'
import Blob from '../../public/svg/secBlob.svg'
import { useEffect } from 'react'
import gsap from 'gsap'

const ThirdSection = () => {
    useEffect(() => {
        setTimeout(() => {
            let el = document.querySelector('#path_line');
            let len = el.getTotalLength();
            el.style.strokeDasharray = len;
            el.style.strokeDashoffset = len;
            console.log(len);

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '#section3',
                    start: 'top top',
                    end: '+=800',
                    scrub: true,
                    pin: true
                }
            })

            tl.to('#path_line', {
                strokeDashoffset: 0,
                duration: 0.7,
            }, '-=0.4').from('.point', {
                transformOrigin: 'center',
                opacity: 0,
                scale: 0,
                duration: 0.1,
                delay: -0.7,
                stagger: 0.1,
            }).from('.path_info', {
                opacity: 0,
                duration: 0.1,
                delay: -0.7,
                stagger: 0.1,
            }).from('#guy', {
                y: 200,
                ease: 'power3.out',
                duration: 0.5
            }, '-=.7').from('#secBlob', {
                opacity: 0,
                ease: 'power1.in',
                duration: 0.2,
            }, '-=.5')
        }, 100)
    })
    return (
        <div className={styles.container} id='section3'>
            <span className={styles.shadow_T}>career</span>
            <div className={styles.path_con}>
                <Path className={styles.path} />
                <div className={styles.info + ' path_info'}>
                    <span>2015</span>
                    <p>Started Freelancing as a Logo Designer</p>
                </div>
                <div className={styles.info + ' path_info'}>
                    <span>2016</span>
                    <p>Started working as a graphic designer at webb4biz</p>
                </div>
                <div className={styles.info + ' path_info'}>
                    <span>2018</span>
                    <p>Joined TCS as Assistant system engineer. Still working</p>
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

        </div>
    )
}

export default ThirdSection
