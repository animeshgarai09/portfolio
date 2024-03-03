"use client"
import React from "react"
import Logo from "@/public/svg/logo.svg"
import { FiSun } from "react-icons/fi"
import { HiOutlineViewGrid } from "react-icons/hi"
import styles from "./styles.module.scss"
const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <Logo />
            </div>
            {/* <nav>
                <FiSun />
                <HiOutlineViewGrid />
            </nav> */}
        </div>
    )
}

export default Header
