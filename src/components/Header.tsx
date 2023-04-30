import React from "react"
import Navbar from "./Navbar"
import Head from "next/head"
import styles from "../styles/Header.module.css"

const Header =()=>{
    return(
        <header className={styles.header}>
            <div className="conteiner">
                <Head>
                    <img src="../images/Header.png"/>
                    <Navbar/>
                </Head>
            </div>
        </header>
    )
}

export default Header