import React from "react"
import Link from "next/link"
import styles from "../styles/Footer.module.css"

const Footer=()=>{
    return(
        <footer className={styles.footer}>
            <div className="">
            <h1>Personal Information</h1>
                <nav >
                    <Link className={styles.link} href="https://www.instagram.com/sebas_arav/">Instagram</Link>
                    <Link className={styles.link} href="https://www.facebook.com/sebas.arias.10297/">Facebook</Link>
                </nav>
            </div>
        </footer>
    )
}

export default Footer