import Head from 'next/head'
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Training Calendar</title>
      </Head>

      <main>
        <h1 className={styles.description}>
          Schedule a training at your favorite gym in seconds!
        </h1>
      </main>

      <footer>
        <span style={{ whiteSpace: 'pre-wrap' }}>Developed by </span><a href='https://soma.veszelovszki.hu/'>Soma Veszelovszki</a>
      </footer>
    </div>
  )
}