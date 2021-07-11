import styles from './FloatingNav.module.scss'
import { FloatingNav_el } from '../../constants/_animationDuration'
// import { Link } from 'react-scroll'
import { Tween } from 'react-gsap'
import { FiSmile, FiFeather, FiLayers, FiMessageCircle } from "react-icons/fi";
const FloatingNav = () => {
    return (
        <Tween
            from={{ opacity: '0', transformOrigin: 'center', scale: '0' }}
            to={{ opacity: '1', scale: '1' }}
            delay={FloatingNav_el.delay}
            duration={FloatingNav_el.duration}
            ease="expo.out(0.9, 0.1)">

            <div className={styles.container}>

                <ul >
                    <Tween
                        from={{ x: '-10px', opacity: '0' }}
                        to={{ x: '0px', opacity: '1' }}
                        delay={FloatingNav_el.delay}
                        duration={FloatingNav_el.duration}
                        stagger={0.3}
                        ease="expo.out(0.9, 0.1)">
                        {/* <li className="navlink1"><Link to="about" spy={true} smooth={true}><a data-tip="About" data-class='nav_tip' data-place='right' data-offset='{"right":6}'><FiSmile /></a></Link></li> */}
                        <li className="navlink1"><a data-tip="About" data-class='nav_tip' data-place='right' data-offset='{"right":6}'><FiSmile /></a></li>
                        <li className="navlink2"><a href="" data-tip="Skills" data-class='nav_tip' data-place='right' data-offset='{"right":6}'><FiFeather /></a></li>
                        <li className="navlink3"><a href="" data-tip="Portfolio" data-class='nav_tip' data-place='right' data-offset='{"right":6}'><FiLayers /></a></li>
                        <li className="navlink4"><a href="" data-tip="Contact" data-class='nav_tip' data-place='right' data-offset='{"right":6}'><FiMessageCircle /></a></li>
                    </Tween>
                </ul>

            </div>
        </Tween>

    )
}

export default FloatingNav
