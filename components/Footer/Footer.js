import styles from './Footer.module.scss'
import Logo from '../../public/svg/logo.svg'
import { HiOutlineMail } from 'react-icons/hi'
import { RiTwitterLine, RiLinkedinLine } from 'react-icons/ri'
import { FiGithub } from 'react-icons/fi'
import { FaHeart } from 'react-icons/fa'
const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.footer}>
                <div className={styles.top_row}>
                    <p>&#169; copyright reserved 2021</p>
                    <div className={styles.logo_con}>
                        <Logo />
                        <p>Handcrafted with <FaHeart /> & imagination.</p>
                    </div>
                    <div className={styles.social_con}>
                        <RiLinkedinLine />
                        <FiGithub />
                        <RiTwitterLine />
                        <HiOutlineMail />
                    </div>
                </div>
                <div className={styles.bottom_row}>
                    <div className="links">
                        <a href="">Home</a>
                        <a href="">Blog</a>
                        <a href="">Graphic projects</a>
                        <a href="">Web projects</a>
                    </div>
                    <p>&#169; copyright reserved 2021</p>

                </div>
            </div>

        </div>
    )
}

export default Footer
