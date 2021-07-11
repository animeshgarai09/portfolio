import Link from 'next/link'
import styles from './Header.module.scss'
import Logo from '../../public/svg/logo.svg'
import useDarkMode from "use-dark-mode";
import { useEffect, useState } from 'react';
import ReactTooltip from 'react-tooltip';

const Header = () => {
    const darkMode = useDarkMode();
    const [mount, setMount] = useState(false);
    console.log(darkMode.value)
    useEffect(() => {
        setMount(true)
    }, [])

    return (
        <>
            {mount && <ReactTooltip type={darkMode.value ? 'dark' : 'light'} effect='solid' />}
            <div
                className={styles.main}
            >
                <div className={styles.container}>
                    <div className={styles.logo}>
                        <Logo />
                    </div>
                    <div className={styles.links}>
                        <Link href="/certificates">
                            <a>Certificates</a>
                        </Link>
                        <Link href="/projects">
                            <a>Projects</a>
                        </Link>
                        <div className={styles.switch}>
                            <input
                                id={styles.themeSwitcher}
                                name="theme-switcher"
                                type="checkbox"
                                checked={darkMode.value}
                                onChange={darkMode.toggle}
                            />
                            <label htmlFor={styles.themeSwitcher}></label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header
