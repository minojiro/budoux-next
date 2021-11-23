import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { useBudouX } from '../hooks/useBudouX'

const Home: NextPage = () => {
  const { parse } = useBudouX()
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。
        </h1>
        <h1 className={styles.title}>
          {parse('あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。')}
        </h1>
      </main>
    </div>
  )
}

export default Home
