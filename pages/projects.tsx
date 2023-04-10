import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Projects() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Meus Projetos - Meu Portfólio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Meus Projetos
        </h1>

        <p className={styles.description}>
          Aqui estão alguns dos meus projetos recentes:
        </p>

      </main>

      <footer className={styles.footer}>
        Powered by Next.js
      </footer>
    </div>
  )
}
