import Hero from '../src/components/Hero'
import Navbar from '../src/components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Hero />
    </div>
  )
}
