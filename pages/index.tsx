import Head from 'next/head'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <>
    
    <div className={styles.container}>
   
      <Head>
        <title>Meu Portfólio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bem-vindo ao meu Portfólio!
        </h1>

        <p className={styles.description}>
          Aqui você pode encontrar informações sobre meus projetos e habilidades.
        </p>

      </main>

      
    </div>
    </>
  )
}