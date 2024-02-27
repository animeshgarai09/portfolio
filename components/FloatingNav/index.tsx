import styles from "./styles.module.scss"
import { FiSmile, FiFeather, FiLayers, FiMessageCircle, FiFlag, FiArrowUp } from "react-icons/fi"
import { HiOutlinePencil } from "react-icons/hi"

const FloatingNav = () => {
    return (
        <div className={styles.container}>
            <ul>
                <li>
                    <a id='1' data-tip='About' data-class='nav_tip' data-place='right' data-offset='{"right":6}'></a>
                </li>
                <li>
                    <a id='2' data-tip='Career' data-class='nav_tip' data-place='right' data-offset='{"right":6}'></a>
                </li>
                <li>
                    <a id='4' data-tip='Projects' data-class='nav_tip' data-place='right' data-offset='{"right":6}'></a>
                </li>
                <li>
                    <a id='5' data-tip='Blogs' data-class='nav_tip' data-place='right' data-offset='{"right":6}'></a>
                </li>
            </ul>

            <span>
                <a data-tip='Top' data-class='nav_tip' data-place='right' data-offset='{"right":6}'>
                    <FiArrowUp />
                </a>
            </span>
        </div>
    )
}

export default FloatingNav
