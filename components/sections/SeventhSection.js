import { useState } from 'react'
import styles from './SeventhSection.module.scss'
import SecGuy from '../../public/svg/secGuy.svg'
import Bubble from '../../public/svg/bubble.svg'
import { sectionRefs } from '../../constants/HelperFunctions'


const SeventhSection = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [validationState, setValidationState] = useState([false, false, false])

    const handleSubmit = (e) => {
        e.preventDefault();
        let regName = /^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/;
        let regEmail = /^[a-zA-Z0-9_!#$%&'*+/=?`{|}~^-]+(?:\.[a-zA-Z0-9_!#$%&'*+/=?`{|}~^-]+)*@[a-zA-Z0-9-]+(?:\.[a-zA-Z]+)*$/
        let regMessage = /^[a-zA-Z0-9_!#$%&'*+/=?{|}~^-`]$/

        if (regName.test(name)) {
            setValidationState(ini => [false, ini[1], ini[2]])
        } else {
            setValidationState(ini => [true, ini[1], ini[2]])
        }
        if (regEmail.test(email)) {
            setValidationState(ini => [ini[0], false, ini[2]])
        } else {
            setValidationState(ini => [ini[0], true, ini[2]])
        }
        if (message && regMessage.test(regMessage)) {
            setValidationState(ini => [ini[0], ini[1], false])

        } else {
            setValidationState(ini => [ini[0], ini[1], true])
        }

    }

    return (
        <section ref={(el) => sectionRefs[5] = el} className={styles.container} id='section7'>
            <div className={styles.left_col}>
                <form onSubmit={(e) => handleSubmit(e)} noValidate autoComplete='off'>
                    <span className={styles.shadow_T}>contact</span>

                    <span className={styles.text}>Always ready to create something amazing. Say HI.</span>
                    <div className={styles.top_con}>
                        <div>
                            <label htmlFor="name">Your Name</label>

                            <input
                                id="name"
                                type="text"
                                name="name"
                                placeholder="e.x. Elon musk"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                className={validationState[0] ? styles.err : undefined}
                            />
                            {validationState[0] && <span className={styles.error}>Please check you name</span>}
                        </div>
                        <div>
                            <label htmlFor="email">Your Email</label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                placeholder="e.x. elonmusk@mars.com"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                className={validationState[1] ? styles.err : undefined}
                            />
                            {validationState[1] && <span className={styles.error}>Please check your email</span>}
                        </div>
                    </div>
                    <div>

                        <textarea
                            id="message"
                            name="message"
                            value={message}
                            placeholder="Write down a short message"
                            onChange={e => setMessage(e.target.value)}
                            className={validationState[2] ? styles.err : undefined}
                        />
                        {validationState[2] && <span className={styles.error}>Please check your message</span>}
                    </div>
                    <button>Send</button>
                </form>
            </div>


            <div className={styles.right_col}>

                <div className={styles.svg_con}>
                    <Bubble />
                    <SecGuy />
                </div>

            </div>
        </section>
    )
}

export default SeventhSection

