import styles from './Footer.module.scss'
import Logo from '../../public/svg/logo.svg'
import { HiOutlineMail } from 'react-icons/hi'
import { RiTwitterLine, RiLinkedinLine } from 'react-icons/ri'
import { FiGithub } from 'react-icons/fi'
import { FaHeart } from 'react-icons/fa'
import Link from 'next/link'

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
                        <Link href="https://www.linkedin.com/in/animesh-garai-29a5251b4">
                            <a target="_blank" className='p-link'><RiLinkedinLine /></a>
                        </Link>
                        {/* <Link href="/projects"> */}
                        <Link href="https://github.com/animeshgarai09">
                            <a target="_blank" className='p-link'><FiGithub /></a>
                        </Link>
                        <Link href="https://twitter.com/animeshgarai09">
                            <a target="_blank" className='p-link'><RiTwitterLine /></a>
                        </Link>
                        <Link href="mailto:animeshgarai09@gmail.com">
                            <a target="_blank" className='p-link'><HiOutlineMail /></a>
                        </Link>
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
