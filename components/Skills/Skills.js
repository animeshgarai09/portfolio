import styles from './Skills.module.scss'
import { DiPython } from 'react-icons/di'
import { FaSass } from 'react-icons/fa'
import { FiFigma } from 'react-icons/fi'
import { DiJavascript1 } from 'react-icons/di'
import { SiFlask, SiAdobexd, SiCss3, SiHtml5, SiAdobephotoshop, SiNextDotJs, SiReact, SiRedux, SiNodeDotJs, SiAdobeillustrator, SiDjango, SiTailwindcss, SiJava } from 'react-icons/si'
const Skills = () => {
    const list = [
        DiPython,
        FaSass,
        SiFlask,
        SiAdobexd,
        SiHtml5,
        SiCss3,
        SiAdobephotoshop,
        SiNextDotJs,
        SiReact,
        SiRedux,
        FiFigma,
        DiJavascript1,
        SiNodeDotJs,
        SiAdobeillustrator,
        SiDjango,
        SiTailwindcss,
        SiJava
    ]

    return (
        <div className={styles.container}>
            <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto' }}>
                <div className={styles.skill_item}>
                    <DiPython />
                </div>
                <div className={styles.skill_item}>
                    <FaSass />
                </div>
                <div className={styles.skill_item}>
                    <SiFlask />
                </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto auto' }}>
                <div className={styles.skill_item}>
                    <SiAdobexd />
                </div>
                <div className={styles.skill_item}>
                    <SiHtml5 />
                </div>
                <div className={styles.skill_item}>
                    <SiCss3 />
                </div>
                <div className={styles.skill_item}>
                    <SiAdobephotoshop />
                </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto' }}>
                <div className={styles.skill_item}>
                    <SiNextDotJs />
                </div>
                <div className={styles.skill_item}>
                    <SiReact />
                </div>
                <div className={styles.skill_item}>
                    <SiRedux />
                </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto auto' }}>
                <div className={styles.skill_item}>
                    <FiFigma />
                </div>
                <div className={styles.skill_item}>
                    <DiJavascript1 />
                </div>
                <div className={styles.skill_item}>
                    <SiNodeDotJs />
                </div>
                <div className={styles.skill_item}>
                    <SiAdobeillustrator />
                </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto' }}>
                <div className={styles.skill_item}>
                    <SiDjango />
                </div>
                <div className={styles.skill_item}>
                    <SiTailwindcss />
                </div>
                <div className={styles.skill_item}>
                    <SiJava />
                </div>
            </div>
        </div>
    )
}
export default Skills
