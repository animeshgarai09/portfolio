import styles from './ProjectCard.module.scss'
import { getSkillIcon } from '../../constants/HelperFunctions'

const ProjectCard = ({ info, index, layout }) => {
    console.log(info)
    return (
        <div className={styles.card_con + " " + (layout && styles.switch)}>
            <div className={styles.left_col}>
                <div className={styles.header}>
                    <div>
                        <h5>Featured project</h5>
                        <h2>{info.name}</h2>
                    </div>
                    <h1>0{index}.</h1>
                </div>
                <div className={styles.intro_con}>
                    <p>{info.intro}</p>
                </div>
                <div className={styles.feature_con}>
                    {info.features.map((item, i) => (
                        <span key={i} className={styles.feature_item}>{item}</span>
                    ))}
                </div>
                <div className={styles.tech_con}>
                    {info.tech.map((item, i) => (
                        <span key={i}> {item.icon} {item.name}</span>
                    ))}
                </div>
            </div>
            <div className={styles.right_col}>

            </div>
        </div>
    )
}

export default ProjectCard
