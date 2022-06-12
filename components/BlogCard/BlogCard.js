import styles from './BlogCard.module.scss'
import Image from 'next/image'
import { HiOutlineBookOpen } from "react-icons/hi"
const BlogCard = ({ blog }) => {
    return (
        <div className={styles.container}>
            <div className={styles.img_container}>
                <Image src={blog.img} alt="test" layout="fill" quality='50' className={styles.image} />
            </div>
            <div className={styles.content}>
                <a href={blog.link} target="_blank" rel="noopener noreferrer">{blog.title}</a>
                <span><HiOutlineBookOpen />{blog.time}</span>
                <p>{blog.des}</p>
            </div>
        </div>
    )
}

export default BlogCard