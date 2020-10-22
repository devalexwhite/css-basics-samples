import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
    <h1>Examples</h1>
    <ul>
      <li><a href="/cssExamples/centering">Centering (CSS)</a></li>
      <li><a href="/tailwindExamples/centering">Centering (Tailwind)</a></li>
      <li><a href="/cssExamples/grid">Grid (CSS)</a></li>
      <li><a href="/tailwindExamples/grid">Grid (Tailwind)</a></li>
      <li><a href="/cssExamples/hover">Hover (CSS)</a></li>
      <li><a href="/tailwindExamples/hover">Hover (Tailwind)</a></li>
      <li><a href="/cssExamples/mobile">Mobile (CSS)</a></li>
      <li><a href="/tailwindExamples/mobile">Mobile (Tailwind)</a></li>
    </ul>
    </div>
  )
}
