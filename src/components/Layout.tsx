import React from "react"
import styles from "../styles/Layout.module.css"

type LayoutProps ={
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({children}) =>{
    return(
        <>
            <div className={styles.layout}>
                <img src="../images/Computer.png"/>
                <main>{children}</main>
            </div>
            
        </> 
    )
}

export default Layout