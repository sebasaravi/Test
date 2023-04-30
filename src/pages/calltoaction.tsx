import React from "react"
import Header from "@/components/Header"
import Layout from "@/components/Layout"
import Footer from "@/components/Footer"

export default function CalltoAction(){
    return(
        <div>
            <Header/>
            <Layout>
                <h1>Welcome to my form</h1>
                <h3>Name:</h3>
                <input/>
                <h3>Email:</h3>
                <input/>
                <h3>Telephone:</h3>
                <input/>
            </Layout>
            <Footer/>
            
        </div>
    )
}
