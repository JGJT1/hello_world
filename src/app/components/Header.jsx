import styles from '../styles/Header.module.css'
import Link from 'next/link'

export default function Header(){
  return (
    <header className={styles.header}>
      <div>
        <ul>
          <li><Link href='/'>Home</Link></li>
        </ul>
      </div>
      <div>
        <ul>
          <li><Link href='/pages/leet'>Leet</Link></li>
          <li><Link href='/pages/about'>About</Link></li>
        </ul>
      </div>
    </header>
  )
}