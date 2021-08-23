import styles from './Skills.module.scss'
import { getSkillIcon } from '../../constants/HelperFunctions'

const Skills = () => {
    return (
        <div className={styles.container}>
            <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto' }}>
                <div className={styles.skill_item} data-index='0'>
                    {getSkillIcon(0)}
                </div>
                <div className={styles.skill_item} data-index='1'>
                    {getSkillIcon(1)}
                </div>
                <div className={styles.skill_item} data-index='2'>
                    {getSkillIcon(2)}
                </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto auto' }}>
                <div className={styles.skill_item} data-index='3'>
                    {getSkillIcon(3)}
                </div>
                <div className={styles.skill_item} data-index='4'>
                    {getSkillIcon(4)}
                </div>
                <div className={styles.skill_item} data-index='5'>
                    {getSkillIcon(5)}
                </div>
                <div className={styles.skill_item} data-index='6'>
                    {getSkillIcon(6)}
                </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto' }}>
                <div className={styles.skill_item} data-index='7'>
                    {getSkillIcon(7)}
                </div>
                <div className={styles.skill_item} data-index='8'>
                    {getSkillIcon(8)}
                </div>
                <div className={styles.skill_item} data-index='9'>
                    {getSkillIcon(9)}
                </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto auto' }}>
                <div className={styles.skill_item} data-index='10'>
                    {getSkillIcon(10)}
                </div>
                <div className={styles.skill_item} data-index='11'>
                    {getSkillIcon(11)}
                </div>
                <div className={styles.skill_item} data-index='12'>
                    {getSkillIcon(12)}
                </div>
                <div className={styles.skill_item} data-index='13'>
                    {getSkillIcon(13)}
                </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto' }}>
                <div className={styles.skill_item} data-index='14'>
                    {getSkillIcon(14)}
                </div>
                <div className={styles.skill_item} data-index='15'>
                    {getSkillIcon(15)}
                </div>
                <div className={styles.skill_item} data-index='16'>
                    {getSkillIcon(16)}
                </div>
            </div>
        </div>
    )
}
export default Skills
