import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contato - Meu Portfólio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Contato
        </h1>

        <p className={styles.description}>
          Entre em contato comigo em:
        </p>

      </main>

</div>
  )
}