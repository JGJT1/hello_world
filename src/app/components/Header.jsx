import styles from '../styles/Header.module.css'
import Link from 'next/link'

export default function Header(){
  return (
    <header>
      <ul>
        <li><Link href='/pages/about'>Sobre</Link></li>
        <li><Link href='/pages/leet'>Leet</Link></li>
      </ul>
    </header>
  )
}