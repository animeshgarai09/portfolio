import styles from './BlogCard.module.scss'
import Image from 'next/image'
import image from '../../public/png/blog1.gif'
import { HiOutlineBookOpen } from "react-icons/hi"
const BlogCard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.img_container}>
                <Image src={image} alt="test" layout="fill" quality='75' className={styles.image} />
            </div>
            <div className={styles.content}>
                <a href="#" target="_blank" rel="noopener noreferrer">How to create a reusable menu component in react</a>
                <span><HiOutlineBookOpen />9 minutes read</span>
                <p>Dropdown menus have always been an integral part of any modern UI for a better user experience throughout an app. Dropdown menus are essential for a clean design layout where user actions can be organized for easy accessibility without cluttering the UI.</p>
            </div>

        </div>
    )
}

export default BlogCard