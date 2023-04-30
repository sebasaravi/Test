import React from "react";
import Link from "next/link"
import styles from "../styles/Navbar.module.css"

const Navbar = ()=>{
    return(
        <>
            <nav>
                <Link className={styles.navbar} href="https://www.linkedin.com/in/sebas-arias-2442571bb/" >
                    Profile
                </Link>
                <Link className={styles.navbar} href="/projects" >
                    GitHub Projects
                </Link>
                <Link className={styles.navbar} href="/calltoaction" >
                    Call to action
                </Link>
            </nav>
        </>
    )

}


export default Navbar

