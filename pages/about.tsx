import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sobre mim - Meu Portfólio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Sobre mim
        </h1>

        <p className={styles.description}>
          Eu sou um desenvolvedor web apaixonado por criar soluções inovadoras e eficientes.
        </p>

      </main>

      <footer className={styles.footer}>
        Powered by Next.js
      </footer>
    </div>
  )
}
