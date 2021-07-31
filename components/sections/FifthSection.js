import styles from './FifthSection.module.scss'

const FifthSection = ({ refs }) => {
    return (
        <section ref={(el) => refs.current.push(el)} style={{ 'height': '100vh' }} id='section5'>
            <h1>Fifth Section</h1>
        </section>
    )
}

export default FifthSection
