import styles from './Skills.module.scss'
import { getSkillIcon } from '../../constants/HelperFunctions'

const Skills = () => {
    return (
        <div className={styles.container}>
            <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto' }}>
                <div className={styles.skill_item} data-index='0'>
                    {getSkillIcon(0, 'Skill')}
                </div>
                <div className={styles.skill_item} data-index='1'>
                    {getSkillIcon(1, 'Skill')}
                </div>
                <div className={styles.skill_item} data-index='2'>
                    {getSkillIcon(2, 'Skill')}
                </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto auto' }}>
                <div className={styles.skill_item} data-index='3'>
                    {getSkillIcon(3, 'Skill')}
                </div>
                <div className={styles.skill_item} data-index='4'>
                    {getSkillIcon(4, 'Skill')}
                </div>
                <div className={styles.skill_item} data-index='5'>
                    {getSkillIcon(5, 'Skill')}
                </div>
                <div className={styles.skill_item} data-index='6'>
                    {getSkillIcon(6, 'Skill')}
                </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto' }}>
                <div className={styles.skill_item} data-index='7'>
                    {getSkillIcon(7, 'Skill')}
                </div>
                <div className={styles.skill_item} data-index='8'>
                    {getSkillIcon(8, 'Skill')}
                </div>
                <div className={styles.skill_item} data-index='9'>
                    {getSkillIcon(9, 'Skill')}
                </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto auto' }}>
                <div className={styles.skill_item} data-index='10'>
                    {getSkillIcon(10, 'Skill')}
                </div>
                <div className={styles.skill_item} data-index='11'>
                    {getSkillIcon(11, 'Skill')}
                </div>
                <div className={styles.skill_item} data-index='12'>
                    {getSkillIcon(12, 'Skill')}
                </div>
                <div className={styles.skill_item} data-index='13'>
                    {getSkillIcon(13, 'Skill')}
                </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto' }}>
                <div className={styles.skill_item} data-index='14'>
                    {getSkillIcon(14, 'Skill')}
                </div>
                <div className={styles.skill_item} data-index='15'>
                    {getSkillIcon(15, 'Skill')}
                </div>
                <div className={styles.skill_item} data-index='16'>
                    {getSkillIcon(16, 'Skill')}
                </div>
            </div>
        </div>
    )
}
export default Skills
