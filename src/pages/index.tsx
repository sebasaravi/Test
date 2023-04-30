import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Layout from '@/components/Layout'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header/>
      <Layout>
        <h1>Hello Im Sebastian Arias Aviles, I live in Corredores, Puntarenas, Costa Rica</h1>
        <p>I dont like to programming but I need to complete my test, If I dont complete is XD because I dont like to web programming</p>
      </Layout>
      <Footer/>
    </>
  )
}
