import styles from './FourthSectionMB.module.scss'
import { SkillData, getSkillIcon, loadStars, sectionRefs, } from '../../constants/HelperFunctions'
import { useEffect } from 'react';
import gsap from 'gsap'

const FourthSectionMB = () => {
    useEffect(() => {
        gsap.utils.toArray(`.${styles.card}`).forEach((card, i) => {
            gsap.timeline({
                scrollTrigger: {
                    scroller: card.closest(`.${styles.card_con}`),
                    horizontal: true,
                    trigger: card.closest(`.${styles.card}`),
                    start: "left right-=40",
                    end: "left center-=60",
                    scrub: true,
                }
            }).from(card, { scale: 0.8 }, 0)
        })
    }, [])

    return (
        <section ref={(el) => sectionRefs[2] = el} className={styles.container} >
            <span className={styles.shadow_T}>skills</span>
            <div className={styles.card_con}>
                <div className={styles.row}>
                    {generateCard(8)}
                    {generateCard(9)}
                    {generateCard(4)}
                    {generateCard(11)}
                    {generateCard(10)}
                    {generateCard(6)}
                    {generateCard(15)}
                    {generateCard(0)}
                    {generateCard(14)}
                </div>
                <div className={styles.row}>
                    {generateCard(7)}
                    {generateCard(1)}
                    {generateCard(5)}
                    {generateCard(12)}
                    {generateCard(3)}
                    {generateCard(13)}
                    {generateCard(16)}
                    {generateCard(2)}
                </div>
            </div>
        </section>
    )
}


const generateCard = (index) => {
    return (
        <div className={styles.card}>
            <div className={styles.heading}>
                {getSkillIcon(index, 'Skill')}
                <span>{SkillData[index].name}</span>
            </div>
            <p>{SkillData[8].info}</p>
            <div className={styles.rating}>
                <div className={styles.stars}>
                    <label>Confidence:</label>
                    <span className={styles.star_con}>
                        {loadStars(SkillData[index].stars)}
                    </span>
                </div>
                <div>
                    <label>Experience:</label>
                    <span className={styles.ex}>{SkillData[index].ex}</span>
                </div>
            </div>
        </div>
    )
}
export default FourthSectionMB
